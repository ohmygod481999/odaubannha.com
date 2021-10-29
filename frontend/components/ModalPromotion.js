import React, { useEffect, useState } from "react";

function ModalPromotion({ imgUrl, href }) {
    useEffect(() => {
        if (typeof window !== undefined) {
            const { $ } = window;
            setTimeout(() => {
                $("#exampleModal").modal("show");
            }, 3000);
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
                    <div className="modal-content">
                        <div className="modal-body p-0 m-9">
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
                            <a href={href}>
                                <img
                                    className="w-100"
                                    src={imgUrl}
                                    alt="promotion"
                                ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPromotion;
