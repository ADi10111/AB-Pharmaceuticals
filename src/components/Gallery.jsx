import React from "react";

const galleryImages = [
  "/gallery/img1.jpeg",
  "/gallery/img2.jpeg",
  "/gallery/img3.jpg",
  "/gallery/img4.webp",
  "/gallery/img5.webp",
  "/gallery/img6.webp",
  "/gallery/img7.jpg",
  "/gallery/img8.jpg",
  "/gallery/img9.webp",
  "/gallery/img10.png",
  "/gallery/img11.webp",
  "/gallery/img12.webp",
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 px-6 max-w-5xl mx-auto text-gray-800 text-center"
    >
      <h2 className="text-5xl font-bold font-[Jura] mb-8 text-teal-700">
        Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-40 object-cover rounded shadow transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
