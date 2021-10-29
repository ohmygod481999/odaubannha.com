import { fetchAPI } from "../utils/api";

export async function getCheckout() {
    const checkout = await fetchAPI(`/checkout`);
    return checkout;
}
