"use client";

import { GraduationCap } from "lucide-react";
import { educations } from "@/data/portfolio-data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Education"
            subtitle="My academic background"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {educations.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-surface rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-secondary font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-secondary mt-1">{edu.period}</p>
                    <div className="mt-3 inline-block px-3 py-1 bg-primary/5 border border-primary/10 rounded-lg text-sm text-primary font-[family-name:var(--font-mono)]">
                      GPA: {edu.gpa}
                    </div>
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
