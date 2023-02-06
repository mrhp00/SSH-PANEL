import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./assets/components/Dashboard";
import Header from "./assets/components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SideBar from "./assets/components/SideBar";
import AllUser from "./assets/components/AllUsers";

const App = () => {
  return (
    <>
      <div dir="ltr" className="backbone">
        <Row className="g-0">
          <Col className="col-2 d-none d-lg-block d-xl-block d-xxl-block side-bar">
            <SideBar />
          </Col>
          <Col className="col-12 col-lg-10 col-xl-10 col-xxl-10">
            <Row className="d-lg-none d-xl-none d-xxl-none">
              <Header />
            </Row>
            <Row>
              <Container className="mt-3">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route
                    path="/AllUsers"
                    element={
                      <AllUser css="custom-scrollbars__content user-container" />
                    }
                  />
                </Routes>
              </Container>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default App;
