import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import TestimonialCard from "../ui/testimonial";

const projects = [
  {
    title: "Hummacook",
    job: "Laravel Developer",
    image: "cookpad.png",
    description:
      "Served as a full-stack developer using Laravel on the Hummacook project, a social media website for sharing cooking recipes. This dummy project was created during a vocational high school internship at PT Humma Technology in 2023.",
  },
  {
    title: "Hummacook",
    job: "Laravel Developer",
    image: "cookpad.png",
    description:
      "Served as a full-stack developer using Laravel on the Hummacook project, a social media website for sharing cooking recipes. This dummy project was created during a vocational high school internship at PT Humma Technology in 2023.",
  },
  {
    title: "Hummacook",
    job: "Laravel Developer",
    image: "cookpad.png",
    description:
      "Served as a full-stack developer using Laravel on the Hummacook project, a social media website for sharing cooking recipes. This dummy project was created during a vocational high school internship at PT Humma Technology in 2023.",
  },
];

const testimonial = [
  {
    quote: "Best workers, smart and good communication.",
    name: "Dev",
    project: "Project Hummacook",
    avatar: "/avatar/dev.png",
  },
  {
    quote: "Best workers, smart and good communication.",
    name: "Dev",
    project: "Project Hummacook",
    avatar: "/avatar/dev.png",
  },
  {
    quote: "Best workers, smart and good communication.",
    name: "Dev",
    project: "Project Hummacook",
    avatar: "/avatar/dev.png",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto text-center" id="journey">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="mx-auto h-full max-w-3xs md:max-w-lg lg:max-w-sm xl:max-w-lg">
          <button className="inline-flex mb-3 items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-muted-foreground">
            <span className="text-primary">📁</span>
            Projects
          </button>

          <p className="text-md mb-3 text-left leading-relaxed text-muted-foreground">
            The following are projects that have built me up to now, starting
            from my vocational school internship to now being an active student
            at a polytechnic.
          </p>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/projects/collaboration.png"
                alt="Working Illustration"
                width={520}
                height={340}
                className="w-full object-cover"
              />
            </div>
            <p className="text-xs text-primary">
              Create projects for multiple platforms.
            </p>
          </div>
        </div>
        <Carousel className="w-full max-w-56 md:max-w-lg lg:max-w-sm xl:max-w-xl mx-auto xl:mx-1">
          <CarouselContent className="p-3">
            {Array.from(projects).map((data, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="p-2">
                      <h1 className="mb-3 text-2xl">{data.title}</h1>
                      <div className="flex justify-center">
                        <Image
                          src={`/projects/${data.image}`}
                          alt="Hummacook App"
                          width={250}
                          height={300}
                        />
                      </div>
                      <button className="inline-flex my-3 items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-muted-foreground">
                        <span className="text-primary">🤵‍♂️</span>
                        {data.job}
                      </button>
                      <p className="text-sm">{data.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="bg-card p-6 items-center mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from(testimonial).map((data, index) => (
          <div key={index} className="w-max-lg mx-5 lg:mx-12 xl:mx-18">
            <TestimonialCard
              quote={data.quote}
              name={data.name}
              project={data.project}
              avatar={data.avatar}
              highlight
            />
          </div>
        ))}
      </div>
    </section>
  );
}
