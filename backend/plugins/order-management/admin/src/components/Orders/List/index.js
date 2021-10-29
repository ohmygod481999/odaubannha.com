import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useReducer,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPencilAlt,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Table, Button } from "@buffetjs/core";
import { useGlobalContext } from "strapi-helper-plugin";
import { useHistory } from "react-router-dom";
import { SETTINGS_BASE_URL } from "../../../../../../../admin/src/config";
import { checkIfAllEntriesAreSelected, getSelectedIds } from "./utils";
import { initialState, reducer } from "./reducer";
import init from "./init";
import Wrapper from "./Wrapper";
import Badge from "../../Utils/Badge";
import moment from "moment";
import ModalForm from "./ModalForm";

const List = forwardRef(
  (
    {
      canDelete,
      canUpdate,
      data,
      filters,
      isLoading,
      onChange,
      searchParam,
      handleUpdateStatus,
    },
    ref
  ) => {
    const { push } = useHistory();
    const [{ rows }, dispatch] = useReducer(reducer, initialState, init);

    const { formatMessage } = useGlobalContext();

    // modal
    const [isModalOpened, setIsModalOpened] = useState(false);
    const handleToggle = () => setIsModalOpened((prev) => !prev);
    const [modalData, setModalData] = useState(null);
    // end modal

    const handleClickRow = (order) => {
      setModalData(order);
      handleToggle();
    };

    useEffect(() => {
      dispatch({
        type: "SET_DATA",
        data,
      });
    }, [data]);

    useImperativeHandle(ref, () => ({
      resetDataToDelete: () => {
        dispatch({
          type: "RESET_DATA_TO_DELETE",
        });
      },
    }));

    let tableEmptyText = "Users.components.List.empty";

    if (searchParam) {
      tableEmptyText = `${tableEmptyText}.withSearch`;
    }

    if (filters.length) {
      tableEmptyText = `${tableEmptyText}.withFilters`;
    }

    const tableEmptyTextTranslated = formatMessage(
      { id: tableEmptyText },
      { search: searchParam }
    );

    const handleChange = (row, index) => {
      dispatch({
        type: "ON_CHANGE",
        index,
      });

      onChange(getSelectedIds(rows, index));
    };

    const handleChangeAll = () => {
      dispatch({
        type: "ON_CHANGE_ALL",
      });

      let selectedIds = [];
      const areAllEntriesSelected = checkIfAllEntriesAreSelected(rows);

      if (!areAllEntriesSelected) {
        for (let i = 0; i < rows.length; i++) {
          selectedIds.push(rows[i].id);
        }
      }

      onChange(selectedIds);
    };

    const updateStatus = async (orderId, status) => {
      const res = await handleUpdateStatus(orderId, status);
      if (res.status) {
        dispatch({
          type: "UPDATE_STATUS",
          data: {
            orderId: orderId,
            status: res.status,
          },
        });
      }
    };

    const headers = useMemo(
      () => [
        {
          cellFormatter: (cellData, rowData) => {
            if (!cellData) {
              return "-";
            }

            return `${cellData.name} - ${cellData.mobile}`;
          },
          name: "Khách hàng",
          value: "customer",
        },
        {
          cellFormatter: (cellData, rowData) => {
            if (!cellData) {
              return "-";
            }
            let color = "secondary";
            switch (cellData) {
              case "created":
                color = "secondary";
                break;
              case "process":
                color = "primary";
                break;
              case "done":
                color = "success";
                break;

              default:
                break;
            }

            return <Badge color={color}>{cellData}</Badge>;
          },
          name: "Trạng thái",
          value: "status",
        },
        {
          cellFormatter: (cellData, rowData) => {
            if (!cellData) {
              return "-";
            }
            return (
              <div>
                {cellData.map((productOrder) => (
                  <div>
                    - {productOrder.product.title} x{productOrder.quantity}
                  </div>
                ))}
              </div>
            );
          },
          name: "Sản phẩm",
          value: "productorders",
        },
        {
          cellFormatter: (cellData, rowData) => {
            if (!cellData) {
              return "-";
            }

            return `${moment(cellData).format("DD/MM/YYYY HH:mm")}`;
          },
          name: "Ngày tạo",
          value: "created_at",
        },
        {
          name: "Hành động",
          cellFormatter: (cellData, rowData) => {
            if (rowData.status === "created")
              return (
                <Button
                  color="primary"
                  onClick={async (e) => {
                    e.stopPropagation();
                    updateStatus(rowData.id, "process");
                  }}
                >
                  Xác nhận
                </Button>
              );
            else if (rowData.status === "process")
              return (
                <Button
                  color="success"
                  onClick={async (e) => {
                    e.stopPropagation();
                    updateStatus(rowData["id"], "done");
                  }}
                >
                  Hoàn thành
                </Button>
              );
          },
        },
      ],
      []
    );

    return (
      <Wrapper withHigherHeight={!data.length}>
        <Table
          className="table-wrapper"
          isLoading={isLoading}
          headers={headers}
          onClickRow={(e, data) => {
            console.log(data);
            handleClickRow(data);
          }}
          onSelect={handleChange}
          onSelectAll={handleChangeAll}
          rows={rows}
          tableEmptyText={tableEmptyTextTranslated}
          withBulkAction={canDelete}
        />

        <ModalForm
          isOpen={isModalOpened}
          handleToggle={handleToggle}
          onToggle={handleToggle}
          modalData={modalData}
          updateStatus={updateStatus}
        />
      </Wrapper>
    );
  }
);

List.defaultProps = {
  canDelete: false,
  canUpdate: false,
  data: [],
  filters: [],
  isLoading: false,
  onChange: () => {},
  onClickDelete: () => {},
  searchParam: "",
};

List.propTypes = {
  canDelete: PropTypes.bool,
  canUpdate: PropTypes.bool,
  data: PropTypes.array,
  filters: PropTypes.array,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onClickDelete: PropTypes.func,
  handleClick: PropTypes.func,
  searchParam: PropTypes.string,
};

export default List;
