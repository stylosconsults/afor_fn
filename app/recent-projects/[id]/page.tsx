import React from "react";
import Image from "next/image";
import recentProjects from "@/app/data/projects";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = recentProjects.find(async (p) => p.id === (await params).id);

  return {
    title: project?.title || "Project Not Found",
    description: project?.subtitle || "Project not found",
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = recentProjects.find(async (p) => p.id === (await params).id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Project not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="relative w-full h-[400px] mb-6">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {project.category}
            </span>
            <h1 className="text-4xl font-serif text-primary">
              {project.title}
            </h1>
            <h2 className="text-2xl text-gray-600">{project.subtitle}</h2>
          </div>
        </div>
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </div>
    </main>
  );
}
