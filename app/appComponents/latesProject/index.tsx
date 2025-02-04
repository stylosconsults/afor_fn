import React from "react";
import DonateCard from "../atoms/donateCard";
import InMotion from "@/utils/inMotion";

const LatestProjects = () => {
  const latestProjects = [
    {
      title: "Plant more trees",
      category: "Environment",
      image:
        "https://res.cloudinary.com/dexaxaqjx/image/upload/v1737412666/natureAnimal_lb9b4y.jpg",
      descriptions: `
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
      descriptions: `
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
      descriptions: `
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
      descriptions: `
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
      descriptions: `
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
      descriptions: `
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
    <>
      <div className="container w-full mb-10 px-4 lg:px-0   justify-center mx-auto font-serif mt-20 flex flex-col lg:flex-row gap-4">
        <div>
          <InMotion>
          <h1 className="text-center text-4xl text-primary pb-4">
            Our Latest Projects
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
          
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestProjects.map((project, index) => (
              <div key={index}>
                <DonateCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  description={project.descriptions}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-14">
        <a
          href="/donate"
          className="text-white  justify-center text-sm hover:bg-primary transition-all duration-300 font-epilogue bg-secondary py-2 px-10 cursor-pointer rounded-md  flex items-center "
        >
          <span>View More</span>
        </a>
      </div>
    </>
  );
};

export default LatestProjects;
