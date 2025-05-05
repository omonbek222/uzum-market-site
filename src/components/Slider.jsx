import React, { useState, useEffect } from "react";

// Rasm URL'lari
const images = [
  "https://storage.yandexcloud.net/um-prod-static/Landing_Fashion_v2/babym-1.jpg",
  "https://storage.yandexcloud.net/um-prod-static/Landing_Fashion_v2/224-1.jpg",
  "https://static.uzum.uz/landing_universal/4image.webp",
  "https://static.uzum.uz/landing_universal/w3main-1.webp",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Rasmni avtomatik almashirish
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); // 3 soniyada almashadi
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-12">
      <div className="w-[90%] h-[500px] overflow-hidden rounded-lg shadow-lg relative">
        {/* Rasmlar almashishini ko'rsatish */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
