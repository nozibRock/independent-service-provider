import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { Col, Container, Row } from "react-bootstrap";
const Register = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/home");
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two passwords did not match!!");
      return;
    }
    // if (password.length<6) {
    //     setError('Your password must be at least 6 characters or more')
    //     return;
    // }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <Container fluid className=" mt-5">
      <Row>
        <Col
          md={12}
          lg={6}
          className="mt-5 mt-lg-5 p-3 p-lg-5 bg-light mx-auto"
        >
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="fw-bold ms-lg-4">Sign Up</h2>
          </div>
          <h6 className="mb-5 ms-lg-4">
            Sign up and get one time free service.
          </h6>
          {/* Sign Up With Email Form */}
          <form onSubmit={handleCreateUser} className="mt-3 mt-lg-4">
            <div>
              <label htmlFor="email" className="fw-bold">
                Email
              </label>
              <input
                placeholder="example@email.com"
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id=""
                required
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="password" className="fw-bold">
                Password
              </label>
              <input
                className="input-field"
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="fw-bold">
                Confirm Password
              </label>
              <input
                className="input-field"
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <div>
              <input
                className="btn-signInMethod signup-submit"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
          <div className="form_text">
            <p>
              Already have an account?{" "}
              <Link className="form_link" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="divider">
            <div className="divider_line"></div>
            <p>or</p>
            <div className="divider_line"></div>
          </div>
          <div>
            <button className="btn-signInMethod fw-bold">
              <FcGoogle></FcGoogle> Continue with Google
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
