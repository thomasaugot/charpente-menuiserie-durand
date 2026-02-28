"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const StaticForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      setStateMessage("Veuillez remplir tous les champs.");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000); // hide message after 5 seconds
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
        function (response) {
          setStateMessage("Message envoyé!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        function (error) {
          setStateMessage("Echec lors de l'envoi, veuillez réessayer");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    // Clear form fields after submission
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  const inputClass = `mt-2 pb-2 w-full !bg-transparent border-0 border-b-2 border-darkGrey/20 text-darkGrey placeholder-darkGrey/30 focus:outline-none focus:border-primary transition-colors duration-300 ${dosisFont.className}`;

  return (
    <form
      className="bg-transparent relative w-full p-0"
      onSubmit={sendMessage}
      action=""
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className={`${dosisFont.className} text-darkGrey/70 text-sm font-semibold tracking-wide`}>
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            placeholder="Jean Dupont"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={`${dosisFont.className} text-darkGrey/70 text-sm font-semibold tracking-wide`}>
            Téléphone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            ref={phoneRef}
            placeholder="+33 6 00 00 00 00"
            className={inputClass}
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className={`${dosisFont.className} text-darkGrey/70 text-sm font-semibold tracking-wide`}>
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          ref={emailRef}
          placeholder="jean.dupont@email.com"
          className={inputClass}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className={`${dosisFont.className} text-darkGrey/70 text-sm font-semibold tracking-wide`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          placeholder="Décrivez votre projet..."
          className={inputClass}
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        value="Send"
        disabled={isSubmitting}
        className={`${dosisFont.className} inline-flex items-center gap-2 bg-primary text-white text-sm font-bold tracking-wide uppercase px-8 py-3 rounded-full shadow-lg hover:bg-primary/85 transition-colors duration-300 disabled:opacity-50`}
      >
        Envoyer le message
      </button>
      {stateMessage && (
        <p className={`${dosisFont.className} text-darkGrey text-center text-sm font-semibold mt-3`}>
          {stateMessage}
        </p>
      )}
    </form>
  );
};

export default StaticForm;
