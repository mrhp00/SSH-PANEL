import React, { useState } from "react";
import { Row, Col, Offcanvas } from "react-bootstrap";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import TuneIcon from "@mui/icons-material/Tune";
import InfoIcon from "@mui/icons-material/Info";
import SensorOccupiedOutlinedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // STATES AND MODULES
  const nav = useNavigate();
  const currentPage = useSelector((state) => state.currentPage);

  // MENU SHOW/HIDE
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // MAIN SECTION
  return (
    <>
      <div className="d-flex header-bar align-items-center ">
        <Col>
          <MenuOutlinedIcon
            className="d-lg-none d-xl-none d-xxl-none menu-icon mx-4"
            onClick={handleShow}
          />
        </Col>
        <Col className="d-flex align-items-center justify-content-center ">
          <p className="mt-3">{currentPage}</p>
        </Col>

        <Col className="d-flex  align-items-center justify-content-end mx-4">
          {currentPage==="All Users"?<PersonAddAltOutlinedIcon className="menu-nav mx-2" />:null}
          
          <SettingsOutlinedIcon className="menu-nav mx-2" />
        </Col>

        {/* CANVAS */}

        <Offcanvas show={show} onHide={handleClose} className="backbone">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>SSH PANEL</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Col>
              <Row className="mt-5 d-flex align-items-center justify-content-center">
                <Button
                  variant="outlined"
                  startIcon={<DashboardIcon />}
                  className="side-btn"
                  onClick={() => {
                    nav("/");
                    handleClose();
                  }}
                >
                  Dashboard
                </Button>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                <Button
                  variant="outlined"
                  startIcon={<BadgeOutlinedIcon />}
                  className="side-btn"
                  onClick={() => {
                    nav("/AllUsers");
                    handleClose();
                  }}
                >
                  Users
                </Button>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                <Button
                  variant="outlined"
                  startIcon={<ContactPhoneIcon />}
                  className="side-btn"
                  onClick={() => {
                    nav("/OnlineUsers");
                    handleClose();
                  }}
                >
                  Online Users
                </Button>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                <Button
                  variant="outlined"
                  startIcon={<SensorOccupiedOutlinedIcon />}
                  className="side-btn"
                  onClick={() => {
                    nav("/ActiveUsers");
                    handleClose();
                  }}
                >
                  Active Users
                </Button>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                <Button
                  variant="outlined"
                  startIcon={<TuneIcon />}
                  className="side-btn"
                >
                  Setting
                </Button>
              </Row>
              <Row className="mt-4 d-flex align-items-center justify-content-center">
                <Button
                  variant="outlined"
                  startIcon={<InfoIcon />}
                  className="side-btn"
                >
                  Help
                </Button>
              </Row>
            </Col>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};
export default Header;
