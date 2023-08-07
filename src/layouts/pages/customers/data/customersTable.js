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
import Link from "@mui/material/Link";
import MDButton from "components/MDButton";

const dataTableCurrency = {
  columns: [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Company",
      accessor: "company",
    },
    {
      Header: "Created",
      accessor: "created",
    },
    {
      Header: "Plans",
      accessor: "plans",
    },
    {
      Header: "",
      accessor: "details",
    },
    
  ],

  rows: [
    {
      name: "Giacomo Guilizzoni",
      email: "giacomo@gmail.com",
      company: "None",
      created: "27.07.2023",
      plans: "Basic",
      details: <Link href="/customers/customer"><MDButton variant="text" color="primary">Details</MDButton></Link>
    },
    
  ],
};

export default dataTableCurrency;
