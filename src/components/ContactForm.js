import React, { useState, useEffect } from "react";
import ThankYou from "./ThankYou";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    topic: "",
    description: "",    
    success: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldsToValidate = Object.entries(state).filter(
      ([key]) => key !== "success"
    );
    const hasEmptyField = fieldsToValidate.some(([_, value]) =>
      typeof value === "string" ? value.trim() === "" : !value
    );
    if (hasEmptyField) {
      alert("Uzupełnij formularz!");
      setState({ ...state, success: false });
    } else {
      setState({ ...state, success: true });
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {state.success ? (
        <ThankYou props={state} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Imię i nazwisko:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Wpisz swoje imię i nazwisko"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Adres Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Wpisz swój email"
            />
          </div>

          <div>
            <label
              htmlFor="topic"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Temat:
            </label>
            <select
              id="topic"
              name="topic"
              value={state.topic}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Wybierz temat
              </option>
              {[
                "Wsparcie techniczne",
                "Wycena projektu",
                "Współpraca",
                "Inne",
              ].map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Opis:
            </label>
            <textarea
              id="description"
              name="description"
              value={state.description}
              onChange={handleChange}
              rows={4}
              placeholder="Napisz tutaj opis..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

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

