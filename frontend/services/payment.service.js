import { postAPI } from "../utils/api";

export const createOrder = (productOrders, customer) => {
    const body = {
        customer,
        productorders: productOrders,
        status: "created",
    };
    return postAPI("/order-management/orders", body);
};
