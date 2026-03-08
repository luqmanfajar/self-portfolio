"use client";

import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="Things I've built throughout my journey"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                {/* Screenshot placeholder */}
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-primary/5 to-primary-light/10 flex items-center justify-center">
                    <span className="text-4xl font-[family-name:var(--font-heading)] font-bold text-primary/20">
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        project.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {project.status === "active" ? "Active" : "Discontinued"}
                    </span>
                  </div>

                  <p className="text-sm text-secondary mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/5 text-primary border border-primary/10 rounded-md font-[family-name:var(--font-mono)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
