/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// ProductsList page components
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";

const dataTableCurrency = {
  columns: [
    {
      Header: "Name",
      accessor: "name",
    },
  ],

  rows: [
    {
      name: "USD",
    },
    {
      name: "EUR",
    },
    {
      name: "AA",
    },
    
  ],
};

export default dataTableCurrency;
