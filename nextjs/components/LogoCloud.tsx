import Image from 'next/image'

export default function LogoCloud(): JSX.Element {
  return (
    <div className="bg-red-800 border-b shadow-inner border-neutral-500">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              width={75}
              height={75}
              className="w-auto h-12"
              src="/images/HSY.png"
              objectFit="contain"
              alt="HSY"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              width={75}
              height={75}
              className="w-auto h-12"
              src="/images/Kokkola.png"
              objectFit="contain"
              alt="Kokkola"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              width={75}
              height={75}
              className="w-auto h-12"
              src="/images/Lahti-logo.png"
              objectFit="contain"
              alt="Lahti"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <Image
              width={75}
              height={75}
              className="w-auto h-12"
              src="/images/University_of_Helsinki.png"
              objectFit="contain"
              alt="University of Helsinki"
            />
          </div>
          <div className="justify-center hidden col-span-2 md:col-span-3 lg:col-span-1 md:block">
            <Image
              width={75}
              height={75}
              className="w-auto h-12"
              alt="Lataus"
              src="/images/lataus-1.png"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
