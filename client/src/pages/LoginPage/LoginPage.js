import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory, useLocation } from "react-router-dom";
import "./loginPage.css";
import backgroundImage from "../../assets/img/browncloset2crop2.jpg";

import { githubSignInStart } from "../../redux/user/userActions";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import LoginCard from "../../components/LoginCard/LoginCard";
import { Container, Col, Row } from "react-bootstrap";

const LoginPage = ({ currentUser, githubSignInStart }) => {
  const history = useHistory();
  const { search } = useLocation();
  if (currentUser) history.push("/");
  const params = new URLSearchParams(search);
  const code = params.get("code");
  const authState = params.get("state");

  useEffect(() => {
    if (code) {
      if (!authState === sessionStorage.getItem("authState")) {
        return console.warn("Auth state does not match.");
      }
      githubSignInStart(code);
    }
  }, [authState, code, githubSignInStart]);

  return (
    // <Container fluid="md">
    //   <Row>
    //     <Col>
    //       <main
    //         style={{
    //           backgroundImage: `url(${backgroundImage})`,

    //           height: "630px",
    //         }}
    //         data-test="page-login"
    //         className="login-page"
    //       ></main>
    //     </Col>
    //     <Col className="text-right">
    //       <LoginCard />
    //     </Col>
    //   </Row>
    // </Container>
    <Container
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "630px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row>
        <Col md={7}>
          <main></main>
        </Col>
        <Col>
          <LoginCard />
        </Col>
      </Row>
    </Container>
  );
};

LoginPage.propTypes = {
  currentUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  githubSignInStart: (code) => dispatch(githubSignInStart(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
