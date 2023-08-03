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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

import monoLogoDark from "assets/images/logos/mono_icon_black.png";

function ProfilesList({ title, profiles, shadow }) {
  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox py={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2} border={1} borderRadius="lg">
        <MDBox flexDirection="column" p={0} m={0}>
          <MDTypography variant="h3" fontWeight="medium" textTransform="capitalize">
            Your order
          </MDTypography>
          <MDBox my={5} display="flex" alignItems="items-center" justifyContent="space-between">
            <MDBox display="block">
              <MDTypography variant="subtitle2" fontWeight="medium">
                Plan 1
              </MDTypography>
              <MDTypography variant="caption" color="text">
                12$/Month
              </MDTypography>
            </MDBox>
            <MDTypography variant="body2" fontWeight="medium" textTransform="capitalize">
              <Link href="#" >Edit</Link>
            </MDTypography>
          </MDBox>
          <MDTypography variant="h5" fontWeight="medium" textTransform="capitalize">
            Billing address
          </MDTypography>
          <MDBox mt={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <MDInput mb={4} variant="standard" type="email" label="first name..." fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <MDInput mb={4} variant="standard" type="email" label="last name..." fullWidth />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <MDInput mb={4} variant="standard" type="email" label="address..." fullWidth />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <MDInput mb={4} variant="standard" type="email" label="city..." fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <MDInput mb={4} variant="standard" type="email" label="state..." fullWidth />
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mt={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <MDInput mb={4} variant="standard" type="email" label="country" fullWidth />
              </Grid>
            </Grid>
          </MDBox>
          <MDTypography mt={5} mb={2} variant="h5" fontWeight="medium" textTransform="capitalize">
            Payment method
          </MDTypography>
          <MDBox display="flex" alignItems="center">
            <MDAvatar src={monoLogoDark} alt="something here" shadow="md" />
            <MDTypography ml={1} variant="body2" fontWeight="medium" textTransform="capitalize">
              Arthera wallet
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox mt={4} display="flex" justifyContent="center">
          <MDButton textAlign="center" mt={5} variant="outlined" color="dark">
            Subscribe
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
