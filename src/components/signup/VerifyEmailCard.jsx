import { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import Spinner from './Spinner';
import { resendEmailOtpService, verifyEmailOtpService } from '../../services/authService';

const VerifyEmailCard = ({ email, onBack, onNext, setEmailOtp, emailOtp }) => {
  const [otp, setOtp] = useState('');
  const [submit, setSubmit] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [invalidCode, setInvalidCode] = useState(false);
  const [isLoading, setIsLoading] = useState();

  // const handleVerifyLoading = () => {
  //   setSubmit(!submit);

  //   setTimeout(() => {
  //     setSubmit(false);

  //     if (otp === '123456') {
  //       onNext();
  //     } else {
  //       setInvalidCode(true);
  //       setOtp('');
  //     }
  //   }, 2000);
  // };

  const handleVerify = async otp => {
    try {
      setSubmit(true);
      const response = await verifyEmailOtpService(otp);
      console.log(response);
      onNext();
    } catch (error) {
      setInvalidCode(true);
      setOtp('');
      console.log(error.response.data);
    } finally {
      setSubmit(false);
      setOtp('');
    }
  };

  useEffect(() => {
    if (otp.length === 6) {
      // setSubmit(!submit);
      handleVerify(otp);
    }
  }, [otp]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const id = setTimeout(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearTimeout(id);
  }, [timeLeft]);

  const handleResendOtp = async email => {
    try {
      await resendEmailOtpService('csamsul2021@gmail.com');
    } catch (error) {
      console.log(error.response);
    } finally {
      setTimeLeft(30);
    }
  };

  return (
    <div className="flex items-center justify-center mt-16 text-white">
      <div className="px-4 py-4 md:border md:max-w-md md:rounded-2xl md:border-muted/40 md:px-8 md:py-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold leading-tight">Enter the 6-digit code we emailed you</h1>
          <p className="leading-tight text-muted">
            Verify our email <span className="font-bold">{email}</span>. This helps us keep your account secure by verifying that it’s really you.
          </p>
        </div>

        <div className="flex flex-col gap-2 my-4 mt-4">
          <div className="h-6">
            {submit ? (
              <div className="flex items-center gap-2">
                <p className="font-bold">Submitting</p>
                <Spinner />
              </div>
            ) : (
              <div>
                <p className="font-bold">Enter code</p>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-2 items min-h-20">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="mx-2 select-none"></span>}
              renderInput={props => (
                <input
                  {...props}
                  inputMode="numeric"
                  className={`!w-12 h-14 text-center select-none text-xl font-semibold border active:bg-white/5 ${invalidCode ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500' : 'border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500'} bg-transparent rounded-lg hover:bg-white/5 transition duration-200  focus:outline-none text-white disabled:opacity-50`}
                  disabled={submit}
                />
              )}
            />

            {invalidCode && <p className="w-full text-red-500 ">Invalid code.</p>}
          </div>

          {/* <button className={`py-4 mt-8 font-bold rounded-full ${timeLeft ? 'bg-muted/20 text-white/50' : 'bg-muted/50 text-white'}`} disabled={timeLeft}>
            Resend code in {timeLeft}
          </button> */}

          <button
            className={`py-4 mt-4 font-bold rounded-full bg-muted/50 text-white hover:bg-muted/70 disabled:bg-muted/20 active:scale-95 disabled:text-white/50`}
            onClick={async () => {
              setTimeLeft(30);
              await handleResendOtp(email);
            }}
            disabled={timeLeft}
          >
            Resend code {timeLeft > 0 && `in ${timeLeft}`}
          </button>
          <button onClick={onBack} className="py-4 font-bold text-blue-400 rounded-full hover:bg-muted/20 active:scale-95">
            Go back
          </button>
        </div>

        <div className="flex flex-col gap-8">
          <p className="px-4 text-xs text-muted">
            By creating an account you certify that you are over the age of 18 and agree to the <span className="underline">Privacy Policy</span>
          </p>

          <p className="text-xs text-muted">
            We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span className="underline">Cookie Policy</span> and{' '}
            <span className="underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCard;
