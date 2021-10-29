import { createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { v4 } from "uuid";

const initialState = {
    products: [],
    isShowCart: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, value) => {
            state.products.push({ ...value.payload, cartId: v4() });
        },
        removeProduct: (state, value) => {
            state.products = state.products.filter(
                (p) => p.cartId !== value.payload
            );
        },
        clearCart: (state, value) => {
            state.products = [];
        },
        changeQuantityCart: (state, value) => {
            const { cartId, quantity } = value.payload;
            state.products.forEach((product, j) => {
                if (cartId === product.cartId) {
                    product.quantity = quantity;
                }
            });
        },
        changeQuantityToppingCart: (state, value) => {
            const {
                cartId,
                toppingId,
                quantity,
                toppingName,
                toppingPrice,
            } = value.payload;
            state.products.forEach((product, j) => {
                if (cartId === product.cartId) {
                    if (!product.toppings) {
                        product.toppings = [
                            {
                                id: toppingId,
                                quantity: quantity,
                                price: toppingPrice,
                                name: toppingName,
                            },
                        ];
                    } else {
                        let found = false;
                        product.toppings.forEach((topping) => {
                            if (topping.id === toppingId) {
                                topping.quantity = quantity;
                                found = true;
                            }
                        });
                        if (!found) {
                            product.toppings.push({
                                id: toppingId,
                                quantity: quantity,
                                name: toppingName,
                                price: toppingPrice,
                            });
                        }
                    }
                }
            });
        },
        toggleCart: (state, value) => {
            if (value.payload) {
                state.isShowCart = value.payload;
            } else {
                state.isShowCart = !state.isShowCart;
            }
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            // console.log("HYDRATE", state, action.payload);
            return {
                ...state,
                ...action.payload.some,
            };
        },
    },
});

export const {
    addProduct,
    removeProduct,
    toggleCart,
    changeQuantityCart,
    clearCart,
    changeQuantityToppingCart,
} = cartSlice.actions;

export default cartSlice.reducer;
