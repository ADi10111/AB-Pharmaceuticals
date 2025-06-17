import React from "react";
import { Card, CardContent } from "../components/ui/card";

const products = [
  { name: "Medications and Infusions", image: "/products/medication.png" },
  { name: "Surgical Gloves", image: "/products/gloves.png" },
  { name: "ECG Monitor", image: "/products/ecg.png" },
  { name: "CT Machine", image: "/products/ct.png" },
  { name: "MRI", image: "/products/mri.png" },
  { name: "Ventilator", image: "/products/ventilator.png" },
  { name: "Fibre Optic Devices", image: "/products/optic.jpg" },
  { name: "Robotic Operation Machine", image: "/products/robotic.png" },
  { name: "Hospital Bed", image: "/products/bed.png" },
  { name: "OT Setup", image: "/products/ot.png" },
];

const Products = () => {
  return (
    <section id="products" className="py-20 px-6 bg-gray-100 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold font-[Jura] mb-8 text-teal-700 text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <Card
            key={idx}
            className="bg-white shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <CardContent className="p-4 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 font-[Jura] tracking-wide uppercase">{product.name}</h3>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Products;
