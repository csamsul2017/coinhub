import React, { useState } from 'react';
import { FaUserCircle, FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import Spinner from './Spinner';

const SignInPassCard = ({ email, password, setPassword, onNext, isLoading, forgotPass }) => {
  const [showPassword, setShowPassword] = useState(false);
  const validPassword = password.length > 1;

  return (
    <div className="flex justify-center flex-1 md:items-center">
      <div className="flex flex-col max-w-md gap-4 p-6 text-white h-fit md:border md:border-muted/30 md:rounded-2xl">
        <h1 className="text-2xl font-bold">Sign in to Coinhub</h1>
        <div className="flex items-center gap-2 p-4 font-bold border rounded-lg border-muted/30">
          <FaUserCircle size={32} />
          {email}
        </div>

        <div className="relative">
          <form
            onSubmit={e => {
              e.preventDefault();
              onNext();
            }}
            className="flex flex-col gap-2"
          >
            <p>Password</p>
            <input type={showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} className="w-full p-4 bg-transparent border rounded-lg border-muted disabled:text-muted" disabled={isLoading} required />

            <button className="text-left text-blue-500" type="button" onClick={forgotPass}>
              Forgot password?
            </button>
            <button
              type="submit"
              className={`w-full h-14 items-center p-4 font-bold text-black rounded-full flex justify-center  ${validPassword ? 'bg-primary' : 'bg-blue-500/50'} disabled:bg-blue-500/50 active:scale-95 hover:bg-primary/90`}
              disabled={isLoading}
            >
              {isLoading ? <Spinner textColor="text-black" /> : 'Continue'}
            </button>
          </form>

          <button className="absolute p-2 right-2 top-11 text-muted" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>

        <p className="mt-16 leading-none text-muted">We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our </p>
      </div>
    </div>
  );
};

export default SignInPassCard;
