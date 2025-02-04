import React from "react";
import Card from "../atoms/card";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../molecules/emblaCarousel";
import InMotion from "@/utils/inMotion";

const OPTIONS: EmblaOptionsType = { loop: true };
const RecentProjects = () => {
  const recentProjects = [
    {
      title: "Plant more trees",
      category: "Environment",
      image:
        "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412666/natureAnimal_lb9b4y.jpg",
      description: `
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          debitis repudiandae magnam blanditiis velit repellat nulla. Distinctio
          enim fugiat dignissimos doloribus quam porro perferendis labore
          explicabo aspernatur eligendi obcaecati quidem, dolore soluta. Enim
          quae, obcaecati laudantium mollitia odio inventore fugiat quisquam
          ipsam quod eaque nulla sunt illo amet numquam, exercitationem nisi
          aspernatur aperiam adipisci animi fuga magnam. Odit optio quasi
          molestias vel accusantium, commodi velit dolor aperiam dolore! Est
          doloribus fugit magnam dolorem reprehenderit nesciunt illum, neque
          dignissimos voluptatum perspiciatis vel recusandae labore natus minus
          provident sapiente repudiandae asperiores quas. Iste laboriosam
          corporis commodi magni laborum ea hic beatae? Tenetur.
        </p>`,
    },

    {
      title: "Plant more trees",
      category: "Environment",
      image:
        "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412666/natureAnimal_lb9b4y.jpg",
      description: `
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            debitis repudiandae magnam blanditiis velit repellat nulla. Distinctio
            enim fugiat dignissimos doloribus quam porro perferendis labore
            explicabo aspernatur eligendi obcaecati quidem, dolore soluta. Enim
            quae, obcaecati laudantium mollitia odio inventore fugiat quisquam
            ipsam quod eaque nulla sunt illo amet numquam, exercitationem nisi
            aspernatur aperiam adipisci animi fuga magnam. Odit optio quasi
            molestias vel accusantium, commodi velit dolor aperiam dolore! Est
            doloribus fugit magnam dolorem reprehenderit nesciunt illum, neque
            dignissimos voluptatum perspiciatis vel recusandae labore natus minus
            provident sapiente repudiandae asperiores quas. Iste laboriosam
            corporis commodi magni laborum ea hic beatae? Tenetur.
          </p>`,
    },
    {
      title: "Plant more trees",
      category: "Environment",
      image:
        "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412666/natureAnimal_lb9b4y.jpg",
      description: `
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            debitis repudiandae magnam blanditiis velit repellat nulla. Distinctio
            enim fugiat dignissimos doloribus quam porro perferendis labore
            explicabo aspernatur eligendi obcaecati quidem, dolore soluta. Enim
            quae, obcaecati laudantium mollitia odio inventore fugiat quisquam
            ipsam quod eaque nulla sunt illo amet numquam, exercitationem nisi
            aspernatur aperiam adipisci animi fuga magnam. Odit optio quasi
            molestias vel accusantium, commodi velit dolor aperiam dolore! Est
            doloribus fugit magnam dolorem reprehenderit nesciunt illum, neque
            dignissimos voluptatum perspiciatis vel recusandae labore natus minus
            provident sapiente repudiandae asperiores quas. Iste laboriosam
            corporis commodi magni laborum ea hic beatae? Tenetur.
          </p>`,
    },
    {
      title: "Plant more trees",
      category: "Environment",
      image:
        "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412666/natureAnimal_lb9b4y.jpg",
      description: `
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            debitis repudiandae magnam blanditiis velit repellat nulla. Distinctio
            enim fugiat dignissimos doloribus quam porro perferendis labore
            explicabo aspernatur eligendi obcaecati quidem, dolore soluta. Enim
            quae, obcaecati laudantium mollitia odio inventore fugiat quisquam
            ipsam quod eaque nulla sunt illo amet numquam, exercitationem nisi
            aspernatur aperiam adipisci animi fuga magnam. Odit optio quasi
            molestias vel accusantium, commodi velit dolor aperiam dolore! Est
            doloribus fugit magnam dolorem reprehenderit nesciunt illum, neque
            dignissimos voluptatum perspiciatis vel recusandae labore natus minus
            provident sapiente repudiandae asperiores quas. Iste laboriosam
            corporis commodi magni laborum ea hic beatae? Tenetur.
          </p>`,
    },
    {
      title: "Plant more trees",
      category: "Environment",
      image:
        "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412666/natureAnimal_lb9b4y.jpg",
      description: `
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            debitis repudiandae magnam blanditiis velit repellat nulla. Distinctio
            enim fugiat dignissimos doloribus quam porro perferendis labore
            explicabo aspernatur eligendi obcaecati quidem, dolore soluta. Enim
            quae, obcaecati laudantium mollitia odio inventore fugiat quisquam
            ipsam quod eaque nulla sunt illo amet numquam, exercitationem nisi
            aspernatur aperiam adipisci animi fuga magnam. Odit optio quasi
            molestias vel accusantium, commodi velit dolor aperiam dolore! Est
            doloribus fugit magnam dolorem reprehenderit nesciunt illum, neque
            dignissimos voluptatum perspiciatis vel recusandae labore natus minus
            provident sapiente repudiandae asperiores quas. Iste laboriosam
            corporis commodi magni laborum ea hic beatae? Tenetur.
          </p>`,
    },
  ];
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
