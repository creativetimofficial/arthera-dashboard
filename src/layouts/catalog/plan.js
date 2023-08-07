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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTransactions from "layouts/pages/customers/data/transactionsTable";
import dataInvoices from "layouts/pages/customers/data/invoicesTable";

function OrderList() {
  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={2}>
          <MDTypography variant="h3" fontWeight="medium">
            Basic Plan
          </MDTypography>
        </MDBox>
        <MDBox display="flex" gap={8} my={3}>
          <MDBox width="20%">
            <MDTypography variant="subtitle2" fontWeight="medium">ID</MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">Start Date</MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">Product</MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">Addons</MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">Status</MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">Phase</MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">Trial ends on</MDTypography>
            <MDTypography variant="subtitle2" fontWeight="medium">Next billing on</MDTypography>
          </MDBox>

          <MDBox width="20%">
            <MDTypography variant="subtitle2">8ab101b6-15e8-433b-b4f7-99eeaa56a77</MDTypography>
            <MDTypography variant="subtitle2">2018-07-18</MDTypography>
            <MDTypography variant="subtitle2">Product 1</MDTypography>
            <MDTypography variant="subtitle2">Addon1, Addon2</MDTypography>
            <MDTypography variant="subtitle2">ACTIVE</MDTypography>
            <MDTypography variant="subtitle2">TRIAL</MDTypography>
            <MDTypography variant="subtitle2">Aug 27, 2023</MDTypography>
            <MDTypography variant="subtitle2">Aug 27, 2023</MDTypography>
          </MDBox>
        </MDBox>
        <MDButton variant="outlined" color="primary" size="small">Cancel Subscription</MDButton>

        <MDBox display="flex" gap={8} mt={10}>
          <MDBox width="50%">
            <MDTypography mb={3} variant="h5" fontWeight="medium">
              Customer
            </MDTypography>
            <MDBox display="flex">
              <MDBox width="50%">
                <MDTypography variant="subtitle2">First name</MDTypography>
                <MDTypography variant="subtitle2">Last name</MDTypography>
                <MDTypography variant="subtitle2">Company</MDTypography>
                <MDTypography variant="subtitle2">Email</MDTypography>
                <MDTypography variant="subtitle2">Phone</MDTypography>
              </MDBox>

              <MDBox width="50%">
                <MDTypography variant="subtitle2">Giacomo</MDTypography>
                <MDTypography variant="subtitle2">Guilizzoni</MDTypography>
                <MDTypography variant="subtitle2">&nbsp; </MDTypography>
                <MDTypography variant="subtitle2">giacomo@gmail.com</MDTypography>
                <MDTypography variant="subtitle2">+40711123123</MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>

          <MDBox width="50%">
            <MDTypography mb={3} variant="h5" fontWeight="medium">
              Billing address
            </MDTypography>
            <MDBox display="flex">
              <MDBox width="50%">
                <MDTypography variant="subtitle2">Address line 1</MDTypography>
                <MDTypography variant="subtitle2">Address line 2</MDTypography>
                <MDTypography variant="subtitle2">City</MDTypography>
                <MDTypography variant="subtitle2">State</MDTypography>
                <MDTypography variant="subtitle2">Postal/Zip code</MDTypography>
                <MDTypography variant="subtitle2">Country</MDTypography>
              </MDBox>

              <MDBox width="50%">
                <MDTypography variant="subtitle2">123 Pine street</MDTypography>
                <MDTypography variant="subtitle2">&nbsp; </MDTypography>
                <MDTypography variant="subtitle2">Bucharest</MDTypography>
                <MDTypography variant="subtitle2">Bucharest</MDTypography>
                <MDTypography variant="subtitle2">014141</MDTypography>
                <MDTypography variant="subtitle2">Romania</MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox mt={10}>
          <MDTypography variant="h4" mb={3}>Transactions</MDTypography>
          <DataTable table={dataTransactions} entriesPerPage={false} showTotalEntries={false} />
        </MDBox>

        <MDBox mt={10}>
          <MDTypography variant="h4" mb={3}>Invoices</MDTypography>
          <DataTable table={dataInvoices} entriesPerPage={false} showTotalEntries={false} />
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
