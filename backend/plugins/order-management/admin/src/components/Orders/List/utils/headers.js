import React from "react";
import ActiveStatus from "../ActiveStatus";
import { Button } from "@buffetjs/core";
import Badge from "../../../Utils/Badge";
import { formatDate } from "../../../../../../../../utils";
import moment from "moment";

const headers = [
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
            onClick={(e) => {
              e.stopPropagation();
              alert("ahah");
            }}
          >
            Xác nhận
          </Button>
        );
      else if (rowData.status === "process")
        return (
          <Button
            color="success"
            onClick={() => {
              alert("ahah");
            }}
          >
            Hoàn thành
          </Button>
        );
    },
  },
  // {
  //   name: 'email',
  //   value: 'email',
  // },
  // {
  //   cellFormatter: cellData => {
  //     // Only display the role's name
  //     return cellData.map(role => role.name).join(',\n');
  //   },
  //   name: 'roles',
  //   value: 'roles',
  // },
  // {
  //   name: 'username',
  //   value: 'username',
  // },
  // {
  //   // eslint-disable-next-line react/prop-types
  //   cellAdapter: ({ isActive }) => {
  //     return <ActiveStatus isActive={isActive}>{isActive ? 'Active' : 'Inactive'}</ActiveStatus>;
  //   },
  //   name: 'active user',
  //   value: 'isActive',
  // },
];

export default headers;
