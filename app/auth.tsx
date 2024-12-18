import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../lib/firebaseConfig";
import { GithubAuthProvider } from "firebase/auth";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [GithubAuthProvider.PROVIDER_ID],
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default SignIn;
