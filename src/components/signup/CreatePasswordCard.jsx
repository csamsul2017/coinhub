import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CreatePasswordCard = () => {
  return (
    <div className="text-white flex justify-center mt-16">
      <div className="flex flex-col gap-4 px-4 md:border md:border-muted/50 md:max-w-md md:px-8 md:py-8 md:rounded-2xl">
        <h1 className="text-2xl font-bold">Create a password</h1>
        <p className="text-muted">Protect your account by creating a strong password.</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>Password</p>
            <input type="password" className="bg-transparent border border-muted/70 rounded-lg py-4 px-4" placeholder="Password" />
          </div>
          <div className="flex flex-col text-muted gap-2">
            <span className="flex gap-2 items-center">
              <FaCheckCircle /> A minimum of 8 characters
            </span>
            <span className="flex gap-2 items-center">
              <FaCheckCircle /> Uppercase and lowercase letters
            </span>
            <span className="flex gap-2 items-center">
              <FaCheckCircle /> At least 1 number
            </span>
            <span className="flex gap-2 items-center">
              <FaCheckCircle /> At least 1 symbol
            </span>
          </div>

          <button className="bg-blue-400/50 py-4 rounded-full text-black font-bold mt-6">Continue</button>
        </div>

        <p className="text-muted leading-none mt-4 text-xs">
          We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span className="underline">Cookie Policy</span> and{' '}
          <span className="underline">PrivacyPolicy</span>
        </p>
      </div>
    </div>
  );
};

export default CreatePasswordCard;
