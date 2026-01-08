import TechCard from "@/components/ui/tech-card";
import Image from "next/image";

const techStack = [
  {
    name: "Laravel",
    role: "Full Stack",
    icon: "/techstack/laravel.png",
  },
  {
    name: "NextJS",
    role: "Full Stack",
    icon: "/techstack/nextjs.png",
  },
  {
    name: "Express",
    role: "Back-End",
    icon: "/techstack/express.png",
  },
  {
    name: "MySQL",
    role: "Database",
    icon: "/techstack/mysql.png",
  },
  {
    name: "React",
    role: "Front-End",
    icon: "/techstack/react.png",
  },
  {
    name: "Firebase",
    role: "Database",
    icon: "/techstack/firebase.png",
  },
];


export default function TechStack() {
  return (
    <section id="stack" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                role={tech.role}
                icon={tech.icon}
              />
            ))}
          </div>
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-1 text-sm text-muted-foreground">
              💻 Tech Stack
            </div>
            <p className="text-sm text-right leading-relaxed text-muted-foreground">
              A tech stack is a combination of programming languages,
              frameworks, databases, tools, and other technologies used to build
              and run digital applications or systems, both web and mobile.
            </p>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
             <Image src="/techstack/illustration.png" alt="Tech Illustration" width={500} height={320} className="w-full object-cover" />
            </div>
            <p className="text-xs text-primary">Create projects for multiple platforms.</p>
          </div>
          <div className="grid lg:hidden grid-cols-2 sm:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                role={tech.role}
                icon={tech.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
