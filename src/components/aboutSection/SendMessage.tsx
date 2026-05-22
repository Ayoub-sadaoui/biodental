"use client";
import React, { useState, useRef } from "react";
import { MdEmail as EnvelopeIcon } from "react-icons/md";

const Spinner = () => (
  <svg className="animate-spin h-6 w-6 text-white mx-auto" viewBox="0 0 24 24">
    <circle
      className="opacity-100"
      cx="12"
      cy="12"
      r="8"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
      strokeDasharray="20 40"
    />
  </svg>
);

const initialForm = { name: "", email: "", message: "" };

const SendMessage = ({ pageContent }: { pageContent?: any }) => {
  const title = pageContent?.send_message_title || "Contactez-nous";
  const [form, setForm] = useState(initialForm);
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [error, setError] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setButtonState("loading");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Échec de l'envoi du message");
      }
      setButtonState("success");
      setForm(initialForm);
      timeoutRef.current = setTimeout(() => setButtonState("idle"), 5000);
    } catch (err: any) {
      setError(err.message || "Échec de l'envoi du message");
      setButtonState("error");
      timeoutRef.current = setTimeout(() => setButtonState("idle"), 5000);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="min-h-full md:min-h-screen w-full flex items-center  justify-start md:justify-center bg-[#9aae92] py-10 px-2">
      <form
        className="w-full max-w-md bg-[#9aae92] rounded-xl flex flex-col items-center px-8 py-0 md:py-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <h2 className="text-[34px] md:text-[50px] font-bold min-w-fit font-playfair-important text-[#2b3029] mb-8 text-center  ">
            {title}
          </h2>
          <span className="ml-2 rotate-[330deg] mb-8">
            <EnvelopeIcon className="text-black w-[46px] h-[42px]" />
          </span>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="name"
            className="block text-[15px] text-[#2b3029] mb-1 font-medium"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:border-white focus:ring-2 focus:ring-white/30 outline-none text-white placeholder:text-white transition"
            required
            value={form.name}
            onChange={handleChange}
            disabled={buttonState === "loading"}
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="email"
            className="block text-[15px] text-[#2b3029] mb-1 font-medium"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:border-white focus:ring-2 focus:ring-white/30 outline-none text-white placeholder:text-white transition"
            required
            value={form.email}
            onChange={handleChange}
            disabled={buttonState === "loading"}
          />
        </div>
        <div className="w-full mb-6">
          <label
            htmlFor="message"
            className="block text-[15px] text-[#2b3029] mb-1 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:border-white focus:ring-2 focus:ring-white/30 outline-none text-white placeholder:text-white transition resize-none"
            placeholder="Votre message..."
            required
            value={form.message}
            onChange={handleChange}
            disabled={buttonState === "loading"}
          />
        </div>
        {error && (
          <div className="w-full text-center text-red-200 mb-4">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-[#222] text-white rounded-md py-2 text-[14px] font-semibold hover:bg-[#333] transition mt-2 flex items-center justify-center min-h-[44px]"
          disabled={buttonState === "loading"}
        >
          {buttonState === "loading" && <Spinner />}
          {buttonState === "idle" && "Envoyer"}
          {buttonState === "error" && "Réessayer"}
          {buttonState === "success" && "Merci"}
        </button>
      </form>
    </section>
  );
};

export default SendMessage;
