import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
