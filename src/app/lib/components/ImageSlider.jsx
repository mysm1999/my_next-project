"use client";

import React, { useState, useEffect } from "react";

const images = ["/images/11.jpg", "/images/22.jpg", "/images/33.jpg"];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // per SEC
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-96 overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageSlider;
