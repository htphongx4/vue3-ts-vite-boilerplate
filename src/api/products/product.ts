import { IUserCarts } from "@/types/cart.types";
import {
  IParams,
  IProduct,
  IProductsListResponse,
} from "@/types/product.types";
import { $axios } from "@/plugins/axios";

export const fetchProduct = (params: IParams) => {
  return $axios.get<unknown, IProductsListResponse>("/products", {
    params,
  });
};

export const fetchCategories = () => {
  return $axios.get<unknown, string[]>("/products/categories");
};

export const fetchProductOfCategory = (category: string, params?: IParams) => {
  return $axios.get<unknown, IProductsListResponse>(
    `/products/category/${category}`,
    {
      params,
    }
  );
};

export const fetchUserCarts = (userId: string | number, params?: IParams) => {
  return $axios.get<unknown, IUserCarts>(`/carts/user/${userId}`, {
    params,
  });
};

export const fetchProductDetails = (productId: string | number) => {
  return $axios.get<unknown, IProduct>(`/products/${productId}`);
};

export const addProductToCart = (
  userId: string | number,
  products: { id: string | number; quantity: number }[]
) => {
  return $axios.post<unknown, IProduct>(`/carts/add`, {
    userId,
    products,
  });
};
