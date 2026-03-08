"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 pt-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left — Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold text-foreground mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-primary font-medium mb-6"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-secondary max-w-xl mb-8 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-4 mb-8"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-border hover:border-primary hover:text-primary transition-all duration-200 shadow-sm"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-border hover:border-primary hover:text-primary transition-all duration-200 shadow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-surface border border-border hover:border-primary hover:text-primary transition-all duration-200 shadow-sm"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block animate-bounce text-secondary"
          >
            <ChevronDown size={28} />
          </motion.a>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="shrink-0"
        >
          <img
            src="/profile.jpg"
            alt={personalInfo.name}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg ring-4 ring-primary/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
