import React, { useState } from 'react'; // Gak perlu useEffect
import { FaCheckCircle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const CreatePasswordCard = ({ password, setPassword }) => {
  const [seePassword, setSeePassword] = useState(false);

  // --- 1. DERIVED STATE (Hitung langsung di sini) ---
  // Gak perlu regex complex, cukup cek "contain" aja
  const hasLength = password.length >= 8;
  const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password); // \d itu digit (0-9)
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  // Logic Master: Button enable kalo semua true
  const isValidPassword = hasLength && hasMixedCase && hasNumber && hasSymbol;

  // --- 2. Helper Component buat UI Checklist (Optional, biar rapi) ---
  const ValidationItem = ({ isValid, text }) => (
    <li className={`flex items-center gap-2 transition-colors duration-300 ${isValid ? 'text-white' : 'text-muted'}`}>
      <FaCheckCircle className={`transition-colors duration-300 ${isValid ? 'text-green-500' : 'text-gray-600'}`} />
      {text}
    </li>
  );

  return (
    <div className="flex justify-center mt-16 text-white">
      <div className="flex flex-col w-full gap-4 px-4 md:border md:border-muted/50 md:max-w-md md:px-8 md:py-8 md:rounded-2xl">
        <h1 className="text-2xl font-bold">Create a password</h1>
        <p className="text-muted">Protect your account by creating a strong password.</p>

        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Create password success');
          }}
          className="relative flex flex-col gap-4"
        >
          <label className="text-sm font-semibold">Password</label>

          <div className="relative">
            <input
              type={seePassword ? 'text' : 'password'}
              value={password} // Best Practice: Selalu kasih value di controlled component
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-4 transition-all bg-transparent border rounded-lg border-muted/70 focus:border-primary focus:outline-none"
              placeholder="Enter your password"
              required
            />

            {/* Toggle Button Positioned Inside Input Wrapper */}
            <button type="button" onClick={() => setSeePassword(!seePassword)} className="absolute transition-colors -translate-y-1/2 right-4 top-1/2 text-muted hover:text-white">
              {seePassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
            </button>
          </div>

          <ul className="flex flex-col gap-2 mt-2 text-sm text-muted">
            <ValidationItem isValid={hasLength} text="A minimum of 8 characters" />
            <ValidationItem isValid={hasMixedCase} text="Uppercase and lowercase letters" />
            <ValidationItem isValid={hasNumber} text="At least 1 number" />
            <ValidationItem isValid={hasSymbol} text="At least 1 symbol" />
          </ul>

          <button
            type="submit"
            className="py-4 mt-6 font-bold text-black transition-all rounded-full bg-primary disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed active:scale-95 hover:bg-primary/90"
            disabled={!isValidPassword}
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          We use strictly necessary cookies... <span className="underline cursor-pointer">Cookie Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default CreatePasswordCard;
