import Header from "../app/lib/components/Header";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import "../app/globals.css";

export default function BrowseMeals() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    summary: "",
    instructions: "",
    image: null,
  });

  const router = useRouter();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  useEffect(() => {
    // حذف تصویر از formData قبل از ذخیره‌سازی
    const { image, ...restFormData } = formData;
    localStorage.setItem("formData", JSON.stringify(restFormData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let previousData;
    try {
      previousData = JSON.parse(localStorage.getItem("submittedData")) || [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      previousData = [];
    }

    if (!Array.isArray(previousData)) {
      console.warn("previousData is not an array. Resetting to empty array.");
      previousData = [];
    }

    const newData = [...previousData, formData];

    try {
      localStorage.setItem("submittedData", JSON.stringify(newData));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }

    localStorage.removeItem("formData");

    router.push("/foodies-community");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Browse Meals</h1>
      <p className="mb-6">Explore our delicious meals below.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-1/2 p-3 bg-gray-800 text-white rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-1/2 p-3 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="w-full p-3 bg-gray-800 text-white rounded"
          required
        />
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          placeholder="Short Summary"
          className="w-full p-3 bg-gray-800 text-white rounded"
          required
        />
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleInputChange}
          placeholder="Instructions"
          className="w-full p-3 bg-gray-800 text-white rounded h-32"
          required
        ></textarea>
        <div className="flex space-x-4 items-center">
          <input
            type="file"
            onChange={handleImageChange}
            className="text-white"
            accept="image/*"
            required
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="h-16 w-16 rounded"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
