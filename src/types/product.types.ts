export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IParams {
  limit?: number;
  skip?: number;
  select?: string;
}

export interface IProductsListResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number
}
