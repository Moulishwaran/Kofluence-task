import React, { useState } from "react";
import "../styles/register.css";

import registerImg from "../images/register.png";
import userIcon from "../images/user.png";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    age: "",
    address: "",
    gender: "",
    occupation: "",
  });

  const [data, setData] = useState([]);

  console.log(inpval);

  const getData = (e) => {
    // console.log(e.target.value);

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

    const {
      name,
      email,
      password,
      mobileNumber,
      age,
      address,
      gender,
      occupation,
    } = inpval;

    if (name === "") {
      toast.error("name filed is required");
    } else if (email === "") {
      toast.error("email filed is empty");
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email address");
    } else if (password.length < 5) {
      toast.error("password length grater than 5");
    } else if (mobileNumber === "") {
      toast.error("Plz enter mobile number");
    } else if (age === "") {
      toast.error("plz enter your age");
    } else if (address === "") {
      toast.error("Plz enter your address");
    } else if (gender === "") {
      toast.error("plz enter your gender");
    } else if (occupation === "") {
      toast.error("Plz enter your occupation");
    } else {
      toast.success("Register Successfully");

      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
      navigate("/login");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="usericon" />
                </div>
                <h2>Register</h2>
                <Form>
                  <FormGroup>
                    <input
                      type="text"
                      name="name"
                      onChange={getData}
                      placeholder="Username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      name="email"
                      onChange={getData}
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      name="password"
                      onChange={getData}
                      placeholder="Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="number"
                      name="mobileNumber"
                      onChange={getData}
                      placeholder="Mobile Number"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="number"
                      name="age"
                      onChange={getData}
                      placeholder="Age"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      name="address"
                      onChange={getData}
                      placeholder="Address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      name="gender"
                      onChange={getData}
                      placeholder="Gender"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      name="occupation"
                      onChange={getData}
                      placeholder="Occupation"
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    onClick={addData}
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
