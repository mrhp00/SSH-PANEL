import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AllUser from "./AllUsers";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [totalUsers, setTotalUsers] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [offenderUsers, setOffenderUsers] = useState(0);

  useEffect(() => {
    dispatch({
      type: "SET_PAGE",
      currentPage: "Dashboard",
    });
  }, []);
  return (
    <>
      <div className="backbone ">
        <Container>
          <Row>
            <Col className="col-12 col-lg-3 col-xl-3 col-xxl-3">
              <Card bg="light" className="text-center">
                <Card.Header>All Users</Card.Header>
                <Card.Body>
                  <h3>{totalUsers}</h3>
                </Card.Body>
                <Card.Footer className="d-none d-lg-block d-xl-block d-xxl-block">
                  <Link to={"/AllUsers"}>View</Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-3 mt-lg-0 mt-xl-0 mt-xxl-0">
              <Card bg="info" className="text-center">
                <Card.Header>Online Users</Card.Header>
                <Card.Body>
                  <h3>{onlineUsers}</h3>
                </Card.Body>
                <Card.Footer className="d-none d-lg-block d-xl-block d-xxl-block">
                  <Link to={"/OnlineUsers"}>View</Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-3 mt-lg-0 mt-xl-0 mt-xxl-0">
              <Card bg="success" className="text-center">
                <Card.Header>Active Users</Card.Header>
                <Card.Body>
                  <h3>{activeUsers}</h3>
                </Card.Body>
                <Card.Footer className="d-none d-lg-block d-xl-block d-xxl-block">
                  <Link to={"/ActiveUsers"}>View</Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="col-12 col-lg-3 col-xl-3 col-xxl-3 mt-3 mt-lg-0 mt-xl-0 mt-xxl-0">
              <Card bg="danger" className="text-center">
                <Card.Header>Offenders</Card.Header>
                <Card.Body>
                  <h3>{offenderUsers}</h3>
                </Card.Body>
                <Card.Footer className="d-none d-lg-block d-xl-block d-xxl-block">
                  <Link to={"/OffenderUsers"}>View</Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row className="mt-3 d-none d-lg-block d-xl-block d-xxl-block">
            <AllUser css="custom-scrollbars__content user-container2" />
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Dashboard;
