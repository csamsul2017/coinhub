import { React, useState, useEffect } from 'react';
import { FaCheckCircle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const CreatePasswordCard = ({ password, setPassword }) => {
  const [seePassword, setSeePassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isEightWorldPass, setIsEightWorldPass] = useState(false);
  const [isUpperLowerCasePass, setIsUpperLowerCasePass] = useState(false);
  const [isNumberPass, setIsNumberPass] = useState(false);
  const [isSymbolPass, setIsSymbolPass] = useState(false);

  // useEffect(() => {
  //   setIsEightWorldPass(false);
  //   setIsUpperLowerCasePass(false);
  //   setIsNumberPass(false);
  //   setIsSymbolPass(false);

  //   const regexUpperLower = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  //   const regexNumber = /^(?=.*\d).+$/;
  //   const regexSymbol = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;

  //   if (password.length >= 8) setIsEightWorldPass(true);
  //   if (regexUpperLower.test(password)) setIsUpperLowerCasePass(true);
  //   if (regexNumber.test(password)) setIsNumberPass(true);
  //   if (regexSymbol.test(password)) setIsSymbolPass(true);
  //   if (isEightWorldPass && isUpperLowerCasePass && isNumberPass && isSymbolPass) setIsValidPassword(true);
  // }, [password]);

  useEffect(() => {
    const regexUpperLower = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const regexNumber = /^(?=.*\d).+$/;
    const regexSymbol = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;

    const checkLength = password.length >= 8;
    const checkMixedCase = regexUpperLower.test(password);
    const checkNumber = regexNumber.test(password);
    const checkSymbol = regexSymbol.test(password);

    checkLength ? setIsEightWorldPass(true) : setIsEightWorldPass(false);
    checkMixedCase ? setIsUpperLowerCasePass(true) : setIsUpperLowerCasePass(false);
    checkNumber ? setIsNumberPass(true) : setIsNumberPass(false);
    checkSymbol ? setIsSymbolPass(true) : setIsSymbolPass(false);

    if (checkLength && checkMixedCase && checkNumber && checkSymbol) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  }, [password]);

  console.log(isValidPassword);

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
            <li className={`flex items-center gap-2 ${isEightWorldPass ? 'text-white' : 'text-muted'}`}>
              <FaCheckCircle className={isEightWorldPass ? 'text-green-500' : ''} /> A minimum of 8 characters
            </li>
            <li className={`flex items-center gap-2 ${isUpperLowerCasePass ? 'text-white' : 'text-muted'}`}>
              <FaCheckCircle className={isUpperLowerCasePass ? 'text-green-500' : ''} /> Uppercase and lowercase letters
            </li>
            <li className={`flex items-center gap-2 ${isNumberPass ? 'text-white' : 'text-muted'}`}>
              <FaCheckCircle className={isNumberPass ? 'text-green-500' : ''} /> At least 1 number
            </li>
            <li className={`flex items-center gap-2 ${isSymbolPass ? 'text-white' : 'text-muted'}`}>
              <FaCheckCircle className={isSymbolPass ? 'text-green-500' : ''} /> At least 1 symbol
            </li>
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
