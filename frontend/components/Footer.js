import React, { useEffect, useState, useCallback, useReducer } from "react";
import { getStrapiMedia, getStrapiImage } from "../utils/medias";
import { config } from "../config";
import Image from "next/image";
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
        message: "Đăng ký  thành công"
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
        message: "Đăng ký không thành công"
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
        success: false
      };
      return newState;
    }
    default:
      return state;
  }
}
function Footer({ generalInfo }) {
  const initialData = {
    status: "idle",
    isLoading: false,
    check: false,
    data: [],
    error: false,
    success: false
  };
  const [dataForm, setDataForm] = useState({ name: "", email: "", phone: "" });
  const [state, dispatch] = useReducer(reducerAuthentication, initialData);
  const [checkSummit, setCheckSubmit] = useState(false);
  const _handleChangeForm = (e) => {
    setDataForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    setCheckSubmit(true);
  };
  const _postApi = useCallback(async (api, data) => {
    try {
      const result = await api(data);
      if (result) {
        dispatch({ type: "fullfilled", payload: result });
      } else {
        dispatch({
          type: "rejected",
          payload: " there has something wrong!!"
        });
      }
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: " there has something wrong!!"
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
          type: "reset"
        });
        setCheckSubmit(false);
      }, 3000);
    }
  }, [checkSummit]);
  return (
    <div style={{ width: "100vw" }}>
      <footer
        className="footer-2 bg-secondary py-80 border-bottom-1-dark"
        style={{ marginTop: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-4 wow animated slideInUp">
              <div
                className="newletter-2 py-80 px-30 bg-primary md-mt-0 color-white"
                style={{ marginTop: "-160px" }}
              >
                <h3 className="color-white mb-20">
                  Đăng ký ngay nhận ngay thông tin!
                </h3>
                <form
                  className="news-letter bg-gray mt-30"
                  style={{ backgroundColor: "#fd9834" }}
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
                        className="bg-gray color-secondary"
                        style={{ left: 0 }}
                      >
                        <i className="fa fa-paper-plane" />
                      </button>
                    )}
                    {state.isLoading && (
                      <div
                        className="spinner-border "
                        role="status"
                        style={{
                          display: "block",
                          position: "relative",
                          top: "20%",
                          left: "50%"
                        }}
                      ></div>
                    )}
                    {state.check && <p>{state.message} </p>}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 col-xl-3 wow animated slideInDown">
              <div className="footer-logo mt-lg-30">
                <a href="index.html">
                  {generalInfo.logo && (
                    <img
                      className="nav-logo"
                      src={getStrapiImage(generalInfo.logo)}
                      alt="Image not found!"
                    />
                  )}
                </a>
                <div className="text-area mt-30 color-white">
                  <p>{generalInfo.contentFooter}</p>
                </div>
                <ul className="social-media-2 border-white large color-white-a mt-20">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 wow animated slideInUp"></div>
            <div className="col-sm-6 col-md-8 col-lg-5 col-xl-3 wow animated slideInDown">
              <div className="footer-widget color-white mt-lg-30">
                <h3 className="color-white line-bottom pb-15 mb-20">
                  Quick Contact
                </h3>
                <div className="widget-content">
                  <span>{generalInfo.address}</span>
                  <span className="d-block mt-20">
                    If you have any questions or need help, feel free to contact
                    with our support team.
                  </span>
                  <strong className="feel-free icon-primary mt-20 d-block">
                    <span className="mr-15">
                      <i className="fa fa-phone" />
                    </span>
                    {generalInfo.phone}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright bg-secondary color-white">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-6">
              <div className="py-15">
                Ở đâu bán nhà @ 2021. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
