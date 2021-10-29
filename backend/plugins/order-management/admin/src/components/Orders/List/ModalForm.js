import React, { useRef, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Button, Padded, Text, Table } from "@buffetjs/core";
import { get } from "lodash";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  useGlobalContext,
  ModalSection,
} from "strapi-helper-plugin";
import styled from "styled-components";
import { formatMoney } from "../../../utils/getTrad";

const DescriptionBox = styled.div`
  width: 100%;
  min-height: 119px;
  padding: 16px;
  background-color: #fafafa;
  border-radius: 2px;
  margin-top: 10px;
`;

const ModalForm = ({
  isOpen,
  onToggle,
  modalData,
  updateStatus,
  handleToggle,
}) => {
  const [currentStep, setStep] = useState("create");
  // Little trick to focus the first input
  // Without this the focus is lost
  const [showBody, setShowBody] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [registrationToken, setRegistrationToken] = useState(null);
  const { formatMessage } = useGlobalContext();
  const ref = useRef(null);

  const handleClosed = () => {
    // Fetch data only if the user has submitted a new entry
    // We can use the registrationToken to know thicol-4"
    // Reset the state so we know that the user has created a new entry when there is a registrationToken
    setStep("create");
    setShowBody(false);
    setRegistrationToken(null);
  };

  const handleOpened = () => {
    setShowBody(true);
  };

  const headers = useMemo(
    () => [
      {
        name: "Sản phẩm",
        value: "product",
        cellFormatter: (cellData, rowData) => {
          if (!cellData) {
            return "-";
          }

          return `${cellData.title} - ${formatMoney(parseInt(cellData.price))}`;
        },
      },
      {
        name: "Số lượng",
        value: "quantity",
        cellFormatter: (cellData, rowData) => {
          if (!cellData) {
            return "-";
          }

          return cellData;
        },
      },
      {
        name: "Topping",
        value: "toppingorders",
        cellFormatter: (cellData, rowData) => {
          if (!cellData) {
            return "-";
          }
          return (
            <div>
              {(cellData || []).map((toppingorder) => (
                <div>
                  - {toppingorder.topping.name}{" "}
                  <strong>{toppingorder.quantity}</strong>x{" "}
                  {formatMoney(toppingorder.topping.price)}
                </div>
              ))}
            </div>
          );
        },
      },
      {
        name: "Thành tiền",
        value: "toppingorders",
        cellFormatter: (cellData, rowData) => {
          let total = rowData["product"].price * (rowData["quantity"] || 1);
          (cellData || []).forEach((toppingorder) => {
            total += toppingorder.topping.price * toppingorder.quantity;
          });
          return formatMoney(total);
        },
      },
    ],
    []
  );

  const total = useMemo(() => {
    if (modalData) {
      let total = 0;
      for (let productorder of modalData.productorders) {
        let productPrice = productorder.product.price;
        if (productorder.toppingorders) {
          productorder.toppingorders.forEach((toppingorder) => {
            productPrice +=
              parseInt(toppingorder.topping.price) *
              parseInt(toppingorder.quantity);
          });
        }
        total += (productorder.quantity || 1) * productPrice;
      }
      return total;
    }
    return 0;
  }, [modalData]);

  return (
    <Modal
      isOpen={isOpen}
      onOpened={handleOpened}
      onToggle={onToggle}
      onClosed={handleClosed}
      withoverflow="true"
    >
      <ModalHeader headerBreadcrumbs={["Chi tiết đơn hàng"]} />
      {showBody && modalData && (
        <div>
          <Padded top size="18px">
            <ModalSection>
              <div className="row">
                <div className="col-12">
                  <Text
                    fontSize="xs"
                    color="grey"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    Thông tin khách hàng
                  </Text>
                  <DescriptionBox>
                    <div className="row">
                      <div className="col-4">
                        <Padded bottom size="18px">
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Tên
                          </Text>
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {get(modalData, "customer.name")}
                          </Text>
                        </Padded>
                      </div>
                      <div className="col-4">
                        <Padded bottom size="18px">
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Số điện thoại
                          </Text>
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {get(modalData, "customer.mobile")}
                          </Text>
                        </Padded>
                      </div>
                      <div className="col-4">
                        <Padded bottom size="18px">
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Email
                          </Text>
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {get(modalData, "customer.email")}
                          </Text>
                        </Padded>
                      </div>
                      <div className="col-4">
                        <Padded bottom size="18px">
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Thành phố
                          </Text>
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {get(modalData, "customer.city")}
                          </Text>
                        </Padded>
                      </div>
                      <div className="col-4">
                        <Padded bottom size="18px">
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Quận
                          </Text>
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {get(modalData, "customer.district")}
                          </Text>
                        </Padded>
                      </div>
                      <div className="col-4">
                        <Padded bottom size="18px">
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Địa chỉ chi tiết
                          </Text>
                          <Text
                            fontSize="md"
                            color="grey"
                            fontWeight="regular"
                            textTransform="capitalize"
                          >
                            {get(modalData, "customer.detailAddress")}
                          </Text>
                        </Padded>
                      </div>
                    </div>
                  </DescriptionBox>
                </div>
                <div className="col-12">
                  <Padded top size="18px">
                    <Text
                      fontSize="xs"
                      color="grey"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      Thông tin đơn hàng
                    </Text>
                    <Padded top size="18px">
                      <Table headers={headers} rows={modalData.productorders} />

                      <Padded top bottom size="15px">
                        <Padded right size="77px">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <Text
                              fontSize="md"
                              // color="grey"
                              fontWeight="bold"
                              textTransform="uppercase"
                            >
                              Tổng tiền: {formatMoney(total)}
                            </Text>
                          </div>
                        </Padded>
                      </Padded>
                    </Padded>
                  </Padded>
                </div>
              </div>
            </ModalSection>
          </Padded>
        </div>
      )}
      <ModalFooter>
        <section>
          <Button type="button" color="cancel" onClick={onToggle}>
            {formatMessage({ id: "app.components.Button.cancel" })}
          </Button>
          {(function () {
            if (modalData) {
              if (modalData.status === "created")
                return (
                  <Button
                    color="primary"
                    onClick={(e) => {
                      updateStatus(modalData.id, "process");
                      handleToggle();
                    }}
                  >
                    Xác nhận
                  </Button>
                );
              else if (modalData.status === "process")
                return (
                  <Button
                    color="success"
                    onClick={() => {
                      updateStatus(modalData.id, "done");
                      handleToggle();
                    }}
                  >
                    Hoàn thành
                  </Button>
                );
            }
            return null;
          })()}
          {/* <Button
            color="success"
            type="button"
            onClick={handleClick}
            isLoading={isSubmiting}
          >
            {formatMessage({ id: buttonSubmitLabel })}
          </Button> */}
        </section>
      </ModalFooter>
    </Modal>
  );
};

ModalForm.defaultProps = {
  // onClosed: () => {},
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  // onClosed: PropTypes.func,
  onToggle: PropTypes.func.isRequired,
};

export default ModalForm;
