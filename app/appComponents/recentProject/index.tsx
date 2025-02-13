import React from "react";
import Card from "../atoms/card";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../molecules/emblaCarousel";
import InMotion from "@/utils/inMotion";
import recentProjects from "@/app/data/projects";

const OPTIONS: EmblaOptionsType = { loop: true };
const RecentProjects = () => {
  
  return (
    <div className="container w-full mb-10 px-4 lg:px-0   justify-center mx-auto font-serif mt-20 flex flex-col lg:flex-row gap-4">
      <div>
        <InMotion>
          <h1 className="text-center text-4xl text-primary pb-4">
            Our Recent Projects
          </h1>
        </InMotion>
        <InMotion delay={0.3}>
          <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg mb-12">
            Our innovative projects are designed to create sustainable,
            transformative change across communities. We focus on holistic
            solutions that address critical challenges in education, technology,
            agriculture, and social equity, empowering individuals and
            strengthening local ecosystems.
          </p>
        </InMotion>
        <InMotion>
          <EmblaCarousel slides={recentProjects} options={OPTIONS} />
        </InMotion>
      </div>
    </div>
  );
};

export default RecentProjects;
