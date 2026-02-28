import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });
const robotoFont = localFont({ src: "../assets/fonts/RobotoMono-Regular.ttf" });

const PopupForm = ({ isOpen, closeModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      setStateMessage("Veuillez remplir tous les champs.");
      setIsSubmitting(false);
      setTimeout(() => setStateMessage(null), 5000);
      return;
    }

    const templateParams = {
      to_name: "Melvyn",
      from_name: nameRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
      email: emailRef.current.value,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        "tJE4pvbpWA5LNecY3"
      )
      .then(
        function () {
          setStateMessage("Message envoyé!");
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        },
        function () {
          setStateMessage("Echec lors de l'envoi, veuillez réessayer");
          setIsSubmitting(false);
          setTimeout(() => setStateMessage(null), 5000);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  const inputClass = `mt-2 pb-2 w-full bg-transparent border-0 border-b border-dark-grey/20 text-dark-grey placeholder-dark-grey/30 focus:outline-none focus:border-primary transition-colors duration-300 text-sm ${dosisFont.className}`;
  const labelClass = `text-dark-grey/50 text-xs font-semibold uppercase tracking-widest ${dosisFont.className}`;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
      style={{ zIndex: 100 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeModal} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[92vw] max-w-lg p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary shrink-0" />
          <h2 className={`text-dark-grey font-bold text-2xl tracking-wider ${robotoFont.className}`}>
            Demander un devis
          </h2>
        </div>

        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-dark-grey/5 hover:bg-dark-grey/10 transition-colors duration-200"
        >
          <svg className="h-4 w-4 text-dark-grey/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <form onSubmit={sendMessage} action="">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="popup-name" className={labelClass}>Nom</label>
              <input type="text" id="popup-name" name="name" ref={nameRef} placeholder="Jean Dupont" className={inputClass} />
            </div>
            <div>
              <label htmlFor="popup-phone" className={labelClass}>Téléphone</label>
              <input type="text" id="popup-phone" name="phone" ref={phoneRef} placeholder="+33 6 00 00 00 00" className={inputClass} />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="popup-email" className={labelClass}>Email</label>
            <input type="text" id="popup-email" name="email" ref={emailRef} placeholder="jean.dupont@email.com" className={inputClass} />
          </div>
          <div className="mb-6">
            <label htmlFor="popup-message" className={labelClass}>Message</label>
            <textarea id="popup-message" name="message" ref={messageRef} placeholder="Décrivez votre projet..." className={inputClass} rows="4" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${dosisFont.className} w-full inline-flex items-center justify-center gap-2 bg-primary text-white text-sm font-bold tracking-wide uppercase px-8 py-3 rounded-full shadow-lg hover:bg-primary/85 transition-colors duration-300 disabled:opacity-50`}
          >
            Envoyer le message
          </button>
          <div className="h-6 mt-3">
            {stateMessage && (
              <p className={`${dosisFont.className} text-dark-grey text-center text-sm font-semibold`}>
                {stateMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
