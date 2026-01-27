import { useState } from 'react';
import HeaderSignUp from '../components/signup/HeaderSignUp';
import RegistrationCard from '../components/signup/RegistrationCard';
import VerifyEmailCard from '../components/signup/VerifyEmailCard';
import CreatePasswordCard from '../components/signup/CreatePasswordCard';
import VerifyPhoneNumberCard from '../components/signup/VerifyPhoneNumberCard';
import UserIdentityCard from '../components/signup/UserIdentityCard';
import ForgetPassCard from '../components/signup/ForgetPassCard';

const SignUp = () => {
  const [step, setStep] = useState(5);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="bg-[#0A0B0D] py-4 min-h-screen">
      <HeaderSignUp />
      {step === 1 && <RegistrationCard onNext={() => setStep(2)} setEmail={setEmail} />}
      {step === 2 && <VerifyEmailCard email={email} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
      {step === 3 && <CreatePasswordCard password={password} setPassword={setPassword} />}
      {step === 4 && <VerifyPhoneNumberCard phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />}
      {step === 5 && <UserIdentityCard firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />}
      {/* <ForgetPassCard /> */}
    </div>
  );
};

export default SignUp;
