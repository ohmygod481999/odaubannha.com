import { fetchAPI } from "../utils/api";

export async function getNews() {
    const news = await fetchAPI(`/news`);
    return news;
}
