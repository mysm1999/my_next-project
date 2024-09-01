import React, { useEffect, useState } from "react";
import "../app/globals.css";

import Header from "../app/lib/components/Header";

export default function FoodiesCommunity() {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("submittedData")) || [];
    setSubmittedData(data);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedData = submittedData.filter(
      (_, index) => index !== indexToDelete
    );

    // ذخیره داده‌های به‌روز شده در localStorage
    localStorage.setItem("submittedData", JSON.stringify(updatedData));

    // به‌روزرسانی state
    setSubmittedData(updatedData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center">Foodies Community</h1>
      <p className="mb-6 text-center">
        See the meals shared by our community members.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {submittedData.length > 0 ? (
          submittedData.map((data, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col"
            >
              {data.image && (
                <img
                  src={data.image}
                  alt="Shared Meal"
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-2xl font-bold mb-2 text-orange-400">
                {data.title}
              </h2>
              <p className="text-sm mb-2 text-gray-300">
                Shared by: {data.name}
              </p>
              <p className="mb-4 text-gray-400">{data.summary}</p>
              <p className="mb-4 text-gray-400">{data.instructions}</p>
              <div className="mt-auto flex justify-between">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                  View Details
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-400">
            No meals shared yet.
          </p>
        )}
      </div>
    </div>
  );
}
