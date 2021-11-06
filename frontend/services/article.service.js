import { fetchAPI } from "../utils/api";
import { createQueryString } from "../utils/common";

/**
 *
 * @param {Object} params {_limit, _start}
 */
export async function getArticles(params) {
  try {
    const queryString = createQueryString(params);
    const articles = await fetchAPI("/articles" + queryString);
    return articles;
  } catch (e) {
    console.log(e);
  }
}

export async function getArticle(slug) {
  try {
    const articles = await fetchAPI(`/articles?slug=${slug}`);
    return articles?.[0];
  } catch (err) {
    console.log(err);
  }
}

export async function countArticle(params = {}) {
  const queryString = createQueryString(params);
  const numArticles = await fetchAPI(`/articles/count` + queryString);
  return numArticles;
}
