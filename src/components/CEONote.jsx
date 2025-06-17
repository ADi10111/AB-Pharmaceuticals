import React from "react";

const CEONote = () => {
  return (
    <section
      id="ceo"
      className="py-20 px-6 max-w-5xl mx-auto text-gray-800 text-center"
    >
      <h2 className="text-5xl font-bold font-[Jura] mb-8 text-teal-700">
        A Note from Our CEO
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/ceo.jpg"
          alt="CEO"
          className="w-80 h-80 object-cover rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="text-left md:text-justify">
          <p className="text-xl leading-9 mb-8">
            At AB Pharmaceuticals, our mission is clear — to empower healthcare with trusted pharmaceutical products, advanced medical devices, and reliable hospital solutions. From OT setups to complete hospital management, we partner with leading institutions to deliver quality, precision, and efficiency at every level.
          </p>
          <p className="text-xl leading-9">
            With a growing presence across India, the Middle East, and Europe, we are proud to be a name that hospitals trust and patients benefit from.
            We remain committed to innovation, ethical practices, and building a healthier future — together.
            <br />
            <br />
            <strong>– Dr. Vivek Arya, CEO</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEONote;
