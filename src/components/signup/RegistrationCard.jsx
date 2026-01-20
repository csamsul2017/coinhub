import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';

const RegistrationCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-white px-4 flex flex-col gap-2 mt-16 md:border md:border-gray-50/15 md:max-w-md md:py-8 md:px-6 md:rounded-2xl  ">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted">Access all that Coinrun has to offer with a single account.</p>

        <form action="" className="flex flex-col gap-4 mt-4">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name=""
            id=""
            className="px-4 py-4 bg-transparent border border-solid-muted rounded-lg ocus:outline-none focus:ring-2 focus:ring-blue-500
         focus:border-blue-500"
            placeholder="Your email address"
          />
          <button className="bg-primary text-[#0A0B0D] font-bold py-4 rounded-full">Continue</button>
        </form>

        <div className="flex gap-4 text-muted my-4">
          <div className="border-t border-muted flex-1 mt-3"></div>
          <span>OR</span>
          <div className="border-t border-muted flex-1 mt-3"></div>
        </div>

        <div className="flex flex-col gap-2 ">
          <button className="flex gap-4 bg-white/20 items-center justify-center py-4 rounded-full">
            <FaGoogle />
            <span>Sign up with Google</span>
          </button>
          <button className="flex gap-4 bg-gray-50/20 items-center justify-center py-4 rounded-full">
            <FaApple />
            <span>Sign up with Apple</span>
          </button>
        </div>

        <p className="font-bold text-center my-4">
          Already have an account? <span className="text-primary">Sign in</span>
        </p>

        <div className="flex flex-col gap-4 text-sm text-muted tracking-tighter">
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
