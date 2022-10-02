import { IGas } from "./IGas"

export default interface IProduct {
    id?: string,
    title: string,
    slug: string,
    type?: string
    gasesMeasured?: Array<IGas>
    industries?: string,
    price?: number,
    image?: any,
    description?: string,
    pdf?: string,
    specifications?: any
    features?: any
    addons?: any
}

