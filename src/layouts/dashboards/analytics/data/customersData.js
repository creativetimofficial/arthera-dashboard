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

const CustomersData = {
  columns: [
    { Header: "name", accessor: "name", width: "25%" },
    { Header: "email", accessor: "email", width: "20%" },
    { Header: "company", accessor: "company" },
    { Header: "created", accessor: "created" },
    { Header: "plans", accessor: "plans" }
  ],

  rows: [
    {
      name: "Giacommo Guilizzoni",
      email: "giacommo@gmail.com",
      company: "Google",
      created: "27.07.2023",
      plans: "Basic",
    },
    {
      name: "Robert Cottrell",
      email: "robert@gmail.com",
      company: "Apple",
      created: "27.06.2023",
      plans: "Basic",
    },
  ],
};

export default CustomersData;
