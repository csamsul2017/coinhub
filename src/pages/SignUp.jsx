import { useState } from 'react';
import HeaderSignUp from '../components/signup/HeaderSignUp';
import RegistrationCard from '../components/signup/RegistrationCard';
import VerifyEmailCard from '../components/signup/VerifyEmailCard';
import CreatePasswordCard from '../components/signup/CreatePasswordCard';
import VerifyPhoneNumberCard from '../components/signup/VerifyPhoneNumberCard';
import UserIdentityCard from '../components/signup/UserIdentityCard';
import ForgetPassCard from '../components/signup/ForgetPassCard';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <div className="bg-[#0A0B0D] py-4 min-h-screen">
      <HeaderSignUp />
      {step === 1 && <RegistrationCard onNext={() => setStep(2)} setEmail={setEmail} />}
      {step === 2 && <VerifyEmailCard email={email} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
      {step === 3 && <CreatePasswordCard />}
      {/* <VerifyPhoneNumberCard /> */}

      {/* <UserIdentityCard /> */}
      {/* <ForgetPassCard /> */}
    </div>
  );
};

export default SignUp;
