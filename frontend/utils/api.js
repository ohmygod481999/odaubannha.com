import { getAllExtensions } from "showdown";
import { config } from "../config";
import axios from "axios";

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://bunrieucohuongbeo.longvb.tech"
  }${path}`;
}

// Helper to make GET requests to Strapi
// =========new code - 3/11/2021 --- fetch with axios==============
export const getHomePage = async () => {
  try {
    const fullUrl = getStrapiURL("/home-page");

    const res = await axios.get(fullUrl);

    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//========= old code - will be changed ===============
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    return {};
  }
}

export async function postAPI(path, body) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, {
    method: "POST",
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}
