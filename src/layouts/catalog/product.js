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

import React, { useState } from 'react';

// @mui material components
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";


// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import FormField from "layouts/pages/account/components/FormField";

// Data
import dataTransactions from "layouts/pages/customers/data/transactionsTable";
import dataInvoices from "layouts/pages/customers/data/invoicesTable";
import selectData from "layouts/catalog/data/dataProduct";

function OrderList() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={3} mb={20}>
        <MDBox mb={2}>
          <MDTypography variant="h3" fontWeight="medium">
            Product 1
          </MDTypography>
          <MDTypography variant="subtitle2" fontWeight="normal">
            The Product is a representation of the thing the customer is actually buying
          </MDTypography>
        </MDBox>

        <MDBox>
          <MDBox mb={2} width="12rem">
            <MDInput
              type="text"
              label="name..."
              variant="standard"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2} width="12rem">
            <MDTypography mb={3} variant="subtitle1" fontWeight="normal">
              Category
            </MDTypography>
            <Autocomplete
              defaultValue="BASE"
              options={selectData.category}
              renderInput={(params) => (
                <FormField {...params} label="Category" InputLabelProps={{ shrink: true }} />
              )}
            />
          </MDBox>

          <MDBox mb={2}>
            <MDTypography variant="subtitle2" fontWeight="normal">
              Base Products - Products that can have one or more addons
            </MDTypography>
            <MDTypography variant="subtitle2" fontWeight="normal">
              Add-On Products - Products that can be bundled with a base product
            </MDTypography>
            <MDTypography variant="subtitle2" fontWeight="normal">
              Standalone Products - Products that cannot have any addons
            </MDTypography>
          </MDBox>

          <MDBox mt={2} mb={5} width="20rem">
            <MDTypography mb={3} variant="subtitle1" fontWeight="normal">
              Base Product (only for ADDON)
            </MDTypography>
            <Autocomplete
              defaultValue="Product 1"
              options={selectData.product}
              renderInput={(params) => (
                <FormField {...params} label="Product" InputLabelProps={{ shrink: true }} />
              )}
            />
          </MDBox>
          
          <MDButton variant="outlined" color="primary">Save</MDButton>
        </MDBox>
       
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
