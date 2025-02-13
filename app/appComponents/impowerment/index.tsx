import InMotion from "@/utils/inMotion";
import React from "react";

type ImageType = {
  title: string;
  link: string;
};

const Impowerment = () => {
  const images: ImageType[] = [
    {
      title: "Empower women",
      link: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1738051050/annie-spratt-2INKkSrEmc8-unsplash_vbj68l.jpg",
    },
    {
      title: "Tuberculosis",
      link: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1739450143/cdc-4U6qzwNu-Ns-unsplash_v9hql2.jpg",
    },
    {
      title: "Safe Water and Sustainable Sanitation",
      link: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412666/natureAnimal_lb9b4y.jpg",
    },
  ];

  return (
    <div className="container w-full px-4 lg:px-0  justify-center mx-auto font-serif mt-20 flex flex-col lg:flex-row gap-4">
      {images.map((image, index) => (
        <InMotion delay={index + 0.1}>
          <div
            key={index}
            className="relative bg-cover bg-center  lg:w-[385px] h-72 flex items-center justify-center 
          transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(${image.link})`,
            }}
          >
            <h3 className="text-primary text-xl font-bold text-center px-4">
              {image.title}
            </h3>
            <div
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center 
          transition-opacity duration-300 opacity-0 hover:opacity-100"
            ></div>
          </div>
        </InMotion>
      ))}
    </div>
  );
};

export default Impowerment;
