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
  ],

  rows: [
    {
      name: "Basic Product",
      category: "BASE",
    },
    {
      name: "Addon Product",
      category: "Addon for Basic Product",
    },
    {
      name: "Standalone Product",
      category: "STANDALONE",
    },
    
  ],
};

export default dataProducts;
