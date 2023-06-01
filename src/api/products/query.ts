import {
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "vue-query";
import {
  addProductToCart,
  fetchCategories,
  fetchProduct,
  fetchProductDetails,
  fetchProductOfCategory,
  fetchUserCarts,
} from "./product";
import { IParams } from "@/types/product.types";

export const useListProductsInfiniteQuery = () => {
  return useInfiniteQuery(
    "projects",
    ({ pageParam: skip }) =>
      fetchProduct({
        limit: 10,
        skip,
      }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.skip + lastPage.limit >= lastPage.total) return undefined;

        return lastPage.skip + lastPage.limit;
      },
      staleTime: 1000000,
    }
  );
};

export const useProductsCategories = () => {
  return useQuery("products-categories", fetchCategories);
};

export const useGetProductsByCategory = (
  categoryId: string,
  params?: IParams,
  enabled?: boolean
) => {
  return useQuery(
    ["products-categories", categoryId],
    () => fetchProductOfCategory(categoryId, params),
    {
      enabled,
    }
  );
};

export const useGetUserCarts = (userId: string | number) => {
  return useQuery("user-carts", () => fetchUserCarts(userId), {
    select: (data) => data.carts?.[0] ?? [],
  });
};

export const useGetProductDetails = (productId: string | number) => {
  return useQuery(["product-details", productId], () =>
    fetchProductDetails(productId)
  );
};

export const useAddProductToCartMutation = () => {
  return useMutation(
    ["add-product-to-cart"],
    ({
      userId,
      products,
    }: {
      userId: string | number;
      products: { id: string | number; quantity: number }[];
    }) => addProductToCart(userId, products)
  );
};
