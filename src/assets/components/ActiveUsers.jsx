import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import PowerOffOutlinedIcon from "@mui/icons-material/PowerOffOutlined";
import MobiledataOffOutlinedIcon from '@mui/icons-material/MobiledataOffOutlined';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ActiveUsers = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [search, setSearch] = useState("");

  const renderTooltip = (props) => (
    <Tooltip id="control-tooltip" {...props}>
      Deactivate
    </Tooltip>
  );

  const allUsers = useSelector((state) => state.allUsers);
  const generateColorClass = (line) => {
    if (parseInt(line) % 2 !== 0) {
      return "mx-3 mt-3 user-row odd-row-color br-15";
    } else {
      return "mx-3 mt-3 user-row even-row-color br-15";
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

  const createUserList = () => {
    let onlineUsers = [];
    allUsers.map((value) => {
      if (value.enable === true) {
        onlineUsers.push({
          id: value.id,
          username: value.username,
          email: value.email,
          mobile: value.mobile,
          referal: value.referal,
          startdate: value.startdate,
          finishdate: value.finishdate,
        });
      }
    });
    console.log(onlineUsers);
    return onlineUsers;
  };

  useEffect(() => {
    setFetchedUsers(createUserList());
    dispatch({
      type: "SET_PAGE",
      currentPage: "Active Users",
    });
  }, []);

  return (
    <>
      <div className={props.css}>
        <Row className="user-header mx-1 mt-2 sticky">
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

        <Row className="user-header mx-3 sticky">
          <Col>User name</Col>
          <Col>Referal</Col>
          <Col>Deactivate</Col>
        </Row>
        <div className={props.css}>
          {filter.map((value, key) => (
            <Row className={generateColorClass(key)}>
              <Col>{value.username}</Col>
              <Col>{value.referal}</Col>
              <Col>
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <MobiledataOffOutlinedIcon className="text-dark" />
                </OverlayTrigger>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
};
export default ActiveUsers;
