import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [passField, setPassField] = useState(true);
  return (
    <>
      <div>
        <Container className="login-container">
          <Row className="">
            <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-4 " />
            <Col className="login-items col-12 col-lg-4 col-xl-4 col-xxl-4 container-box align-items-center text-center mt-4 ">
              <AdminPanelSettingsOutlinedIcon className="login-items login-toplogo" />
              <p>..:: SSH ADMIN PANEL ::..</p>
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-4" />
          </Row>
          <Row className="">
            <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-2" />
            <Col className="col-12 col-lg-4 col-xl-4 col-xxl-4 container-box align-items-center text-center mt-2 d-grid d-lg-block d-xl-block d-xxl-block login-container2">
              <TextField
                className="login-items mt-4 d-grid"
                id="input-with-icon-textfield"
                label="User Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PortraitOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-2" />
            </Col>
          </Row>
          <Row>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-2" />
            <Col className=" col-12 col-lg-4 col-xl-4 col-xxl-4 container-box align-items-center text-center mt-2 d-grid d-lg-block d-xl-block d-xxl-block login-container2">
              {passField === true ? (
                <TextField
                  className="login-items mt-4 d-grid"
                  id="input-with-icon-textfield"
                  label="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VisibilityOutlinedIcon
                          className="pointer-cursor"
                          onClick={() => {
                            setPassField(false);
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  type="password"
                />
              ) : (
                <TextField
                  className="login-items mt-4 d-grid"
                  id="input-with-icon-textfield"
                  label="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VisibilityOffOutlinedIcon
                          className="pointer-cursor"
                          onClick={() => {
                            setPassField(true);
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              )}
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-2" />
          </Row>
          <Row className="mt-5">
            <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-2" />
            <Col className="d-grid">
              <Button
                onClick={() => {
                  nav("/dashboard");
                }}
              >
                Login
              </Button>
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block col-4 mt-2" />
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Login;
