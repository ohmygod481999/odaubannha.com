import React, { useState, useMemo } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { formatMoney } from "../utils/common";
import { getCheckout } from "../services/checkout.service";
import { useForm } from "react-hook-form";
import { createOrder } from "../services/payment.service";
import useAddress from "../utils/hooks/useAddress";
import { clearCart } from "../redux/reducers/cartReducer";

function Checkout({ checkout }) {
    const { title, image } = checkout;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const city = watch("city");
    const [serverMsg, setServerMsg] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { products } = cartState;

    const submitHandler = async (values) => {
        const {
            name,
            email,
            mobile,
            city,
            district,
            detailAddress,
            note,
        } = values;

        const productOrders = products.map((p) => ({
            product: {
                id: p.id,
            },
            quantity: p.quantity,
            toppingorders: p.toppings
                ? p.toppings.map((t) => ({
                      topping: {
                          id: t.id,
                      },
                      quantity: t.quantity,
                  }))
                : [],
        }));
        const customer = {
            name,
            email,
            mobile,
            city,
            district,
            detailAddress,
        };
        setSubmitting(true);
        const res = await createOrder(productOrders, customer);
        setSubmitting(false);
        const { error, message, data, statusCode } = res;
        if (error) {
            setServerMsg({
                content: message + " " + JSON.stringify(data),
                msgType: "alert-danger",
            });
        } else {
            dispatch(clearCart());
            setServerMsg({
                content: "Thành công",
                msgType: "alert-success",
            });
        }
    };

    const total = useMemo(() => {
        let total = 0;
        for (let product of products) {
            let productPrice = product.price;
            if (product.toppings) {
                console.log(product.toppings);
                product.toppings.forEach((topping) => {
                    productPrice +=
                        parseInt(topping.price) * parseInt(topping.quantity);
                });
            }
            total += (product.quantity || 1) * productPrice;
        }
        return total;
    }, [products]);

    const [districts] = useAddress(city);

    return (
        <>
            <Breadcrumb title={title} image={image} />
            <div className="section">
                <div className="container">
                    {/* <Coupon /> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="medium_divider clearfix" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading_s1">
                                <h4>Thông tin đơn hàng</h4>
                            </div>
                            <form method="post" className="row">
                                <div className="form-group col-md-12">
                                    <input
                                        {...register("name", {
                                            required: "Trường bắt buộc",
                                        })}
                                        type="text"
                                        required
                                        className="form-control"
                                        name="name"
                                        placeholder="Tên *"
                                        style={{
                                            borderColor: errors.name
                                                ? "#dc3545"
                                                : "#ced4da",
                                        }}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback d-block">
                                            {errors.name.message}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        {...register("email")}
                                        type="text"
                                        required
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        {...register("mobile", {
                                            required: "Trường bắt buộc",
                                        })}
                                        className="form-control"
                                        required
                                        type="text"
                                        name="mobile"
                                        placeholder="Số điện thoại *"
                                        style={{
                                            borderColor: errors.mobile
                                                ? "#dc3545"
                                                : "#ced4da",
                                        }}
                                    />
                                    {errors.mobile && (
                                        <div className="invalid-feedback d-block">
                                            {errors.mobile.message}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group col-md-12">
                                    <select
                                        {...register("city", {
                                            required: "Trường bắt buộc",
                                        })}
                                        className="form-control"
                                        required
                                        type="text"
                                        name="city"
                                        placeholder="Thành phố"
                                        style={{
                                            borderColor: errors.city
                                                ? "#dc3545"
                                                : "#ced4da",
                                        }}
                                    >
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Sài Gòn">Sài gòn</option>
                                    </select>
                                    {errors.city && (
                                        <div className="invalid-feedback d-block">
                                            {errors.city.message}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group col-md-12">
                                    <select
                                        {...register("district", {
                                            required: "Trường bắt buộc",
                                        })}
                                        className="form-control"
                                        required
                                        type="text"
                                        name="district"
                                        placeholder="Quận huyện"
                                        style={{
                                            borderColor: errors.district
                                                ? "#dc3545"
                                                : "#ced4da",
                                        }}
                                    >
                                        {districts.map((district) => (
                                            <option
                                                key={district}
                                                value={district}
                                            >
                                                {district}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.district && (
                                        <div className="invalid-feedback d-block">
                                            {errors.district.message}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group col-md-12">
                                    <input
                                        {...register("detailAddress", {
                                            required: "Trường bắt buộc",
                                        })}
                                        type="text"
                                        className="form-control"
                                        name="detailAddress"
                                        required
                                        placeholder="Địa chỉ *"
                                        style={{
                                            borderColor: errors.detailAddress
                                                ? "#dc3545"
                                                : "#ced4da",
                                        }}
                                    />
                                    {errors.detailAddress && (
                                        <div className="invalid-feedback d-block">
                                            {errors.detailAddress.message}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group mb-0 mt-2 col-md-12">
                                    <div className="heading_s1">
                                        <h4>Ghi chú</h4>
                                    </div>
                                    <textarea
                                        {...register("note")}
                                        rows={5}
                                        className="form-control"
                                        placeholder="Order notes"
                                        defaultValue={""}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="order_review">
                                <div className="heading_s1">
                                    <h4>Đơn hàng của bạn</h4>
                                </div>
                                <div className="table-responsive order_table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Topping</th>
                                                <th>Giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        {product.title}{" "}
                                                        <span className="product-qty">
                                                            x{" "}
                                                            {product.quantity ||
                                                                1}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {product.toppings && (
                                                            <ul>
                                                                {product.toppings.map(
                                                                    (
                                                                        topping
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                topping.id
                                                                            }
                                                                        >
                                                                            {
                                                                                topping.name
                                                                            }{" "}
                                                                            <span className="product-qty">
                                                                                x
                                                                                {topping.quantity ||
                                                                                    1}
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {(function () {
                                                            let productPrice =
                                                                product.price;
                                                            if (
                                                                product.toppings
                                                            ) {
                                                                product.toppings.forEach(
                                                                    (
                                                                        topping
                                                                    ) => {
                                                                        productPrice +=
                                                                            parseInt(
                                                                                topping.price
                                                                            ) *
                                                                            parseInt(
                                                                                topping.quantity
                                                                            );
                                                                    }
                                                                );
                                                            }
                                                            return formatMoney(
                                                                productPrice
                                                            );
                                                        })()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>SubTotal</th>
                                                <th></th>
                                                <td className="product-subtotal">
                                                    {formatMoney(total)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <th></th>
                                                <td>Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <th></th>
                                                <td className="product-subtotal">
                                                    {formatMoney(total)}
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="payment_method">
                                    <div className="heading_s1">
                                        <h4>Payment</h4>
                                    </div>
                                    <div className="payment_option">
                                        <div className="custome-radio">
                                            <input
                                                className="form-check-input"
                                                required
                                                type="radio"
                                                name="payment_option"
                                                id="exampleRadios3"
                                                defaultValue="option3"
                                                defaultChecked
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleRadios3"
                                            >
                                                COD
                                            </label>
                                            <p
                                                data-method="option3"
                                                className="payment-text"
                                            >
                                                Thanh toán khi nhận hàng
                                            </p>
                                        </div>
                                        <div className="custome-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="payment_option"
                                                id="exampleRadios4"
                                                defaultValue="option4"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleRadios4"
                                            >
                                                Chuyển khoản
                                            </label>
                                            <p
                                                data-method="option6"
                                                className="payment-text"
                                            >
                                                Chuyển tiền qua tài khoản MB
                                                Bank 0829400301
                                            </p>
                                        </div>
                                        {/* <div className="custome-radio">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="payment_option"
                                                id="exampleRadios5"
                                                defaultValue="option5"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="exampleRadios5"
                                            >
                                                Paypal
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                                <a
                                    className={`btn btn-default ${
                                        submitting && "disabled"
                                    }`}
                                    onClick={handleSubmit(submitHandler)}
                                >
                                    Đặt hàng
                                </a>
                                {serverMsg ? (
                                    <div
                                        className={`alert ${serverMsg.msgType} alert-dismissible fade show mt-4`}
                                        role="alert"
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: serverMsg.content,
                                            }}
                                        ></span>
                                        <button
                                            onClick={() => {
                                                setServerMsg(null);
                                            }}
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;

export async function getServerSideProps() {
    const checkout = await getCheckout();
    return { props: { checkout } };
}
