import { fetchAPI } from "../utils/api";

export async function getAddresses() {
    const addresses = await fetchAPI(`/addresses`);
    return addresses;
}
