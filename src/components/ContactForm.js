import React, { useState, useEffect } from "react";
import ThankYou from "./ThankYou";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (Object.values(formData).some(value => value.trim() === "")) {
      alert("Uzupełnij wszystkie pola!");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Podaj poprawny adres e-mail!");
      return;
    }

    setSuccess(true);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {success ? (
        <ThankYou {...formData} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Imię i nazwisko:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Wpisz swoje imię i nazwisko"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Adres Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Wpisz swój email"
            />
          </div>

          <div>
            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-700">
              Temat:
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Wybierz temat</option>
              {["Wsparcie techniczne", "Wycena projektu", "Współpraca", "Inne"].map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
              Opis:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Napisz tutaj opis..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          <button onClick={() => setFormData({ name: "", email: "", topic: "", description: "" })}
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
            Resetuj formularz
          </button>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Wyślij
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
