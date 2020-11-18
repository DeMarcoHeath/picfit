import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/userSelectors";

import signupImage from "../../assets/img/brownwalkin.jpg";

import SignUpCard from "../../components/SignUpCard/SignUpCard";

const SignUpPage = ({ currentUser }) => {
  const history = useHistory();
  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser, history]);
  return (
    <main
      style={{
        backgroundImage: `url(${signupImage})`,
        width: "100%",
        height: "650px",
      }}
      className="sign-up-page"
    >
      <SignUpCard />
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignUpPage);
