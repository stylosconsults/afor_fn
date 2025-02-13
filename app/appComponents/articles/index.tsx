"use client";
import React from "react";
import { Carousel } from "../atoms/carousel/articles";
import InMotion from "@/utils/inMotion";
import { articles } from "@/app/data/articles";

const Articles = () => {
  return (
    <section className="py-32 ">
      <InMotion>
        <h3 className="text-center text-primary font-serif text-3xl py-4">
          News and Articles
        </h3>
      </InMotion>
      <Carousel slides={articles} />
    </section>
  );
};

export default Articles;
