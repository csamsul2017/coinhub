import { useState } from 'react';
import HeaderSignUp from '../components/signup/HeaderSignUp';
import RegistrationCard from '../components/signup/RegistrationCard';
import VerifyEmailCard from '../components/signup/VerifyEmailCard';
import CreatePasswordCard from '../components/signup/CreatePasswordCard';
import VerifyPhoneNumberCard from '../components/signup/VerifyPhoneNumberCard';
import UserIdentityCard from '../components/signup/UserIdentityCard';
import ForgetPassCard from '../components/signup/ForgetPassCard';
import { registerService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    const username = `user-${Date.now()}`;
    const payload = { username, password, phoneNumber };
    try {
      await registerService(payload);
      useNavigate('/signin');
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0B0D] py-4 min-h-screen">
      <HeaderSignUp />
      {step === 1 && <RegistrationCard onNext={() => setStep(2)} email={email} setEmail={setEmail} />}
      {step === 2 && <VerifyEmailCard email={email} onBack={() => setStep(1)} onNext={() => setStep(3)} setEmailOtp={setEmailOtp} emailOtp={emailOtp} />}
      {step === 3 && <CreatePasswordCard password={password} setPassword={setPassword} onNext={() => setStep(4)} />}
      {step === 4 && <VerifyPhoneNumberCard phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} onNext={handleRegister} isLoading={isLoading} />}
      {/* {step === 5 && <UserIdentityCard firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />} */}
      {step === 6 && <ForgetPassCard />}
    </div>
  );
};

export default SignUp;
