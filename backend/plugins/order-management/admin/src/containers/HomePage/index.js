/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        padding: "18px 30px 66px 30px",
      }}
    >
      <h1>Quản trị đơn hàng </h1>
      <p>
        <NavLink to={"/plugins/order-management/orders?page=1&pageSize=10&_sort=created_at%3ADESC&status=created"}>
          danh sách đơn hàng
        </NavLink>
      </p>
    </div>
  );
};

export default memo(HomePage);
