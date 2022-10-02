import Image from 'next/image'
import Link from 'next/link'
import IProduct from '../types/IProduct'

const ProductGrid = ({ products }: any) => {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-2 text-center lg:grid-cols-4 md:grid-cols-2 justify-items-center">
      {products.map((product: IProduct) => (
        <Link
          className="relative w-full h-full px-4 py-12 border hover:bg-neutral-100"
          href={`/product/${product.slug}`}
          key={product.id}
        >
          <div
            key={product.id}
            className="relative flex flex-col h-full border cursor-pointer border-neutral-200 md:border-none sm:rounded-lg group"
          >
            <div className="relative flex justify-center object-center aspect-square max-h-96 md:max-h-max">
              <Image
                src={product.image}
                alt={product.title}
                className="relative object-contain max-w-xs group-hover:opacity-80 "
                height={300}
                width={250}
              />
            </div>
            <div className="absolute bottom-0 invisible w-full p-4 bg-red-700 group-hover:visible rounded-b-md">
              <h3 className="text-lg font-medium text-center text-neutral-50 ">
                {product.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default ProductGrid
