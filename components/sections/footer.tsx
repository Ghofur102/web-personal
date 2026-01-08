import TechCard from "../ui/tech-card";

const socialMedia = [
  {
    name: "Instagram",
    role: "@muhamadbadulghofur",
    icon: "/social-media/ig.png",
  },
  {
    name: "Linkedin",
    role: "@muhamadbabdulghofur",
    icon: "/social-media/linkedin.png",
  },
  {
    name: "Github",
    role: "@muhamadabdulghofur",
    icon: "/social-media/github.png",
  },
];

export default function Footer() {
  return (
    <section id="footer" className="bg-card mt-5 text-center">
      <h3 className="py-10 text-3xl font-semibold text-white">
        lets connect with me
      </h3>
      <div className="flex justify-center">
        <div className="lg:grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialMedia.map((social) => (
            <TechCard
              key={social.name}
              name={social.name}
              role={social.role}
              icon={social.icon}
            />
          ))}
        </div>
      </div>
      <p className="pt-5 pb-10">Created by Ghofur est 2026</p>
    </section>
  );
}
