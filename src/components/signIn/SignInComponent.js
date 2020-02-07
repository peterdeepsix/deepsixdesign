import React from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from 'src/services/auth';
import SignInGoogle from './SignInGoogle';

const SignInComponent = () => {
  if (isLoggedIn()) {
    navigate(`/app/account`);
  }
  return (
    <>
      <SignInGoogle />
    </>
  );
};
export default SignInComponent;
