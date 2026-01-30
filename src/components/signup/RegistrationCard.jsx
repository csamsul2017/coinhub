import { useEffect, useState } from 'react';
import { registerEmailService } from '../../services/authService';
import { FaGoogle, FaApple } from 'react-icons/fa';
import Spinner from './Spinner';

const RegistrationCard = ({ onNext, setEmail, email }) => {
  const [validEmail, setValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   if (errorMessage) console.log('this error messag', errorMessage);
  // }, [errorMessage]);

  const handlerRegisterEmail = async email => {
    try {
      setErrorMessage('');
      setIsLoading(true);
      await registerEmailService(email);
      onNext();
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-2 px-4 mt-16 text-white md:border md:border-gray-50/15 md:max-w-md md:py-8 md:px-6 md:rounded-2xl ">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted">Access all that Coinhub has to offer with a single account.</p>

        <form
          onSubmit={e => {
            e.preventDefault();
            handlerRegisterEmail(email);
            // onNext();
          }}
          className="flex flex-col gap-2 mt-4"
        >
          <label>Email</label>
          <input
            type="email"
            className="px-4 py-4 bg-transparent border rounded-lg border-solid-muted ocus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={e => {
              setEmail(e.target.value);
              setValidEmail(e.target.validity.valid);
            }}
            placeholder="Your email address"
            required
          />

          <p className="h-8 text-xs">{errorMessage}</p>

          <button type="submit" className={`text-[#0A0B0D] font-bold py-4 rounded-full flex justify-center ${validEmail ? 'bg-primary' : 'bg-blue-500/50'} `}>
            {isLoading ? <Spinner textColor="text-black-500" /> : 'Continue'}
          </button>
        </form>

        <div className="flex gap-4 my-4 text-muted">
          <div className="flex-1 mt-3 border-t border-muted"></div>
          <span>OR</span>
          <div className="flex-1 mt-3 border-t border-muted"></div>
        </div>

        <div className="flex flex-col gap-2 ">
          <button className="flex items-center justify-center gap-4 py-4 rounded-full bg-white/20">
            <FaGoogle />
            <span>Sign up with Google</span>
          </button>
          <button className="flex items-center justify-center gap-4 py-4 rounded-full bg-gray-50/20">
            <FaApple />
            <span>Sign up with Apple</span>
          </button>
        </div>

        <p className="my-4 font-bold text-center">
          Already have an account? <span className="text-primary">Sign in</span>
        </p>

        <div className="flex flex-col gap-4 text-sm tracking-tighter text-muted">
          <p>
            By creating an account you certify that you are over the age of 18 and agree to the <span className="underline">Privacy Policy</span>
          </p>
          <p>
            We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span className="underline">Cookie Policy</span> and{' '}
            <span className="underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
