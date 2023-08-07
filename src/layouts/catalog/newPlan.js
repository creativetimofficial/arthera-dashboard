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
import Autocomplete from "@mui/material/Autocomplete";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";


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
            Plan 1
          </MDTypography>
          <MDTypography variant="subtitle2" fontWeight="normal">
            Plans specify the terms of a subscription contract. Each Plan refers to the purchase of a single product.
          </MDTypography>
        </MDBox>

        <MDBox>
          <MDBox mb={3} width="12rem">
            <MDInput
              type="text"
              label="plan name..."
              variant="standard"
              fullWidth
            />
          </MDBox>
          <MDBox mb={5} width="12rem">
            <MDTypography mb={2} variant="subtitle1" fontWeight="normal">
              Product
            </MDTypography>
            <Autocomplete
              defaultValue="Product 1"
              options={selectData.product}
              renderInput={(params) => (
                <FormField {...params} label="Product" InputLabelProps={{ shrink: true }} />
              )}
            />
          </MDBox>

          <MDBox mb={5} width="20rem">
            <MDTypography mb={2} variant="subtitle1" fontWeight="normal">
              Billing mode
            </MDTypography>
            <Autocomplete
              defaultValue="IN_ADVANCE"
              options={selectData.billing}
              renderInput={(params) => (
                <FormField {...params} label="mode" InputLabelProps={{ shrink: true }} />
              )}
            />
          </MDBox>
          <MDBox>
            <MDTypography variant="h4"  borderBottom={1} pb={2}>Phases</MDTypography>
            <MDBox mt={4} mb={1} display="flex" alignItems="center">
              <MDTypography variant="h5" mr={12}>Initial Phases</MDTypography>
              <MDButton variant="outlined" color="primary" size="small">Add</MDButton>
            </MDBox>
            <Grid width="50%" container spacing={3} ml={4}>
              <Grid item xs={12} md={4}>
                <MDTypography variant="subtitle2" fontWeight="normal">
                  TRIAL
                </MDTypography>
                <MDTypography variant="subtitle2" fontWeight="normal">
                  DISCOUNT
                </MDTypography>
              </Grid>
              <Grid item xs={12} md={4}>
                <MDTypography variant="subtitle2" fontWeight="normal">
                  30 DAYS, No Billing
                </MDTypography>
                <MDTypography variant="subtitle2" fontWeight="normal">
                  3 MONTHS, 30 AA / Month
                </MDTypography>
              </Grid>
              <Grid item xs={12} md={4}>
                <MDBox display="flex" alignItems="center">
                  <Link href="#"><MDButton variant="link" color="primary">Edit</MDButton></Link>
                  <Link href="#"><MDButton variant="link" color="primary">Delete</MDButton></Link>
                </MDBox>
                <MDBox display="flex" alignItems="center">
                  <Link href="#"><MDButton variant="link" color="primary">Edit</MDButton></Link>
                  <Link href="#"><MDButton variant="link" color="primary">Delete</MDButton></Link>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>

          <MDBox mt={4}>
            <MDBox mb={1} display="flex" alignItems="center">
              <MDTypography variant="h5" mr={12}>Final Phase</MDTypography>
              <MDButton variant="outlined" color="primary" size="small">Add</MDButton>
            </MDBox>
            <Card>
              <MDBox p={3}>
                <MDTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="bold">
                  Add new Phase
                </MDTypography>
                <MDBox mt={2} mb={3} width="12rem">
                  <MDTypography mb={2} variant="body2" component="p">
                    Phase type
                  </MDTypography>
                  <Autocomplete
                    defaultValue="TYPE"
                    options={selectData.phase}
                    renderInput={(params) => (
                      <FormField {...params} label="TYPE" InputLabelProps={{ shrink: true }} />
                    )}
                  />
                </MDBox>
                <MDBox mt={2} mb={3}>
                  <MDTypography variant="subtitle2" component="p">
                    Duration
                  </MDTypography>
                  <MDTypography mb={2} variant="body2" color="text">
                    the length of the phase
                  </MDTypography>
                  <MDBox display="flex" alignItems="center" gap={2}  width="20rem">
                    <MDInput
                      type="text"
                      label="units..."
                      variant="standard"
                    />
                    <Autocomplete
                      defaultValue="DAYS"
                      options={selectData.duration}
                      fullWidth
                      renderInput={(params) => (
                        <FormField {...params} label="DAYS" InputLabelProps={{ shrink: true }} />
                      )}
                    />
                  </MDBox>
                </MDBox>

                <MDBox mt={2} mb={3} width="20%">
                  <MDTypography variant="subtitle2" component="p">
                    Billing Period
                  </MDTypography>
                  <MDTypography mb={2} variant="body2" color="text">
                    how frequently do we want to invoice for this phase
                  </MDTypography>
                  <Autocomplete
                    defaultValue="MONTHLY"
                    options={selectData.billing}
                    renderInput={(params) => (
                      <FormField {...params} label="MONTHLY" InputLabelProps={{ shrink: true }} />
                    )}
                  />
                </MDBox>

                <MDBox mt={2} mb={3} width="20%">
                  <MDTypography variant="subtitle2" component="p">
                    Recurring Price
                  </MDTypography>
                  <MDTypography mb={2} variant="body2" color="text">
                    the price that needs to be paid every billing period
                  </MDTypography>
                  <MDInput
                    type="text"
                    label="amount..."
                    variant="standard"
                  />
                </MDBox>

                <MDBox mt={2} mb={3} width="20%">
                  <MDTypography variant="subtitle2" component="p">
                    Fixed Price
                  </MDTypography>
                  <MDTypography mb={2} variant="body2" color="text">
                    a fixed price charged at the beginning of the period in addition to the recurring price
                  </MDTypography>
                  <MDInput
                    type="text"
                    label="amount..."
                    variant="standard"
                  />
                </MDBox>
              <MDButton variant="outlined" color="primary">Save</MDButton>
              </MDBox>

            </Card>
          </MDBox>
          
        </MDBox>
       
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
