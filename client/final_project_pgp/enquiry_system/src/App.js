import React, { useState } from "react";
import Home from "./MyComponents/Home";
import AboutUs from "./MyComponents/AboutUs";
import ContactUs from "./MyComponents/ContactUs";
import Query from "./MyComponents/Query";
import Allcourses from "./MyComponents/Allcourses";
import AddCourse from "./MyComponents/AddCourse";
import Menus from "./MyComponents/Menus";
import Header from "./MyComponents/Header";
import Admin from "./MyComponents/Admin";
import Register from "./MyComponents/Register";
import CoursesOffered from "./MyComponents/CoursesOffered";
import Gallery from "./MyComponents/Gallery";
import SingleCourse from "./MyComponents/SingleCourse";
import Photo from "./MyComponents/Photo";
import FollowUp from "./MyComponents/FollowUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Row, Col, Container } from "reactstrap";
import AddBatch from "./MyComponents/AddBatch";

function App() {
  if (localStorage.getItem("adminLoggedIn") == null) {
    localStorage.setItem("adminLoggedIn", "false");
  }
  const [adminLoggedIn, setAdminLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn")
  );

  return (
    <>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus
                adminLoggedIn={adminLoggedIn}
                setAdminLoggedIn={setAdminLoggedIn}
              />
            </Col>
            <Col md={8}>
              <Routes>
                <Route exact path="/" element={<Home />} />

                <Route
                  exact
                  path="/courses-offered"
                  element={<CoursesOffered />}
                />

                <Route exact path="/add-courses" element={<AddCourse />} />

                <Route
                  exact
                  path="/view-all-courses"
                  element={<Allcourses />}
                />

                <Route exact path="/singlecourse">
                  <Route
                    path=":id"
                    element={<SingleCourse adminLoggedIn={adminLoggedIn} />}>
                 </Route>
                </Route>

                <Route exact path="/queries" element={<Query />} />
                <Route exact path="/follow-up" element={<FollowUp />} />

                <Route exact path="/add-batches">
                <Route path=":course" element={<AddBatch />} />
                </Route>

                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/aboutus" element={<AboutUs />} />

                <Route exact path="/contactus" element={<ContactUs />} />
                <Route
                  exact
                  path="/admin"
                  element={<Admin setAdminLoggedIn={setAdminLoggedIn} />}
                />

                <Route exact path="/register" element={<Register />} />

                <Route path="/album">
                  <Route path=":id">
                    <Route
                      path=":name"
                      element={<Photo adminLoggedIn={adminLoggedIn} />}
                    ></Route>
                  </Route>
                </Route>
                
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
