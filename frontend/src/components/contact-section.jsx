import React, { useState } from "react";

const INITIAL_FORM = {
  name: "",
  email: "",
  message: "",
};
const API_URL = import.meta.env.VITE_API_URL;

const ContactSection = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "loading") {
      return;
    }
    setErrorMessage("");
    setStatus("loading");
    try {
      const response = await fetch(`${API_URL}/contacts/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Too many messages. Please wait a minute.");
        }
        throw new Error("Request failed");
      }
      setFormData(INITIAL_FORM);
      setErrorMessage("");
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="max-w-6xl mx-auto mt-20">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
          {/* Columna izquierda - Información de contacto */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-white mb-4 pl-2 border-l-4 border-blue-500">
              Contact
            </h3>
            <p className="text-gray-400 text-base leading-relaxed max-w-[220px]">
              Want to build something together or just say hi?
            </p>
            <p className="text-gray-500 text-sm mt-2 max-w-[280px]">
              Leave a message and I will get back to you as soon as I can.
            </p>

            {/* Botón de Enviar (Download CSV movido a /admin) */}
            <div className="mt-8">
              <button
                type="submit"
                form="contact-form"
                disabled={isLoading}
                className={`px-6 py-2 rounded-full text-sm font-medium border transition-all ${
                  isLoading
                    ? "bg-white/5 text-gray-500 border-white/10 cursor-not-allowed"
                    : "bg-white/5 text-gray-300 border-white/10 hover:border-blue-500/40 hover:text-blue-200"
                }`}
              >
                {isLoading ? "Sending..." : "Send message"}
              </button>
            </div>

            {/* Mensajes de estado */}
            <div className="mt-4">
              {status === "success" && (
                <p className="text-sm text-green-400">
                  Message sent. Thanks for reaching out.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="w-full space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-300">
                Message
              </label>
              <input
                id="message"
                name="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
