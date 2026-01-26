import { React, useState, useEffect } from 'react';
import { FaCheckCircle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const CreatePasswordCard = ({ password, setPassword }) => {
  const [seePassword, setSeePassword] = useState(false);
  const hasLength = password.length >= 8;
  const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const isValidPassword = hasLength && hasMixedCase && hasNumber && hasSymbol;

  const ValidationItem = ({ isValid, text }) => {
    return (
      <li className={`flex items-center gap-2 ${isValid ? 'text-white' : 'text-muted'}`}>
        <FaCheckCircle className={isValid ? 'text-green-500' : ''} /> {text}
      </li>
    );
  };

  return (
    <div className="flex justify-center mt-16 text-white">
      <div className="flex flex-col gap-4 px-4 md:border md:border-muted/50 md:max-w-md md:px-8 md:py-8 md:rounded-2xl">
        <h1 className="text-2xl font-bold">Create a password</h1>
        <p className="text-muted">Protect your account by creating a strong password.</p>

        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Create password success');
          }}
          className="relative flex flex-col gap-4"
        >
          <label>Password</label>
          <input type={seePassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} className="px-4 py-4 bg-transparent border rounded-lg border-muted/70" placeholder="Password" required />
          <ul className="flex flex-col gap-2 text-muted">
            <ValidationItem isValid={hasLength} text={`A minimum of 8 characters`} />
            <ValidationItem isValid={hasMixedCase} text={'Uppercase and lowercase letters'} />
            <ValidationItem isValid={hasNumber} text={'At least 1 number'} />
            <ValidationItem isValid={hasSymbol} text={'At least 1 symbol'} />
          </ul>

          <button type="button" onClick={() => setSeePassword(!seePassword)} className="absolute right-4 top-16">
            {seePassword ? <FaRegEye className="text-muted" /> : <FaRegEyeSlash className="text-muted" />}
          </button>
          <button type="submit" className="py-4 mt-6 font-bold text-black rounded-full bg-primary disabled:bg-primary/60 active:scale-95 hover:bg-primary/90" disabled={!isValidPassword}>
            Continue
          </button>
        </form>

        <p className="mt-4 text-xs leading-none text-muted">
          We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span className="underline">Cookie Policy</span> and{' '}
          <span className="underline">PrivacyPolicy</span>
        </p>
      </div>
    </div>
  );
};

export default CreatePasswordCard;
