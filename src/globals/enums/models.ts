export interface IBrand {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}
export interface ITag {
  name: string;
}

export interface IProduct {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: any;
  manufacturer: string;
  itemType: string;
}

export interface IFilterTypes {
  brands: string[];
  tags: string[];
  itemType?: string | null;
  sortType?: number | null
  index: number;
  pageSize: number;
}

export interface IProductFilters {
  brands: string[];
  tags: string[];
  productsType?: string;
  sortType?: number;
}
