import { fetchAPI } from "../utils/api";

export async function getBigOrder() {
    const bigOrder = await fetchAPI(`/big-order`);
    return bigOrder;
}
