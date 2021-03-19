import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import { Buttons, SignInContainer } from './sign-in.styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const [emailAandPassword, setEmailAndPassword] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart(emailAandPassword));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setEmailAndPassword({ ...emailAandPassword, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={emailAandPassword.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={emailAandPassword.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <Buttons>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
