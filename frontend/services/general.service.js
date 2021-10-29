import { fetchAPI } from "../utils/api";

export async function getGeneral() {
    const general = await fetchAPI(`/general`);
    return general;
}
