import React, { useState } from 'react';
import { FaUserCircle, FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const SignInPassCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex justify-center md:items-center">
      <div className="flex flex-col gap-4 text-white p-6 max-w-md h-fit md:border md:border-muted/30 md:rounded-2xl">
        <h1 className="text-2xl font-bold">Sign in to Coinhub</h1>
        <div className="flex items-center font-bold gap-2 border p-4 rounded-lg border-muted/30">
          <FaUserCircle size={32} />
          samsul@samsuldev.my.id
        </div>

        <div className="relative">
          <p>Password</p>
          <input type={showPassword ? 'text' : 'password'} className="w-full bg-transparent border p-4 rounded-lg border-muted" />
          <button className="absolute right-2 top-9 text-muted p-2" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>

        <p className="text-blue-500">Forgot password?</p>

        <button className="text-black w-full p-4 bg-blue-500/50 font-bold rounded-full">Continue</button>

        <p className="text-muted leading-none mt-16">We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our </p>
      </div>
    </div>
  );
};

export default SignInPassCard;
