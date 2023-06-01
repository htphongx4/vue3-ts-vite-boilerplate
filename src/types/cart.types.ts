export interface IProductCart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export interface ICart {
  discountedTotal: number;
  id: number;
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
  products: IProductCart[];
}

export interface IUserCarts {
  carts: ICart[];
  limit: number;
  skip: number;
  total: number;
}
