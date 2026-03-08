"use client";

import { skillGroups } from "@/data/portfolio-data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and competencies I work with"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background rounded-xl p-6 border border-border h-full">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-primary/5 text-primary border border-primary/10 rounded-lg font-medium hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
