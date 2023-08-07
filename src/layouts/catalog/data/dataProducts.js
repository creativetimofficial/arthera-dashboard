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
import MDButton from "components/MDButton";

const dataProducts = {
  columns: [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "",
      accessor: "details",
    },
  ],

  rows: [
    {
      name: "Basic Product",
      category: "BASE",
      details: <Link href="/catalog/product"><MDButton variant="link" color="primary">View</MDButton></Link>
    },
    {
      name: "Addon Product",
      category: "Addon for Basic Product",
      details: <Link href="/catalog/product"><MDButton variant="link" color="primary">View</MDButton></Link>
    },
    {
      name: "Standalone Product",
      category: "STANDALONE",
      details: <Link href="/catalog/product"><MDButton variant="link" color="primary">View</MDButton></Link>
    },
    
  ],
};

export default dataProducts;
