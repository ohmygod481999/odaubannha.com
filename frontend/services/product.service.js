import { fetchAPI } from "../utils/api";
import { createQueryString } from "../utils/common";

export async function getProduct(slug) {
  try {
    const product = await fetchAPI(`/products/${slug}`);
    console.log(product)
    return product;
  } catch (err) {
    console.log(err);
  }
}