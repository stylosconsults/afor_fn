import React from "react";
import { GradientButton } from "../atoms/button";
import InMotion from "@/utils/inMotion";

const About = () => {
  return (
    <div className="flex relative lg:flex-row flex-col font-serif justify-around bg-gray-50 gap-[50px]  container mx-auto  pt-1">
      <InMotion>
        <div className="bg-white flex flex-col gap-4 shadow-none lg:shadow-sm py-6 px-10 ">
          <h1 className="text-primary text-4xl font-serif font-bold">
            About Little Heart
          </h1>
          <h3 className="text-black text-2xl lg:max-w-sm">
            All children deserve to live in safe nurturing homes to feel valued
            and loved
          </h3>
          <p className="capitalize text-red-950 flex flex-col font-sans gap-10 w-full leading-[20px] lg:w-[400px] text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
            fuga eos neque alias, explicabo, cumque quo nemo accusantium dolore
            totam aliquam optio maxime nam est. Laborum temporibus doloremque
            cumque minus voluptatum explicabo? <br></br>
            <span>
              Maiores, enim distinctio perspiciatis voluptas asperiores dolorum!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              sed aperiam. Tenetur, repellendus nihil qui temporibus voluptatum
              porro sit inventore natus unde, quo quidem doloribus iure officiis
              sed eveniet dolores?
            </span>
          </p>
          <button className="bg-primary rounded-sm text-white w-[50%] py-4 px-1">
            Read More
          </button>
        </div>
      </InMotion>
      <InMotion delay={0.5}>
        <div className="max-w-xl px-2 flex flex-col gap-6">
          <h1 className="capitalize text-left lg:text-right text-4xl text-primary">
            in mission since 1950
          </h1>
          <h3 className="capitalize mb-6 text-left lg:text-right text-black">
            To help the helpless and uplift the society
          </h3>
          <img
            className="rounded-md"
            src="https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412747/group-3137670_mxidfa.jpg"
          ></img>
        </div>
      </InMotion>
    </div>
  );
};

export default About;
