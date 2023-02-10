import React, { useEffect, useState } from "react";
import { Row, Col, Form, Container as div } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AllUser = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [search, setSearch] = useState("");

  const allUsers = useSelector((state) => state.allUsers);
  const generateColorClass = (line) => {
    if (parseInt(line) % 2 !== 0) {
      return "mx-3 mt-2 user-row odd-row-color";
    } else {
      return "mx-3 mt-2 user-row even-row-color";
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filter = fetchedUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.referal.toLowerCase().includes(search.toLowerCase()) ||
      user.mobile.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setFetchedUsers(allUsers);
    dispatch({
      type: "SET_PAGE",
      currentPage: "All Users",
    });
  }, []);

  return (
    <>
      <div>
        {currentPage === "AllUsers" ? (
          <Row className="user-header mx-1 sticky">
            <Col className="col-12 col-lg-6 col-xl-6 col-xxl-6">
              <TextField
                className="d-grid"
                id="outlined-search"
                label="Live Search ...User,Email,Phone,Referal..."
                type="search"
                size="small"
                onChange={handleChange}
              />
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block d-flex align-items-center text-center">
              <Button
                variant="outlined"
                startIcon={<PersonAddAltOutlinedIcon />}
                className="side-btn"
                onClick={() => {
                  nav("/");
                }}
              >
                Add User
              </Button>
            </Col>
          </Row>
        ) : (
          <Row className="user-header mx-1 sticky">
            <Col className="col-12 ">
              <TextField
                className="d-grid"
                id="outlined-search"
                label="Live Search ...User,Email,Phone,Referal..."
                type="search"
                size="small"
                onChange={handleChange}
              />
            </Col>
          </Row>
        )}

        <Row className="user-header mx-3 sticky">
          <Col>User name</Col>
          <Col>Start</Col>
          <Col>Expire</Col>

          <Col className="">Active/Control</Col>
        </Row>
        <div className={props.css}>
          {filter.map((value, key) => (
            <Accordion className={generateColorClass(key)}>
              <AccordionSummary>
                <Col className="d-flex align-items-center justify-content-center">
                  {value.username}
                </Col>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Col className="d-flex align-items-center justify-content-center">
                  {value.startdate}
                </Col>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Col className="d-flex align-items-center justify-content-center">
                  {value.finishdate}
                </Col>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Col className="d-flex align-items-center justify-content-center">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="d-flex align-items-center justify-content-center mx-2"
                  />

                  <ManageAccountsOutlinedIcon className="text-success mx-2" />
                </Col>
              </AccordionSummary>
              <AccordionDetails>
                <Divider variant="middle" />
                <Row>
                  <Col>
                    <p>Number </p>
                    {value.mobile}
                  </Col>
                  <Col>
                    <p>Email</p>
                    {value.email}
                  </Col>
                  <Col>
                    <p>Traffic</p>
                    {value.traffic}
                  </Col>
                  <Col className="d-none d-lg-block d-xl-block d-xxl-block">
                    <p>Remove</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <GroupRemoveOutlinedIcon className="text-danger mx-2" />
                    </div>
                  </Col>
                  <Divider variant="middle d-block d-lg-none d-xl-none d-xxl-none mt-2" />
                  <Col className="d-flex d-lg-none d-xl-none d-xxl-none mt-2 justify-content-around align-items-center">
                    <p className="d-flex align-items-center mt-3">Remove</p>
                    <div className="d-flex align-items-center justify-content-center ">
                      <GroupRemoveOutlinedIcon className="d-flex align-items-center justify-content-center text-danger mx-4" />
                    </div>
                  </Col>
                </Row>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};
export default AllUser;
