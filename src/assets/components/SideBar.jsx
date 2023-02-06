import React from "react";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import TuneIcon from "@mui/icons-material/Tune";
import InfoIcon from "@mui/icons-material/Info";
import { Col, Container, Image, Row } from "react-bootstrap";
import ssh from "../images/ssh.png";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="sidebar">
        <Container>
          <Col>
            <Row className="mt-2">
              <Image className="side-logo" src={ssh} />
            </Row>
            <Row className="mt-5 d-flex align-items-center justify-content-center">
              <Button
                variant="outlined"
                startIcon={<DashboardIcon />}
                className="side-btn"
                onClick={() => {
                  nav("/");
                }}
              >
                Home
              </Button>
            </Row>
            <Row className="mt-2 d-flex align-items-center justify-content-center">
              <Button
                variant="outlined"
                startIcon={<ContactPhoneIcon />}
                className="side-btn"
              >
                Online
              </Button>
            </Row>
            <Row className="mt-2 d-flex align-items-center justify-content-center">
              <Button
                variant="outlined"
                startIcon={<TuneIcon />}
                className="side-btn"
              >
                Setting
              </Button>
            </Row>
            <Row className="mt-2 d-flex align-items-center justify-content-center">
              <Button
                variant="outlined"
                startIcon={<InfoIcon />}
                className="side-btn"
              >
                Help
              </Button>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
};
export default SideBar;
