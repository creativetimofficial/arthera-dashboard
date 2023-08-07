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
import Link from "@mui/material/Link";

import MDBox from "components/MDBox";

import MDButton from "components/MDButton";

const dataProducts = {
  columns: [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Term",
      accessor: "term",
    },
    {
      Header: "",
      accessor: "details",
    },
  ],

  rows: [
    {
      name: "Basic",
      price: "12 $ / month",
      term: "12 months",
      details: <MDBox display="flex"><Link href="/catalog/plan"><MDButton variant="text" color="primary">View</MDButton></Link><Link href="/catalog/plan"><MDButton variant="text" color="primary">Delete</MDButton></Link></MDBox>

    },  
  ],
};

export default dataProducts;
