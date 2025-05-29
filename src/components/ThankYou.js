import React, { useEffect, useState } from "react";

const ThankYou = ({ name, email, topic, description }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toLocaleString();
    setDate(currentDate);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-800 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Dziękujemy za przesłanie wiadomości
      </h2>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">Imię i nazwisko:</h4>
          <p className="ml-2">{name}</p>
        </div>
        <div>
          <h4 className="font-semibold">Adres Email:</h4>
          <p className="ml-2">{email}</p>
        </div>
        <div>
          <h4 className="font-semibold">Temat:</h4>
          <p className="ml-2">{topic}</p>
        </div>
        <div>
          <h4 className="font-semibold">Opis:</h4>
          <p className="ml-2 whitespace-pre-wrap">{description}</p>
        </div>
        <div>
          <h4 className="font-semibold">Data wysłania:</h4>
          <p className="ml-2">{date}</p>
        </div>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-8 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
      >
        Wróć
      </button>
    </div>
  );
};

export default ThankYou;
