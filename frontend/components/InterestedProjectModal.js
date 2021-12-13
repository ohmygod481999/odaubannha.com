import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postDataForm } from "../utils/api";

function InterestedProjectModal({ state, dataModal = {} }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    const onSubmit = async (data) => {
        const { email, name, phone } = data;
        setIsLoading(true);
        const response = await postDataForm({
            name,
            email,
            phone,
            interested_products: [
                {
                    id: dataModal.id,
                },
            ],
        });
        if (response && response.created_at) {
            setResponseMessage("Thành công")
        }
        else {
            setResponseMessage("Thất bại")
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { $ } = window;
            console.log(dataModal);
            if (state !== 0) {
                $("#interestedProjectModal").modal("show");
            }
            // $('#myModal').on('shown.bs.modal', function () {
            //     $('#myInput').trigger('focus')
            //   })
        }
    }, [state]);

    return (
        <div
            id="interestedProjectModal"
            className="modal"
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Nhận thông tin về {dataModal && dataModal.title}
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <input
                                {...register("name", { required: true })}
                                className="form-control bg-gray"
                                placeholder="Tên của bạn"
                            />
                            {errors.name?.type === "required" && (
                                <div class="invalid-feedback d-block">
                                    Name is required
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                {...register("phone", { required: true })}
                                className="form-control bg-gray"
                                placeholder="Số điện thoại"
                            />
                            {errors.phone?.type === "required" && (
                                <div class="invalid-feedback d-block">
                                    Phone is required
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                                type="email"
                                className="form-control bg-gray"
                                placeholder="Email"
                            />
                            {errors.email?.type === "required" && (
                                <div class="invalid-feedback d-block">
                                    Email is required
                                </div>
                            )}
                            {errors.email?.type === "pattern" && (
                                <div class="invalid-feedback d-block">
                                    Email is invalid
                                </div>
                            )}
                        </div>
                        {responseMessage && (
                            <div className="text-center">Thành công</div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className={`btn btn-primary ${
                                isLoading ? "disabled" : ""
                            }`}
                            onClick={handleSubmit(onSubmit)}
                        >
                            Gửi
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InterestedProjectModal;
