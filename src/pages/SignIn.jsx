import React from 'react';
import SignInCard from '../components/signup/SignInCard';
import HeaderSignUp from '../components/signup/HeaderSignUp';
import SignInPassCard from '../components/signup/SignInPassCard';

const SignIn = () => {
  return (
    <div className="flex flex-col bg-[#0A0B0D] py-4 min-h-screen">
      <HeaderSignUp />
      {/* <SignInCard /> */}
      <SignInPassCard />
    </div>
  );
};

export default SignIn;
