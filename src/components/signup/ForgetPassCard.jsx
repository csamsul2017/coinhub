import React, { useState } from 'react';

const ForgetPassCard = ({ setEmail, onNext }) => {
  const [validRule, setValidRule] = useState(false);

  return (
    <div className="flex justify-center text-white">
      <div className="flex flex-col gap-4 p-4 mt-16 md:border md:border-muted/30 md:p-8 md:rounded-2xl md:max-w-md">
        <div>
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-muted">Enter yout email address to begin the password reset process.</p>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            onNext();
          }}
          className="flex flex-col gap-2"
        >
          <label>Email</label>
          <input
            type="email"
            className="p-4 bg-transparent border rounded-md border-muted"
            onChange={e => {
              setValidRule(e.target.validity.valid);
              setEmail(e.target.value);
            }}
            placeholder="Your email address"
            required
          />
          <button type="submit" className="p-4 mt-8 font-bold text-black rounded-full bg-primary hover:bg-primary/90 active:scale-95 disabled:bg-blue-400/60" disabled={!validRule}>
            Continue
          </button>
        </form>

        <p className="text-xs text-muted">
          Not your device? Use a private windows. See our <span>Privacy Policy</span> for more info.
        </p>
      </div>
    </div>
  );
};

export default ForgetPassCard;
