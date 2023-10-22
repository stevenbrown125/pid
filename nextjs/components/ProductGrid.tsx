import Image from "next/image";
import Link from "next/link";
import IProduct from "../types/IProduct";

const ProductGrid = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-2 text-center lg:grid-cols-4 md:grid-cols-2 justify-items-center">
      {products.map((product: IProduct) => (
        <Link
          className="relative flex flex-col h-full w-full  cursor-pointer md:border-none sm:rounded-lg group"
          href={`/product/${product.slug}`}
          key={product.id}
        >
          <div className="relative flex justify-center object-center aspect-square h-96 md:h-64 border  border-neutral-200">
            <Image
              src={product.image}
              alt={product.title}
              className="relative object-contain max-w-xs h-autogroup-hover:opacity-80 "
              height={300}
              width={250}
            />
          </div>
          <div className="absolute bottom-0 lg:invisible w-full p-4 bg-red-700 group-hover:visible rounded-b-md">
            <h3 className="text-lg font-medium text-center text-neutral-50 ">
              {product.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ProductGrid;
