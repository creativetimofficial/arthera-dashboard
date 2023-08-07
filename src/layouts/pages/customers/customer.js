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
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 PRO React components
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import monoLogoDark from "assets/images/logos/mono_icon_black.png";
import visaCard from "assets/images/logos/visa.png";

// Data
import CustomersData from "layouts/pages/customers/data/customersTable";
import dataTransactions from "layouts/pages/customers/data/transactionsTable";
import dataInvoices from "layouts/pages/customers/data/invoicesTable";
import dataCreditNotes from "layouts/pages/customers/data/creditNotesTable";


function OrderList() {
  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={closeMenu}>Status: Paid</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Refunded</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Canceled</MenuItem>
      <Divider sx={{ margin: "0.5rem 0" }} />
      <MenuItem onClick={closeMenu}>
        <MDTypography variant="button" color="error" fontWeight="regular">
          Remove Filter
        </MDTypography>
      </MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDTypography variant="h3" fontWeight="medium">
          Giacomo Guilizzoni
        </MDTypography>

        <MDBox mt={5}>
          <MDBox display="flex" gap={8} mt={3}>
            <MDBox width="20%">
              <MDTypography variant="h4">
                Details
              </MDTypography>
              <MDBox display="block" mt={3}>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="email" label="email..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="first name..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="last name..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="company..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="phone..." fullWidth />
                </MDBox>
                <MDBox mb={4}>
                  <MDInput variant="standard" type="text" label="preferred currency..." fullWidth />
                </MDBox>
                <MDButton variant="outlined" color="primary" size="small">Update</MDButton>
              </MDBox>

            </MDBox>

            <MDBox width="20%">
              <MDTypography variant="h4">
                Billing address
              </MDTypography>
              <MDBox display="block" mt={3}>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="email" label="address line 1..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="address line 2..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="city..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="state..." fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput variant="standard" type="text" label="postal/zip code..." fullWidth />
                </MDBox>
                <MDBox mb={4}>
                  <MDInput variant="standard" type="text" label="country..." fullWidth />
                </MDBox>
                <MDButton variant="outlined" color="primary" size="small">Update</MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>

        <MDBox mt={10}>
          <MDTypography variant="h4" borderBottom={1} pb={2}>Subscriptions</MDTypography>
          <MDBox display="flex" gap={8} mt={3}>
            <MDBox width="20%">
              <MDTypography variant="subtitle2" fontWeight="medium">Bundle ID</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">ID</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">Start Date</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">Product</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">Plan</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">Status</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">Phase</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">Trial ends on</MDTypography>
              <MDTypography variant="subtitle2" fontWeight="medium">Next billing on</MDTypography>
            </MDBox>

            <MDBox width="20%">
              <MDTypography variant="subtitle2">8ab101b6-15e8-433b-b4f7-99eeaa56a77</MDTypography>
              <MDTypography variant="subtitle2">8ab101b6-15e8-433b-b4f7-99eeaa56a77</MDTypography>
              <MDTypography variant="subtitle2">2018-07-18</MDTypography>
              <MDTypography variant="subtitle2">Product 1</MDTypography>
              <MDTypography variant="subtitle2">Product 1 Monthly</MDTypography>
              <MDTypography variant="subtitle2">ACTIVE</MDTypography>
              <MDTypography variant="subtitle2">TRIAL</MDTypography>
              <MDTypography variant="subtitle2">Aug 27, 2023</MDTypography>
              <MDTypography variant="subtitle2">Aug 27, 2023</MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>

        <MDBox mt={10}>
          <MDBox display="flex" alignItems="center" borderBottom={1} pb={2}>
            <MDTypography variant="h4" mr={20}>Payment methods</MDTypography>
            <MDButton variant="outlined" color="primary" size="small">Add</MDButton>
          </MDBox>
          <MDBox mt={3}>
            <MDBox display="flex" alignItems="center" mb={3}>
              <MDAvatar src={monoLogoDark} size="sm" alt="Arthera Logo" />
              <MDTypography ml={1} mr={8} variant="body2" fontWeight="medium">
                Arthera wallet
              </MDTypography>
              <MDButton variant="text" color="primary" size="small">Edit</MDButton>
            </MDBox>
            <MDBox display="flex" alignItems="center">
              <MDAvatar src={visaCard} size="sm" alt="Visa Card" />
              <MDTypography ml={1} mr={8} variant="body2" fontWeight="medium">
                ending in 0744
              </MDTypography>
              <MDButton variant="text" color="primary" size="small">Edit</MDButton>
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

        <MDBox mt={10}>
          <MDTypography variant="h4" mb={3}>Credit notes</MDTypography>
          <DataTable table={dataCreditNotes} entriesPerPage={false} showTotalEntries={false} />
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
