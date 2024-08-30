"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

type Props = {
  language: "en" | "es";
};

export default function ContactForm({ language }: Props) {
  const [from_name, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const obj = {
    to_name: "Freddy Puerta",
    from_name: from_name,
    message: message,
    reply_to: email,
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .send(
          "service_bg6645n",
          "template_yh4zxg6",
          obj, // Aquí pasamos la referencia al formulario
          "GIPoEoPgdsTgwR68n"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="max-w-md mx-auto w-full h-96 p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
      {isSubmitted ? (
        <p className="text-green-500 text-center">
          {language === "es"
            ? "¡Mensaje enviado con éxito!"
            : "Message sent successfully!"}
        </p>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              {language === "es" ? "Nombre" : "Name"}
            </label>
            <input
              className="w-full p-2 text-black rounded-lg"
              id="from_name"
              type="text"
              value={from_name}
              onChange={(e) => setFromName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              {language === "es" ? "Correo Electrónico" : "Email"}
            </label>
            <input
              className="w-full p-2 text-black rounded-lg"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              {language === "es" ? "Mensaje" : "Message"}
            </label>
            <textarea
              className="w-full p-2 text-black rounded-lg"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gold hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {language === "es" ? "Enviar" : "Send"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
