import React from "react";
import { Carousel } from "../atoms/carousel/articles";
import InMotion from "@/utils/inMotion";

const Articles = () => {
  const articles = [
    {
      title: "New updates from afor",
      description:
        "News from afor  about upcoming projects. through brd donation",
      button: "Read More",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412708/africanChildren2_rmggon.jpg",
    },
    {
      title: "New updates from afor",
      description:
        "News from afor  about upcoming projects. through brd donation",
      button: "Read More",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412708/africanChildren2_rmggon.jpg",
    },
    {
      title: "New updates from afor",
      description:
        "News from afor  about upcoming projects. through brd donation",
      button: "Read More",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412708/africanChildren2_rmggon.jpg",
    },
    {
      title: "New updates from afor",
      description:
        "News from afor  about upcoming projects. through brd donation",
      button: "Read More",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412708/africanChildren2_rmggon.jpg",
    },
    {
      title: "New updates from afor",
      description:
        "News from afor  about upcoming projects. through brd donation",
      button: "Read More",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412708/africanChildren2_rmggon.jpg",
    },
    {
      title: "New updates from afor",
      description:
        "News from afor  about upcoming projects. through brd donation",
      button: "Read More",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412708/africanChildren2_rmggon.jpg",
    },
  ];
  return (
    <section className="py-32 ">
      <InMotion>
        <h3 className="text-center text-primary font-serif text-3xl py-4">News and Articles</h3>
      </InMotion>
      <Carousel slides={articles} />
    </section>
  );
};

export default Articles;
