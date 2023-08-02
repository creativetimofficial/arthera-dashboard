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

const dataTableData = {
  columns: [
    { Header: "plan", accessor: "plan", width: "25%" },
    { Header: "name", accessor: "name", width: "20%" },
    { Header: "status", accessor: "status" },
    { Header: "created", accessor: "created" },
    { Header: "next invoice", accessor: "nextInvoice" }
  ],

  rows: [
    {
      plan: "Basic Plan",
      name: "Giacommo Guilizzoni",
      status: "Active",
      created: "27.07.2023",
      nextInvoice: "27.08.2023",
    },
    {
      plan: "Platinum Plan",
      name: "Fabio Lamanna",
      status: "Active",
      created: "12.07.2023",
      nextInvoice: "12.08.2023",
    },
    {
      plan: "Premium Plan",
      name: "Raffaele Limosani",
      status: "Active",
      created: "27.07.2023",
      nextInvoice: "27.08.2023",
    },
    {
      plan: "Basic Plan",
      name: "Kamil Hismatullin",
      status: "Active",
      created: "27.07.2023",
      nextInvoice: "27.08.2023",
    },
    {
      plan: "Silver Plan",
      name: "Aurelia Rossini",
      status: "Active",
      created: "27.07.2023",
      nextInvoice: "27.08.2023",
    },
  ],
};

export default dataTableData;
