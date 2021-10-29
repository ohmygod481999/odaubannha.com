import { fetchAPI } from "../utils/api";

export async function getMenu() {
    const menu = await fetchAPI(`/menu`);
    return menu;
}
