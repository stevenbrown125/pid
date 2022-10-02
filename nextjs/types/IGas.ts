import { PortableTextBlock } from "@portabletext/types";

export interface IGas {
    id: string,
    name: string,
    slug: string,
    symbol: PortableTextBlock, //Portable Text?
    description?: string,
}