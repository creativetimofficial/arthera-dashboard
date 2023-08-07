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

// @mui material components
import Card from "@mui/material/Card";


// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Analytics() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography variant="h3" fontWeight="medium">
          Welcome Flavius
        </MDTypography>
        <MDTypography variant="p" fontWeight="normal">
          Let's get you set up quickly.
        </MDTypography>

        <MDBox border={1} borderRadius="lg" mt={5} p={5}>
          <MDTypography mb={4} variant="h5" fontWeight="medium">
            Set up your subscription Business
          </MDTypography>
          <MDBox>
            <MDTypography mb={2} variant="h4">
              1. Set up your subscription entity
            </MDTypography>
            <MDTypography ml={3} variant="subtitle2" fontWeight="normal">
              Setup the desired merchant name and address on invoices sent to your customers, and ensure the correct address is used to calculate taxes for each transaction when taxes are enabled on your. Complete street address, city, and ZIP/postal code for the first step to be complete.
            </MDTypography>
            <MDBox display="flex" gap={2} mt={3} ml={3}>
              <MDButton variant="gradient" color="primary">
                Create Entity >
              </MDButton>
              <MDButton variant="outlined" color="primary">
                Mark Complete
              </MDButton>
            </MDBox>
          </MDBox>
          <MDBox mt={5}>
            <MDTypography mb={2} variant="h4">
              2. Create your first plan
            </MDTypography>
            <MDTypography ml={3} variant="subtitle2" fontWeight="normal">
              Plans are the different subscription options that you offer to customers. These can include different prices, features, and different billing periods, such as monthly or annual.
            </MDTypography>
            <MDBox display="flex" gap={2} mt={3} ml={3}>
              <MDButton variant="gradient" color="primary">
                Create Plan >
              </MDButton>
              <MDButton variant="outlined" color="primary">
                Mark Complete
              </MDButton>
            </MDBox>
          </MDBox>

          <MDBox mt={5}>
            <MDTypography mb={2} variant="h4">
              3. Setup payment methods
            </MDTypography>
            <MDTypography ml={3} variant="subtitle2" fontWeight="normal">
              Connect a gateway to enable and test the payment methods you'd like to offer customers at checkout. Choose any of our preferred partners to get started:
            </MDTypography>
            <MDBox display="flex" gap={2} mt={3} ml={3}>
              <MDBox p={4} border={1} width="20%" borderRadius="lg">
                <MDTypography variant="h4">
                  Stripe
                </MDTypography>
                <MDTypography mb={0} variant="subtitle2" fontWeight="normal">
                  Accept payments in FIAT currencies
                </MDTypography>
              </MDBox>
              <MDBox p={4} border={1} width="20%" borderRadius="lg">
                <MDTypography variant="h4">
                  Arthera
                </MDTypography>
                <MDTypography variant="subtitle2" fontWeight="normal">
                  Accept payments in AA
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        
          <MDBox mt={5}>
            <MDTypography mb={2} variant="h4">
              4. Add checkout to your website
            </MDTypography>
            <MDTypography ml={3} variant="subtitle2" fontWeight="normal">
              Help customers sign up with ease. Connect Arther's secure checkout widget with a no-code or a low code set-up.
            </MDTypography>
            <MDBox display="flex" gap={2} mt={3} ml={3}>
              <MDButton variant="gradient" color="primary">
                Connect Checkout >
              </MDButton>
              <MDButton variant="outlined" color="primary">
                Mark Complete
              </MDButton>
            </MDBox>
          </MDBox>

          <MDBox mt={5}>
            <MDTypography mb={2} variant="h4">
              5. Go LIVE !
            </MDTypography>
            <MDTypography ml={3} mb={3} variant="subtitle2" fontWeight="normal">
              Your LIVE site is where your real customers exist and you can accept payments. Once you go live, we will help you set up to start accepting subscription payments.
            </MDTypography>
            <MDBox mt={3} ml={3}>
              <MDButton variant="gradient" color="primary">
                Go live!
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
