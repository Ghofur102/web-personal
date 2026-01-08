import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="space-y-6 sm:text-center lg:text-left">
            <p className="text-secondary text-sm tracking-wide">
              Backend-Focused Fullstack Developer
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Crafting <br />
              Structure from <br />
              <span className="text-primary">Chaos.</span>
            </h1>
            <p className="text-muted-foreground lg:max-w-md">
              Capable of transforming random data into scalable API.
            </p>
            <a href="#journey">
              <button className="mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium">
                Trace My Journey
              </button>
            </a>
          </div>
          <div className="relative hidden h-105 w-full lg:flex items-center justify-center">
            <Image
              src="/hero/image.png"
              alt=""
              width={420}
              height={240}
              className="absolute -translate-x-16 -translate-y-12 rounded-xl shadow-lg opacity-80"
            />
            <Image
              src="/hero/image.png"
              alt=""
              width={460}
              height={240}
              className="absolute xl:-translate-x-8 lg:-translate-x-6 translate-y-4 scale-100 rounded-xl shadow-xl z-19"
            />
            <Image
              src="/hero/image.png"
              alt=""
              width={480}
              height={240}
              className="absolute translate-x-2 translate-y-18 scale-105 rounded-xl shadow-2xl z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
