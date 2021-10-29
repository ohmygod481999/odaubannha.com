import React, { Fragment, useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import {
    toggleCart,
    removeProduct,
    changeQuantityCart,
    changeQuantityToppingCart,
} from "../redux/reducers/cartReducer";
import { getStrapiMedia } from "../utils/medias";
import { formatMoney } from "../utils/common";
import Image from "next/image";
import { getToppings } from "../services/topping.service";
import { Collapse } from "react-collapse";
import _ from "lodash"

function CartProduct({
    product,
    toppings,
    _removeProduct,
    changeQuantityCart,
    changeQuantityToppingCart,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li key={product.id}>
            <a
                // href="#"
                style={{
                    cursor: "pointer",
                }}
                className="item_remove"
                onClick={() => _removeProduct(product.cartId)}
            >
                <i className="ion-close" />
            </a>
            <a href="#">
                <img
                    src={getStrapiMedia(_.get(product,"image.formats.thumbnail.url"))}
                    alt="cart_thumb1"
                />
                {product.title}
            </a>
            <span className="cart_quantity">
                {" "}
                <input
                    style={{
                        width: 50,
                        textAlign: "center",
                        marginRight: 7,
                    }}
                    type="number"
                    onChange={(e) => {
                        changeQuantityCart({
                            cartId: product.cartId,
                            quantity: parseInt(e.target.value),
                        });
                    }}
                    value={product.quantity || 1}
                />{" "}
                x {formatMoney(product.price)}
                {/* <span className="cart_amount">
                                        <span className="price_symbole">đ</span>
                                    </span> */}
            </span>
            {product.is_have_topping !== false && (
                <div>
                    <p
                        className="mt-1"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <a style={{
                            textDecoration: "underline"
                        }} href="#" onClick={(e) => e.preventDefault()}>
                            TOPPINGS THÊM
                        </a>
                    </p>
                    <Collapse isOpened={isOpen}>
                        <div className="table-responsive order_table">
                            <table className="table">
                                <tbody>
                                    <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(toppings || []).map((topping) => {
                                            let toppingQuantity = 0;
                                            if (product.toppings) {
                                                let foundedTopping = product.toppings.find(
                                                    (tp) => tp.id === topping.id
                                                );
                                                if (foundedTopping) {
                                                    toppingQuantity =
                                                        foundedTopping.quantity;
                                                }
                                            }
                                            return (
                                                <tr key={topping.id}>
                                                    <td>{topping.name}</td>
                                                    <td>
                                                        {formatMoney(
                                                            topping.price
                                                        )}
                                                    </td>
                                                    <td>
                                                        <input
                                                            value={
                                                                toppingQuantity
                                                            }
                                                            onChange={(e) => {
                                                                changeQuantityToppingCart(
                                                                    {
                                                                        cartId:
                                                                            product.cartId,
                                                                        toppingId:
                                                                            topping.id,
                                                                        toppingPrice:
                                                                            topping.price,
                                                                        toppingName:
                                                                            topping.name,
                                                                        quantity:
                                                                            parseInt(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            ) <
                                                                            0
                                                                                ? 0
                                                                                : parseInt(
                                                                                      e
                                                                                          .target
                                                                                          .value
                                                                                  ),
                                                                    }
                                                                );
                                                            }}
                                                            style={{
                                                                paddingLeft: 8,
                                                            }}
                                                            type="number"
                                                            defaultValue="0"
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    {/* {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        {product.title}{" "}
                                        <span className="product-qty">
                                            x {product.quantity || 1}
                                        </span>
                                    </td>
                                    <td>
                                        {formatMoney(
                                            product.price *
                                                (product.quantity || 1)
                                        )}
                                    </td>
                                </tr>
                            ))} */}
                                </tbody>
                            </table>
                        </div>
                    </Collapse>
                </div>
            )}
        </li>
    );
}

function Cart() {
    const ref = React.useRef(null);
    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { isShowCart, products } = cartState;
    const [toppings, setToppings] = useState([]);

    useEffect(() => {
        getToppings().then((res) => {
            setToppings(res.data.results);
        });
    }, []);

    const _removeProduct = (productId) => {
        dispatch(removeProduct(productId));
    };

    useOnClickOutside(ref, () => {
        if (isShowCart) {
            dispatch(toggleCart());
        }
    });

    const total = useMemo(() => {
        let total = 0;
        for (let product of products) {
            let productPrice = product.price;
            if (product.toppings) {
                product.toppings.forEach((topping) => {
                    productPrice +=
                        parseInt(topping.price) * parseInt(topping.quantity);
                });
            }
            total += (product.quantity || 1) * productPrice;
        }
        return total;
    }, [products]);

    return (
        <Fragment>
            {isShowCart ? (
                <div id="header-overlay" className="header-overlay"></div>
            ) : null}

            <div ref={ref} className={`cart_box ${isShowCart && "show"}`}>
                <div className="cart_header">
                    <h3>Giỏ hàng</h3>
                </div>
                <ul className="cart_list">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <CartProduct
                                key={product.id}
                                product={product}
                                toppings={toppings}
                                _removeProduct={_removeProduct}
                                changeQuantityCart={(params) =>
                                    dispatch(changeQuantityCart(params))
                                }
                                changeQuantityToppingCart={(params) =>
                                    dispatch(changeQuantityToppingCart(params))
                                }
                            />
                        ))
                    ) : (
                        <p style={{ padding: 20 }}>Trống</p>
                    )}
                </ul>
                <div className="cart_footer">
                    <p className="cart_total">
                        <strong>Tổng:</strong>{" "}
                        <span className="cart_price">
                            {" "}
                            {/* <span className="price_symbole">$</span> */}
                            {formatMoney(total)}
                        </span>
                    </p>
                    <p className="cart_buttons">
                        <a
                            href="/checkout"
                            className="btn btn-default btn-radius checkout"
                            onClick={() => {
                                dispatch(toggleCart(false));
                            }}
                        >
                            Thanh toán
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Cart;
