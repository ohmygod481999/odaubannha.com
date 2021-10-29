import { fetchAPI } from "../utils/api";
import { createQueryString } from "../utils/common";

/**
 *
 * @param {Object} params {_limit, _start}
 */
export async function getArticles(params) {
    const queryString = createQueryString(params)
    const articles = await fetchAPI(
        "/articles" + queryString
    );
    return articles;
}

export async function getArticle(slug) {
    const articles = await fetchAPI(`/articles?slug=${slug}`);
    return articles?.[0];
}

export async function countArticle(params = {}) {
    const queryString = createQueryString(params)
    const numArticles = await fetchAPI(`/articles/count` + queryString);
    return numArticles;
}
