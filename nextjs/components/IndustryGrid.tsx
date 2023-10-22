import Image from "next/image";

export default function IndustryGrid() {
  return (
    <section className="relative pb-8 mx-auto shadow-md">
      <h2 className="py-8 text-3xl font-extrabold tracking-tight text-center text-gray-800 sm:text-4xl md:text-5xl lg:py-12 filter drop-shadow-lg">
        Our Industries
      </h2>
      <div className="relative grid w-full h-full gap-2 gird-cols-1 lg:grid-cols-3 md:gap-6">
        <div className="relative z-0 h-40 md:h-80 hover:cursor-pointer group">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Ambient Air
          </p>
          <Image
            fill
            className="object-cover w-full h-full group-hover:grayscale brightness-50"
            src="/images/categories/resized_ambientair.jpg"
            alt="Ambient Air"
          />
        </div>
        <div className="relative z-0 h-40 row-span-1 md:h-80 lg:h-auto lg:row-span-2 hover:cursor-pointer group">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Fixed, Continuous
          </p>
          <Image
            fill
            className="object-cover w-full h-full group-hover:grayscale brightness-50"
            src="/images/categories/resized_Fixed-continuous.jpg"
            alt="Fixed, Continuous"
          />
        </div>
        <div className="relative z-0 h-40 md:h-80 hover:cursor-pointer group">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Laboratory
          </p>
          <Image
            fill
            className="object-cover w-full h-full group-hover:grayscale brightness-50"
            src="/images/categories/resized_Laboratory.jpg"
            alt="Laboratory"
          />
        </div>
        <div className="relative z-0 h-40 md:h-80 hover:cursor-pointer group">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Portable
          </p>
          <Image
            fill
            className="object-cover w-full h-full group-hover:grayscale brightness-50"
            src="/images/categories/resized_Portables.jpg"
            alt="Portable"
          />
        </div>
        <div className="relative z-0 h-40 md:h-80 hover:cursor-pointer group">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Water Quality
          </p>
          <Image
            fill
            className="object-cover w-full h-full group-hover:grayscale brightness-50"
            src="/images/categories/resized_waterquality.jpg"
            alt="Water Quality"
          />
        </div>
      </div>
    </section>
  );
}
