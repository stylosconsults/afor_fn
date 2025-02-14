"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GradientButton } from "@/app/appComponents/atoms/button";
import { Heart, Calendar, Target, Users } from "lucide-react";
import { projectsData } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-primary mb-4">
            Our Impact Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in making a difference. Your support transforms lives and
            builds stronger communities in Rwanda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-none shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Started: {project.startDate}
                  </p>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div
                  className="prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                <div className="space-y-4 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Goal: ${project.goal.toLocaleString()}
                    </span>
                    <span className="text-primary font-medium">
                      ${project.raised.toLocaleString()} raised
                    </span>
                  </div>
                  <Progress
                    value={(project.raised / project.goal) * 100}
                    className="h-2 bg-gray-200"
                  />
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>
                      {((project.raised / project.goal) * 100).toFixed(1)}%
                      Complete
                    </span>
                    <span>
                      ${(project.goal - project.raised).toLocaleString()} to go
                    </span>
                  </div>

                  <GradientButton
                    icon={<Heart className="h-4 w-4" />}
                    className="w-full bg-primary hover:bg-primary-600 text-white"
                  >
                    Support This Project
                  </GradientButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
