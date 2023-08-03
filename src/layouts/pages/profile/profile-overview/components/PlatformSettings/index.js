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
import Link from "@mui/material/Link";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

function PlatformSettings() {
  const [legalInfo, setLegalInfo] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [customTitle, setCustomTitle] = useState(true);
  const [autocomplete, setAutocomplete] = useState(false);
  const [allowCoupons, setAllowCoupons] = useState(false);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Show legal information
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch checked={legalInfo} onChange={() => setLegalInfo(!legalInfo)} />
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Show you logo
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch checked={showLogo} onChange={() => setShowLogo(!showLogo)} />
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Custom title
            </MDTypography>
          </MDBox>
          <MDBox my={0.5}>
            <Switch checked={customTitle} onChange={() => setCustomTitle(!customTitle)} />
          </MDBox>
        </MDBox>
        <MDInput mb={4} variant="standard" type="email" label="checkout title..." />

        <MDBox display="flex" alignItems="center" mt={3} mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Autocomplete address
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch checked={autocomplete} onChange={() => setAutocomplete(!autocomplete)} />
          </MDBox>
        </MDBox>
        <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
          <MDBox width="80%" ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Allow use of Coupons
            </MDTypography>
          </MDBox>
          <MDBox mt={0.5}>
            <Switch checked={allowCoupons} onChange={() => setAllowCoupons(!allowCoupons)} />
          </MDBox>
        </MDBox>
        <MDBox ml={-1.5}>
          <MDBox width="80%" mb={2} ml={0.5}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              Checkout widget link:
            </MDTypography>
          </MDBox>
          <Link ml={.5} to="#" variant="body2">https://company-test.arthera.net/checkout</Link>
        </MDBox>
        <MDBox mt={4} ml={-1.5}>
          <MDButton mt={5} variant="outlined" color="info">
            Save
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
