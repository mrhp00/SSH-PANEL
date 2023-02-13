//IMPORTS
import React, { useState } from "react";
import { Row, Col, Offcanvas, Modal } from "react-bootstrap";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import TuneIcon from "@mui/icons-material/Tune";
import InfoIcon from "@mui/icons-material/Info";
import SensorOccupiedOutlinedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import InputAdornment from "@mui/material/InputAdornment";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PhonelinkRingOutlinedIcon from "@mui/icons-material/PhonelinkRingOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";

const Header = () => {
  // STATES AND MODULES
  const nav = useNavigate();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const userModal = useSelector((state) => state.addUserModal);
  const [passField, setPassField] = useState(true);
  const [dateValue, setDateValue] = React.useState(dayjs());

  //FUNCTIONS
  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const handleMOpen = () => {
    dispatch({
      type: "SET_USERMODAL",
      modalstate: true,
    });
  };
  const handleMClose = () => {
    dispatch({
      type: "SET_USERMODAL",
      modalstate: false,
    });
  };

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
          {currentPage === "All Users" ? (
            <PersonAddAltOutlinedIcon
              className="menu-nav mx-2"
              onClick={() => {
                handleMOpen();
              }}
            />
          ) : null}

          <SettingsOutlinedIcon
            className="menu-nav mx-2"
            onClick={() => {
              nav("/Setting");
              handleClose();
            }}
          />
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
                    nav("/dashboard");
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
                  onClick={() => {
                    nav("/Setting");
                    handleClose();
                  }}
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
        <Modal
          show={userModal}
          onHide={handleMClose}
          backdrop="static"
          keyboard={true}
          contentClassName="user-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new SSH user ...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col className="col-12">
                <TextField
                  className="mt-3 d-grid"
                  id="input-with-icon-textfield"
                  label="User name"
                  defaultValue=""
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
            <Row>
              <Col className="col-12">
                {passField === true ? (
                  <TextField
                    className="mt-3 d-grid"
                    id="input-with-icon-textfield"
                    label="Password"
                    defaultValue=""
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
                    label="Password"
                    defaultValue=""
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
            <Row>
              <Col className="col-12">
                <TextField
                  className="mt-3 d-grid pointer-cursor"
                  id="input-with-icon-textfield"
                  label="Mobile"
                  defaultValue=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhonelinkRingOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <TextField
                  className="mt-3 d-grid pointer-cursor"
                  id="input-with-icon-textfield"
                  label="Email"
                  defaultValue=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <TextField
                  className="mt-3 d-grid pointer-cursor"
                  id="input-with-icon-textfield"
                  label="Referal"
                  defaultValue=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Diversity3OutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Expire date"
                    className="mt-3 d-none d-lg-grid d-xl-grid d-xxl-grid"
                    inputFormat="MM/DD/YYYY"
                    value={dateValue}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField {...params} variant="standard" />
                    )}
                    variant="standard"
                  />
                  <MobileDatePicker
                    label="Expire date"
                    className="mt-3 d-grid d-lg-none d-xl-none d-xxl-none"
                    inputFormat="MM/DD/YYYY"
                    value={dateValue}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField {...params} variant="standard" />
                    )}
                    variant="standard"
                  />
                </LocalizationProvider>
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <TextField
                  className="mt-3 d-grid pointer-cursor"
                  id="input-with-icon-textfield"
                  label="Multi user count"
                  defaultValue=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SwitchAccountOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  type={"number"}
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <TextField
                  className="mt-3 d-grid pointer-cursor"
                  id="input-with-icon-textfield"
                  label="Bandwidth"
                  defaultValue=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HourglassTopOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  type={"number"}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleMClose}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default Header;
