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

const dataTableTransactions = {
  columns: [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Occured ON",
      accessor: "occuredOn",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Payment Method",
      accessor: "paymentMethod",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
  ],

  rows: [
    {
      id: "be9dceca-9c5d-4038-818c-57e6fccfbe92",
      occuredOn: "27 Jul 2023 10:30",
      status: "SUCCESS",
      paymentMethod: "Arthera wallet",
      amount: "100 AA",
    },
    
  ],
};

export default dataTableTransactions;
