import { fetchAPI } from "../utils/api";

export async function getAbout() {
    const about = await fetchAPI(`/about`);
    return about;
}
