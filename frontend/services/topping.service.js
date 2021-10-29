import { fetchAPI } from "../utils/api";

export async function getToppings() {
    const toppings = await fetchAPI(
        "/order-management/toppings"
    );
    return toppings;
}