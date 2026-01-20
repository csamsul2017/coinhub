import React from 'react';
import HeaderSignUp from '../components/signup/HeaderSignUp';
import RegistrationCard from '../components/signup/RegistrationCard';
import VerifyEmailCard from '../components/signup/VerifyEmailCard';
import CreatePasswordCard from '../components/signup/CreatePasswordCard';
import VerifyPhoneNumberCard from '../components/signup/VerifyPhoneNumberCard';
import UserIdentityCard from '../components/signup/UserIdentityCard';
import ForgetPassCard from '../components/signup/ForgetPassCard';

const SignUp = () => {
  return (
    <div className="bg-[#0A0B0D] py-4 min-h-screen">
      <HeaderSignUp />
      {/* <RegistrationCard /> */}

      {/* <VerifyEmailCard /> */}
      {/* <CreatePasswordCard /> */}
      <VerifyPhoneNumberCard />

      {/* <UserIdentityCard /> */}
      {/* <ForgetPassCard /> */}
    </div>
  );
};

export default SignUp;
