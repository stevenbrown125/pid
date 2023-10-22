import Image from "next/image";

export default function IndustryGrid() {
  return (
    <section className="relative pb-8 mx-auto shadow-md">
      <h2 className="py-8 text-3xl font-extrabold tracking-tight text-center text-gray-800 sm:text-4xl md:text-5xl lg:py-12 filter drop-shadow-lg">
        Our Industries
      </h2>
      <div className="relative grid w-full h-full gap-2 gird-cols-1 lg:grid-cols-3 md:gap-6">
        <div className="relative z-0 h-40 md:h-80">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Enviromental
          </p>
          <Image
            fill
            className="object-cover w-full h-full hover:grayscale brightness-50"
            src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Enviromental"
          />
        </div>
        <div className="relative z-0 h-40 row-span-1 md:h-80 lg:h-auto lg:row-span-2">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Universities
          </p>
          <Image
            fill
            className="object-cover w-full h-full hover:grayscale brightness-50"
            src="https://images.unsplash.com/photo-1504817343863-5092a923803e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Universities"
          />
        </div>
        <div className="relative z-0 h-40 md:h-80">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Industrial
          </p>
          <Image
            fill
            className="object-cover w-full h-full hover:grayscale brightness-50"
            src="https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Industrial"
          />
        </div>
        <div className="relative z-0 h-40 md:h-80">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Research
          </p>
          <Image
            fill
            className="object-cover w-full h-full hover:grayscale brightness-50"
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Research"
          />
        </div>
        <div className="relative z-0 h-40 md:h-80">
          <p className="absolute z-10 w-full text-2xl font-extrabold text-center text-white top-1/3 md:top-1/2 md:text-3xl lg:text-4xl filter drop-shadow">
            Urban
          </p>
          <Image
            fill
            className="object-cover w-full h-full hover:grayscale brightness-50"
            src="https://images.unsplash.com/photo-1513977911461-891dadb252ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Urban"
          />
        </div>
      </div>
    </section>
  );
}
