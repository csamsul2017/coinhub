import React from 'react';

const ForgetPassCard = () => {
  return (
    <div className="text-white flex justify-center">
      <div className="flex flex-col mt-16 p-4 gap-4 md:border md:border-muted/30 md:p-8 md:rounded-2xl md:max-w-md">
        <div>
          <h1 className="font-bold text-2xl">Reset Password</h1>
          <p className="text-muted">Enter yout email address to begin the password reset process.</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>Email</p>
          <input type="email" className="bg-transparent border border-muted p-4 rounded-md" placeholder="Your email address" />
          <button className="text-black p-4 bg-blue-400/60 font-bold mt-16 rounded-full">Continue</button>
        </div>

        <p className="text-muted text-xs">
          Not your device? Use a private windows. See our <span>Privacy Policy</span> for more info.
        </p>
      </div>
    </div>
  );
};

export default ForgetPassCard;
