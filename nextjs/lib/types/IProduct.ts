import { PortableTextBlock } from '@portabletext/types';
import { IGas } from './IGas';

export default interface IProduct {
  id?: string;
  title: string;
  slug: string;
  type?: string;
  gasesMeasured?: Array<IGas>;
  industries?: string;
  price?: number;
  image?: any;
  description?: PortableTextBlock;
  pdf?: string;
  specifications?: Array<{
    name: string;
    description: Array<PortableTextBlock>;
  }>;
  features?: Array<{
    name: string;
    description: Array<PortableTextBlock>;
  }>;
  addons?: any;
}
