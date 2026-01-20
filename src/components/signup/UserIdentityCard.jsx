import React from 'react';

const UserIdentityCard = () => {
  return (
    <div className="mt-16 flex justify-center">
      <div className="text-white px-4 flex flex-col gap-4 md:border md:border-muted/30 md:rounded-3xl md:max-w-md md:py-8 md:px-8">
        <div>
          <h1 className="text-2xl font-bold">What should we call you?</h1>
          <p className="text-muted">Enter your first and last name. You can make changes later on by verifying your account.</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="">
            <p>First name</p>
            <input type="text" className="w-full bg-transparent border border-muted p-4 rounded-2xl" placeholder="Satoshi" />
          </div>
          <div>
            <p>Last name</p>
            <input type="text" className="w-full bg-transparent border border-muted p-4 rounded-2xl" placeholder="Nakamoto" />
          </div>
        </div>

        <button className="bg-blue-400/60 text-black font-bold py-4 rounded-full mt-16">Continue</button>

        <p className="text-xs text-muted">
          We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span>Cookie Policy</span> and <span>Privacy policy</span>
        </p>
      </div>
    </div>
  );
};

export default UserIdentityCard;
