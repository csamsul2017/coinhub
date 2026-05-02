import { useState } from 'react';
import SignInCard from '../components/signup/SignInCard';
import HeaderSignUp from '../components/signup/HeaderSignUp';
import SignInPassCard from '../components/signup/SignInPassCard';
import { sigInService } from '../services/authService';
import ForgetPassCard from '../components/signup/ForgetPassCard';
import VerifyEmailCard from '../components/signup/VerifyEmailCard';
import { forgotPasswordService } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSigIn = async () => {
    setIsLoading(true);
    const payload = { emailOrUsername: email, password };
    try {
      const response = await sigInService(payload);
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message);
      // }
      const accessToken = response.data.token;
      const refreshToken = response.data.refreshToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('resfeshToken', refreshToken);
      navigate('/profile');
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setIsLoading(true);
    try {
      await forgotPasswordService({ email });
      setStep(4);
    } catch (error) {
      console.log(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#0A0B0D] py-4 min-h-screen">
      <HeaderSignUp />
      {step === 1 && <SignInCard onNext={() => setStep(2)} setEmail={setEmail} />}
      {step === 2 && <SignInPassCard email={email} password={password} setPassword={setPassword} onNext={handleSigIn} isLoading={isLoading} forgotPass={() => setStep(3)} />}
      {step === 3 && (
        <ForgetPassCard
          setEmail={setEmail}
          onNext={() => {
            handleForgotPassword();
            setStep(4);
          }}
        />
      )}
      {step === 4 && <VerifyEmailCard onBack={() => setStep(3)} />}
    </div>
  );
};

export default SignIn;
