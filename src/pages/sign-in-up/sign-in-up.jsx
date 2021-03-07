import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { SignInUpContainer } from './sign-in-up.styles';

const SignInUpPage = () => (
  <SignInUpContainer>
    <SignIn />
    <SignUp />
  </SignInUpContainer>
);

export default SignInUpPage;