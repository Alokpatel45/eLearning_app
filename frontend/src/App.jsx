import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Header from "./components/header/Header";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Verify from "./pages/Auth/Verify";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loding/Loading";
import Courses from "./pages/courses/Courses";
import CourseDescription from "./pages/courseDescription/CourseDescription";
// import Courses from "./pages/courses/Courses";
const App = () => {
  const { isAuth, user, loading } = UserData();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Header isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            ></Route>
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route
              path="/course/:id"
              element={
                isAuth ? (
                  <CourseDescription user={user}></CourseDescription>
                ) : (
                  <Login></Login>
                )
              }
            ></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      )}
    </>
  );
};

export default App;
