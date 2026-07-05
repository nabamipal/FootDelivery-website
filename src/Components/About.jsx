import React from "react";
import img from "./assets/vite.svg";

function About() {
  return (
    <div className="bg-white py-10 px-10 my-10 max-w-[1240px] mx-auto">
      
      {/* Top Section */}
      <div className="my-10">
        <div className="flex items-center gap-12">
          <h1 className="text-6xl font-bold">ABOUT</h1>

          <div className="bg-orange-500 px-3 py-8 rounded"></div>

          <p className="text-xl">
            Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit
            consequat ipsum, nec sagittis sem nibh id elit.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-4  items-center mt-20">
        
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={img}
              alt="logo"
              className="w-14 h-14"
            />

            <h2 className="text-4xl font-bold">
              OUR STORY
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-8">
            Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor,
            nisi elit consequat ipsum, nec sagittis sem nibh
            id elit. Duis sed odio sit amet nibh vulputate
            cursus a sit amet mauris.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
            alt="Our Story"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>

    </div>
  );
}

export default About;
