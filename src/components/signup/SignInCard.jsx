import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';

const SignInCard = () => {
  return (
    <div className="flex justify-center flex-1 md:items-end">
      <div className="flex flex-col gap-4 px-10 py-4 text-white h-fit md:border md:border-muted/50 md:rounded-3xl md:max-w-md md:py-8">
        <h1 className="text-2xl font-bold">Sign in to Coinhub</h1>

        <div className="flex flex-col gap-4">
          <p>Email</p>
          <input type="email" className="p-4 bg-transparent border border-muted/50 rounded-xl" placeholder="Your email address" />
          <Link className="py-4 font-bold text-center text-black rounded-full bg-blue-500/60">Continue</Link>
        </div>

        <div className="flex gap-4 my-4 text-muted">
          <div className="flex-1 mt-3 border-t border-muted"></div>
          <span>OR</span>
          <div className="flex-1 mt-3 border-t border-muted"></div>
        </div>

        <div className="flex flex-col gap-2 ">
          <button className="flex items-center justify-center gap-4 py-4 rounded-full bg-white/20">
            <FaGoogle />
            <span>Sign in with Google</span>
          </button>
          <button className="flex items-center justify-center gap-4 py-4 rounded-full bg-gray-50/20">
            <FaApple />
            <span>Sign in with Apple</span>
          </button>
        </div>

        <p className="font-bold text-center">
          Don't have an account? <span className="text-primary">Sign up</span>
        </p>

        <p className="leading-none text-md text-muted">
          We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span>Cookie Policy</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignInCard;
