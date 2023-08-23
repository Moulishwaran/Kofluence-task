import React, { useState } from "react";
import "../styles/register.css";
import loginImg from "../images/login.png";
import usericon from "../images/user.png";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("useryoutube");

    const { email, password } = inpval;

    if (email === "") {
      toast.error("Email field is required");
    } else if (!email.includes("@")) {
      toast.error("Plz enter valid email");
    } else if (password === "") {
      toast.error("Password Field is required");
    } else if (password.length < 5) {
      toast.error("password length grater 5");
    } else {
      if (getUserArr && getUserArr.length) {
        const userdata = JSON.parse(getUserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          toast.error("invalid detail");
        } else {
          toast.success("Login Successfully");
          localStorage.setItem("user_login", JSON.stringify(getUserArr));
          navigate("/");
        }
      }
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={usericon} alt="" />
                </div>
                <h2>Login</h2>
                <Form>
                  <FormGroup>
                    <input
                      type="email"
                      name="email"
                      onChange={getdata}
                      placeholder="Enter your Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      name="password"
                      onChange={getdata}
                      placeholder="Enter your Password"
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    onClick={addData}
                  >
                    Login
                  </Button>
                </Form>

                <p>
                  Don't have an account? <Link to={"/register"}>Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
