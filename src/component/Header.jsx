import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/header.css";
import logo from "../images/logo.png";
import { Button, Container, NavLink, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [logindata, setLoginData] = useState([]);
  const Details = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      //console.log(user);
      setLoginData(user);
    }
  };
  const userlogout = () => {
    localStorage.removeItem("user_login");
    toast.success("Logout Successfull");
    navigate("/login");
  };
  useEffect(() => {
    Details();
  }, []);

  return (
    <header>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/*======logo start ========*/}

            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/*======logo End ========*/}

            {/*======menu start======== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/*======menu end======== */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {logindata ? (
                  <>
                    <Button className="btn btn-dark" onClick={userlogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Regsiter</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
