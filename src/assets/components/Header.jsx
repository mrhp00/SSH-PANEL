import React from "react";
import { Row, Col } from "react-bootstrap";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Header = () => {
  return (
    <>
      <div className="d-flex header-bar align-items-center ">
        <Col>
          <MenuOutlinedIcon className="d-lg-none d-xl-none d-xxl-none menu-icon mx-4" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <p className="mt-3">SSH Panel</p>
        </Col>

        <Col className="d-flex  align-items-center justify-content-end mx-4">
          <PersonAddAltOutlinedIcon className="menu-nav mx-2" />
          <SettingsOutlinedIcon className="menu-nav mx-2" />
        </Col>
      </div>
    </>
  );
};
export default Header;
