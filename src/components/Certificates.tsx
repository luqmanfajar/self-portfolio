"use client";

import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/portfolio-data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Courses & Certificates"
            subtitle="Programs and certifications I've completed"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-surface rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-1">
                        {cert.name}
                      </h3>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-light transition-colors shrink-0"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-secondary font-medium">
                      {cert.provider}
                    </p>
                    <p className="text-xs text-secondary mt-1">{cert.date}</p>
                    {cert.topics && (
                      <p className="text-sm text-secondary mt-3 leading-relaxed">
                        <span className="font-medium text-foreground">Topics:</span>{" "}
                        {cert.topics}
                      </p>
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
