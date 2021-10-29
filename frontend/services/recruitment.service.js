import { fetchAPI } from "../utils/api";

export async function getRecuitment() {
    const recruitment = await fetchAPI(`/recruitment`);
    return recruitment;
}
