import React, { useEffect, useState, useReducer, useCallback } from "react";
import { postDataForm } from "../utils/api";

function reducerAuthentication(state, action) {
    switch (action.type) {
        case "pendding": {
            let newState = { ...state, status: "pendding", isLoading: true };
            return newState;
        }
        case "fullfilled": {
            let newState = {
                ...state,
                status: "fullfilled",
                isLoading: false,
                check: true,
                data: [action.payload],
                success: true,
                message: "Đăng ký  thành công",
            };
            return newState;
        }
        case "rejected": {
            let newState = {
                ...state,
                status: "rejected",
                isLoading: false,
                check: true,
                data: [],
                error: action.payload,
                message: "Đăng ký không thành công",
            };
            return newState;
        }
        case "reset": {
            let newState = {
                ...state,
                status: "idle",
                isLoading: false,
                check: false,
                data: [],
                error: false,
                success: false,
            };
            return newState;
        }
        default:
            return state;
    }
}
function ModalPromotion({ imgUrl, href }) {
    const initialData = {
        status: "idle",
        isLoading: false,
        check: false,
        data: [],
        error: false,
        success: false,
    };
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [state, dispatch] = useReducer(reducerAuthentication, initialData);
    const [checkSummit, setCheckSubmit] = useState(false);
    const _handleChangeForm = (e) => {
        setDataForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const _handleSubmit = (e) => {
        e.preventDefault();
        setCheckSubmit(true);
    };
    const _postApi = useCallback(async (api, data) => {
        try {
            const result = await api({
                ...data,
                interested_products: []
            });
            if (result) {
                dispatch({ type: "fullfilled", payload: result });
            } else {
                dispatch({
                    type: "rejected",
                    payload: " there has something wrong!!",
                });
            }
        } catch (err) {
            dispatch({
                type: "rejected",
                payload: " there has something wrong!!",
            });
            throw new Error(" rejected your api ");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (checkSummit) {
            dispatch({ type: "pendding" });
            _postApi(postDataForm, dataForm);
            setDataForm({ name: "", email: "", phone: "" });

            // auto close modal after 5s
            setTimeout(() => {
                dispatch({
                    type: "reset",
                });
                setCheckSubmit(false);
                $("#exampleModal").modal("hide");
            }, 1000);
        }
    }, [checkSummit]);

    useEffect(() => {
        if (typeof window !== undefined) {
            const { $ } = window;
            setTimeout(() => {
                $("#exampleModal").modal("show");
            }, 5000);
        }
    }, []);

    return (
        <div>
            <div
                className={`modal fade`}
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                >
                    <div
                        className="modal-content"
                        style={{
                            backgroundColor: "transparent",
                            border: "none"
                        }}
                        // style={{ overflow: "hidden", border: "none" }}
                    >
                        <div className="modal-body p-0 m-9">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-xl-12 ">
                                    <div
                                        style={{
                                            borderRadius: "8px",
                                        }}
                                        className="newletter-2 pt-30 pb-50 px-30 bg-primary md-mt-0 color-white"
                                    >
                                        <h3 className="color-white mb-20">
                                            Đăng ký ngay nhận ngay thông tin!
                                        </h3>
                                        <form
                                            className=" bg-gray mt-30"
                                            style={{
                                                backgroundColor: "#fd9834",
                                            }}
                                            onSubmit={_handleSubmit}
                                        >
                                            <div className="form-group position-relative">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={dataForm.name}
                                                    onChange={_handleChangeForm}
                                                    placeholder="Tên của bạn"
                                                />
                                            </div>

                                            <div className="form-group position-relative">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="email"
                                                    required
                                                    placeholder="Email"
                                                    value={dataForm.email}
                                                    onChange={_handleChangeForm}
                                                />
                                            </div>
                                            <div className="form-group position-relative">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="phone"
                                                    required
                                                    value={dataForm.phone}
                                                    placeholder="Số điện thoại"
                                                    onChange={_handleChangeForm}
                                                />
                                            </div>
                                            <div className="form-group position-relative">
                                                {!checkSummit && (
                                                    <button
                                                        type="submit"
                                                        className="btn bg-gray color-secondary px-4"
                                                        // style={{ width: 0 }}
                                                    >
                                                        Submit{" "}
                                                        <i className="fa fa-paper-plane" />
                                                    </button>
                                                )}
                                                {state.isLoading && (
                                                    <div
                                                        className="spinner-border "
                                                        role="status"
                                                        style={{
                                                            display: "block",
                                                            position:
                                                                "relative",
                                                            top: "20%",
                                                            left: "50%",
                                                        }}
                                                    ></div>
                                                )}
                                                {state.check && (
                                                    <p>{state.message} </p>
                                                )}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                style={{
                                    position: "absolute",
                                    right: 15,
                                    top: 15,
                                    background: "#ffcf24",
                                    borderRadius: "50%",
                                    width: "25px",
                                }}
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPromotion;
