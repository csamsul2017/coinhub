import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const SignInCard = () => {
  return (
    <div className="flex justify-center md:items-end flex-1">
      <div className="flex flex-col h-fit text-white py-4 px-10 gap-4 md:border md:border-muted/50 md:rounded-3xl md:max-w-md md:py-8">
        <h1 className="text-2xl font-bold">Sign in to Coinhub</h1>

        <div className="flex flex-col gap-2">
          <p>Email</p>
          <input type="email" className="bg-transparent border border-muted/50 p-4 rounded-xl" placeholder="Your email address" />
          <button className="bg-blue-500/60 text-black font-bold py-4 rounded-full">Continue</button>
        </div>

        <div className="flex gap-4 text-muted my-4">
          <div className="border-t border-muted flex-1 mt-3"></div>
          <span>OR</span>
          <div className="border-t border-muted flex-1 mt-3"></div>
        </div>

        <div className="flex flex-col gap-2 ">
          <button className="flex gap-4 bg-white/20 items-center justify-center py-4 rounded-full">
            <FaGoogle />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 bg-gray-50/20 items-center justify-center py-4 rounded-full">
            <FaApple />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <p className="font-bold text-center">
          Don't have an account? <span className="text-primary">Sign up</span>
        </p>

        <p className="text-md text-muted leading-none">
          We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span>Cookie Policy</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignInCard;
