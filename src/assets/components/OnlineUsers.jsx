import React, { useEffect, useState } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import PowerOffOutlinedIcon from "@mui/icons-material/PowerOffOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Popover from "react-bootstrap/Popover";

const OnlineUsers = (props) => {
  // STATES AND REFS
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const onlineUsers = useSelector((state) => state.onlineUsers);
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [search, setSearch] = useState("");

  // POP
  const renderTooltip = (props) => (
    <Tooltip id="control-tooltip" {...props}>
      Kick User
    </Tooltip>
  );

  //CLASS
  const generateColorClass = (line) => {
    if (parseInt(line) % 2 !== 0) {
      return "mx-3 mt-3 user-row odd-row-color br-15";
    } else {
      return "mx-3 mt-3 user-row even-row-color br-15";
    }
  };

  //LIVE SEARCH
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filter = fetchedUsers.filter((user) =>
    user.user.toLowerCase().includes(search.toLowerCase())
  );

  // FUNCTIONS
  const createUserList = () => {
    setFetchedUsers(onlineUsers);
  };

  //STARTUP
  useEffect(() => {
    createUserList();
    dispatch({
      type: "SET_PAGE",
      currentPage: "Online Users",
    });
  }, []);

  //RENDER
  return (
    <>
      <div className={props.css}>
        <Row className="user-header mx-1 mt-2 sticky">
          <Col className="col-12 ">
            <TextField
              className="d-grid"
              id="outlined-search"
              label="Search"
              type="search"
              size="small"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="user-header mx-3 sticky mt-2">
          <Col>User name</Col>
          <Col>IP</Col>
          <Col>Disconnect</Col>
        </Row>
        <div className={props.css}>
          {filter.map((value, key) => (
            <Row className={generateColorClass(key)} key={value.id}>
              <Col>{value.user}</Col>
              <Col>{value.ip}</Col>
              <Col>
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <PowerOffOutlinedIcon className="text-danger" />
                </OverlayTrigger>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
};
export default OnlineUsers;
