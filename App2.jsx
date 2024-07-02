import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import bpit from './assets/bpit.jpeg';

export default function App2() {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-4">
      <div className="w-full">
        <img src={bpit} className="w-full h-[250px] object-cover rounded-lg shadow-lg" alt="BPIT" />
      </div>
      <div className="w-full max-w-lg border-solid border-black border-6 flex flex-col bg-white bg-opacity-90 mt-10 mb-8 p-6 rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105">
        <h1 className="font-bold text-center mt-10 text-3xl text-purple-800">NEWS & ANNOUNCEMENTS</h1>
        <div className="mt-5 flex justify-center">
          <label className="font-bold mr-3 text-purple-600">Sort by date: </label>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            dateFormat="dd/MM/yy"
            placeholderText="dd/mm/yy"
            className="border border-purple-400 p-2 rounded shadow-md transition duration-300 ease-in-out hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <ul className="pt-4 list-disc list-inside text-lg font-bold text-purple-800 ml-5">
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, voluptate adipisci veniam excepturi, provident eius aut iste harum quasi ratione porro debitis cum sed delectus quam.
          </li>
          <li className="list-none text-purple-500 pt-2">
            38 Minutes ago @Publisher
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <button className="bg-violet-800 text-white font-bold py-3 px-8 rounded-full text-xl w-56 hover:bg-purple-900 transform hover:scale-115 transition duration-300 ease-in-out">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}




 