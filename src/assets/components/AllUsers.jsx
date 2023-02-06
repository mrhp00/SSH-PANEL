import React, { useEffect, useState } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
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

  let allUsers = [
    {
      id: 0,
      username: "mike",
      password: "12345",
      email: "abcd123456@email.com",
      mobile: "09999999999",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 1,
      username: "ben",
      password: "12345",
      email: "pqweoi37@email.com",
      mobile: "99632165843",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 2,
      username: "sara",
      password: "12345",
      email: "asdaipoi7@email.com",
      mobile: "11299300332",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 3,
      username: "dan",
      password: "12345",
      email: "asdas2348@email.com",
      mobile: "00199633205",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 4,
      username: "brat",
      password: "12345",
      email: "ewrt43@email.com",
      mobile: "11299633249",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 5,
      username: "brittney",
      password: "12345",
      email: "asdret546@email.com",
      mobile: "11299300256",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 6,
      username: "peter",
      password: "12345",
      email: "tydaa234@email.com",
      mobile: "11245963215",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 7,
      username: "brayan",
      password: "12345",
      email: "asdasd12@email.com",
      mobile: "55214596328",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 8,
      username: "stowie",
      password: "12345",
      email: "dfhbnA876@email.com",
      mobile: "77266482384",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 9,
      username: "lola",
      password: "12345",
      email: "qpwi23894@email.com",
      mobile: "77362625264",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 10,
      username: "griffen",
      password: "12345",
      email: "sjkldfnskld@email.com",
      mobile: "99847564711",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 11,
      username: "hawk",
      password: "12345",
      email: "sjdhfda7645@email.com",
      mobile: "83766594098",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 12,
      username: "tom",
      password: "12345",
      email: "kjdfhzxm87@email.com",
      mobile: "73635244234",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 13,
      username: "eddie",
      password: "12345",
      email: "iouvjn78345@email.com",
      mobile: "77354673645",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 14,
      username: "susan",
      password: "12345",
      email: "pijnvg892374@email.com",
      mobile: "93837254756",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 15,
      username: "jim",
      password: "12345",
      email: "askjm2348@email.com",
      mobile: "93726547388",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 16,
      username: "jennifer",
      password: "12345",
      email: "oijxc182@email.com",
      mobile: "90238472442",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 17,
      username: "emy",
      password: "12345",
      email: "mnzxcx123@email.com",
      mobile: "27264960384",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 18,
      username: "tim",
      password: "12345",
      email: "928374jkash@email.com",
      mobile: "72691847362",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
    {
      id: 19,
      username: "kate",
      password: "12345",
      email: "iouwqe7342@email.com",
      mobile: "82765194736",
      referal: "mr.john doe",
      multiuser: true,
      startdate: "1401/11/15",
      finishdate: "1401/12/15",
      enable: true,
      traffic: 50,
    },
  ];
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
      currentPage: "AllUsers",
    });
  }, []);

  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};
export default AllUser;
