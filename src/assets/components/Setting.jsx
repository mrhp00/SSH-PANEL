//IMPORTS
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PinOutlinedIcon from "@mui/icons-material/PinOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

const Setting = () => {
  //STATES AND REFS
  const [currentSettings, setCurrentSettings] = useState({
    id: "1",
    adminuser: "Chris",
    adminpassword: "abcd@1234",
    sshport: "22",
    tgtoken: "Botaklsjd34jkl234nm23",
    tgid: "1231341",
    language: "english",
  });
  const [passField, setPassField] = useState(true);
  const dispatch = useDispatch();

  //EXAMPLE DATA
  const fetchedExample = {
    id: "1",
    adminuser: "Chris",
    adminpassword: "abcd@1234",
    sshport: "22",
    tgtoken: "Botaklsjd34jkl234nm23",
    tgid: "1231341",
    language: "english",
  };

  //FUNCTIONS
  async function setData() {
    const data = await setCurrentSettings(fetchedExample);
  }

  //STARTUP
  useEffect(() => {
    setData();
    dispatch({
      type: "SET_PAGE",
      currentPage: "Setting",
    });
  }, []);

  //RENDER
  return (
    <>
      <Container className="backbone ">
        <Row>
          <Col className="text-center col-12">
            <h4>WELCOME</h4>
            <h5>{currentSettings.adminuser}</h5>
          </Col>
        </Row>

        <Row className="mt-3 mt-lg-4 mt-xl-4 mt-xxl-4">
          <Col className="text-center col-12">
            <TextField
              className="mt-3 d-grid"
              id="input-with-icon-textfield"
              label="Admin User"
              defaultValue={currentSettings.adminuser}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonPinOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Col>
        </Row>
        <Row className="mt-3 mt-lg-4 mt-xl-4 mt-xxl-4">
          <Col className="text-center col-12">
            {passField === true ? (
              <TextField
                className="mt-3 d-grid"
                id="input-with-icon-textfield"
                label="Admin Password"
                defaultValue={currentSettings.adminpassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VisibilityOutlinedIcon
                        className="pointer-cursor "
                        onClick={() => {
                          setPassField(false);
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                type="password"
                variant="standard"
              />
            ) : (
              <TextField
                className="mt-3 d-grid pointer-cursor"
                id="input-with-icon-textfield"
                label="Admin Password"
                defaultValue={currentSettings.adminpassword}
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
        </Row>
        <Row className="mt-3 mt-lg-4 mt-xl-4 mt-xxl-4">
          <Col className="text-center col-12">
            <TextField
              className="mt-3 d-grid"
              id="input-with-icon-textfield"
              label="SSH Port"
              defaultValue={currentSettings.sshport}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PinOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Col>
        </Row>
        <Row className="mt-3 mt-lg-4 mt-xl-4 mt-xxl-4">
          <Col className="text-center col-12">
            <TextField
              className="mt-3 d-grid"
              id="input-with-icon-textfield"
              label="Telegram Bot Token"
              defaultValue={currentSettings.tgtoken}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SmartToyOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Col>
        </Row>
        <Row className="mt-3 mt-lg-4 mt-xl-4 mt-xxl-4">
          <Col className="text-center col-12">
            <TextField
              className="mt-3 d-grid"
              id="input-with-icon-textfield"
              label="Telegram User ID"
              defaultValue={currentSettings.tgid}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AssignmentIndOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Col>
        </Row>
        <Row className="mt-3 mt-lg-4 mt-xl-4 mt-xxl-4">
          <Col className="text-center col-12 d-grid ">
            <Button className="setting-btn">..:: Save Change ::..</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Setting;
