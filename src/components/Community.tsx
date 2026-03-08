"use client";

import { Users } from "lucide-react";
import { communities } from "@/data/portfolio-data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Community() {
  return (
    <section id="community" className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Community & Organizations"
            subtitle="Groups and communities I've been part of"
          />
        </AnimatedSection>

        <div className="space-y-6">
          {communities.map((org, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-1">
                      {org.organization}
                    </h3>
                    <p className="text-sm text-primary font-medium">{org.role}</p>
                    <p className="text-xs text-secondary mt-1">{org.period}</p>
                    <p className="text-sm text-secondary mt-3 leading-relaxed">
                      {org.description}
                    </p>
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
