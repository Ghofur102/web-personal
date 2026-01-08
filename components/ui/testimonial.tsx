import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  project: string;
  avatar: string;
  highlight?: boolean;
}

export default function TestimonialCard({
  quote,
  name,
  project,
  avatar,
  highlight = false,
}: TestimonialCardProps) {
  return (
    <div className="relative">
      <div className="absolute -left-6 -bottom-5 z-10">
        <div className="h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-xl border border-white/10">
          <Image
            src={avatar}
            alt={name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className={`rounded-2xl border bg-card px-6 py-6 pl-12 ${highlight ? 'border-primary/60' : 'border-white/10'}`}>
       <p className="text-sm md:text-base text-left leading-relaxed text-white">
        {quote}
       </p>
       <p className="mt-4 text-xs text-left md:text-sm text-muted-foreground">
        {name} - {project}
       </p>
      </div>
    </div>
  );
}
