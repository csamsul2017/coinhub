import { useState } from 'react';
import SignInCard from '../components/signup/SignInCard';
import HeaderSignUp from '../components/signup/HeaderSignUp';
import SignInPassCard from '../components/signup/SignInPassCard';

const SignIn = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col bg-[#0A0B0D] py-4 min-h-screen">
      <HeaderSignUp />
      {step === 1 && <SignInCard />}
      {step === 2 && <SignInPassCard />}
    </div>
  );
};

export default SignIn;
