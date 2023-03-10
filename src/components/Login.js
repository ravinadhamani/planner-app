/* import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };



  return (
    <>
    <div className={styles.mainContainer}>
     <h2 className={styles.userNameLabel}>Activity Tracker App Login</h2><hr/>
      <div className={styles.loginForm}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control className={styles.usernameInput} 
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control className={styles.usernameInput} 
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group><hr/>

          <div className="d-grid gap-2">
            <Button type="Submit" >
              Log In
            </Button>
          </div>
        </Form>
        
        <div className={styles.signupTxt}>
        Don't have an account? <Link to="/signup"><Button className={styles.signupBtn}>Sign up</Button></Link>
      </div>
      
      </div>
      </div>
    </>
  );
};

export default Login; */

/* import React from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { modifyIsLoggedIn } from "../action";

function Login(data) {
  const navigate = useNavigate();

  const AdminLoginStatus = data.data.reducer.LoginStatus;

  useEffect(() => {}, [AdminLoginStatus]);

  const [username, setusername] = useState([]);
  const [password, setpassword] = useState([]);

  function userloginStatus() {
    if (username === password) {
      data.login(true);
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.loginForm}>
          <h3 className={styles.loginText}>Welcome to Dashboard, Login</h3>
          <div className={styles.usernameWrapper}>
            <label htmlFor="input-box1" className={styles.userNameLabel}>
              Username
            </label>
            <input
              className={styles.usernameInput}
              id="input-box1"
              type="text"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>

          <div className={styles.passwordWrapper}>
            <label htmlFor="input-box2" className={styles.passwordLabel}>
              Password
            </label>
            <input
              className={styles.passwordInput}
              id="input-box2"
              type="text"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>

          <div className={styles.btnWrapper}>
            <button
              className={styles.loginBtn}
              onClick={() => {
                userloginStatus();
              }}
            >
              LOGIN
            </button>
            <button className={styles.forgotbtn}>FORGOT YOUR PASSWORD?</button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapstateToProps = (props) => ({
  data: props,
});

const mapDispatchToProps = (dispatch) => ({
  login: (status) => {
    dispatch(modifyIsLoggedIn(status));
  },
});

export default connect(mapstateToProps, mapDispatchToProps)(Login);
 */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/mainpage");
    } catch (err) {
      setError(err.message);
    }
  };

  

  return (
    <>
    <div className={styles.mainContainer}>
     <h2 className={styles.userNameLabel}>Activity Tracker App Login</h2>
      <div className={styles.loginForm}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className={styles.usernameInput} controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className={styles.usernameInput} controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group><hr/>

          <div className="d-grid gap-2">
            <Button type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        
        <div className={styles.signupTxt}>
        Don't have an account? <Link to="/signup" className={styles.signupBtn}><Button>Sign up</Button></Link>
        </div>
      
      </div>
      </div>
    </>
  );
};

export default Login;