import TechCard from "../ui/tech-card";

const socialMedia = [
  {
    name: "Instagram",
    role: "@muhamadbadulghofur84",
    icon: "/social-media/ig.png",
    link: "https://www.instagram.com/muhamadabdulghofur84/"
  },
  {
    name: "Linkedin",
    role: "@mabdgpr",
    icon: "/social-media/linkedin.png",
    link: "https://linkedin.com/in/mabdgpr/"
  },
  {
    name: "Github",
    role: "@Ghofur102",
    icon: "/social-media/github.png",
    link: "https://github.com/Ghofur102"
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
              link={social.link}
            />
          ))}
        </div>
      </div>
      <p className="pt-5 pb-10">Created by Ghofur est 2026</p>
    </section>
  );
}
