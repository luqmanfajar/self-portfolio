"use client";

import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio-data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and roles"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`relative flex flex-col md:flex-row gap-4 mb-12 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] md:-translate-x-[6px] mt-6 z-10 ring-4 ring-background" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-6 md:ml-0 md:w-1/2 bg-surface rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Briefcase size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1 text-xs text-secondary mb-3">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-secondary flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-light rounded-full mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
