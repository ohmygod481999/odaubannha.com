import { fetchAPI } from "../utils/api";

export async function getFranchise() {
    const franchise = await fetchAPI(`/franchise`);
    return franchise;
}
