import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import custom CSS for transition

const slides = [
  "./image1.jpeg",
  "./image2.jpg",
  "./image3.webp",
  "./image4.jpg",
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 2 seconds delay for auto sliding

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentSlide]);

  return (
    <div className="carousel relative overflow-hidden m-10 h-96">
      <div
        className="carousel-inner flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item w-full flex-shrink-0">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 btn btn-circle bg-teal-400 text-white text-2xl"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 btn btn-circle bg-teal-400 text-white text-2xl"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;
