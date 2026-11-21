"use client";


import Image from "next/image";

const Hero = () => {

  return (
    <section className="relative pt-36 lg:pt-44 pb-16 lg:pb-24 dark:bg-darklight bg-no-repeat bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-10 lg:gap-12">
          <div
            className="flex flex-col lg:col-span-5 justify-center items-start"
            data-aos="fade-right"
          >
            <h1 className="md:text-[50px] leading-[1.2] text-3xl mb-6 md:mb-8 text-midnight_text dark:text-white font-bold">
              Quality Healthcare You Can Trust
            </h1>
            <p className="max-w-xl text-lg">
              We&apos;re committed to delivering accessible, affordable, and
              compassionate healthcare using modern technology and highly
              skilled professionals.
            </p>
          </div>
          {/* The frame sets the size; the photo fills it and is cropped to fit,
              so any replacement photo keeps the same size without squeezing. */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[520px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero/main-hero.jpeg"
                alt="Epaphras Hospital building and forecourt"
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
