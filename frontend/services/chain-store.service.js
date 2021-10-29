import { fetchAPI } from "../utils/api";

export async function getChainStore() {
    const chainStore = await fetchAPI(`/chain-store`);
    return chainStore;
}
