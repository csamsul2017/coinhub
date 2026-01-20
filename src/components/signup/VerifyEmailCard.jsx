import React from 'react';
import OTPInput from 'react-otp-input';

const VerifyEmailCard = () => {
  let cardCodes = 6;

  return (
    <div className="text-white flex justify-center items-center mt-16">
      <div className="px-4 py-4 md:border md:max-w-md md:rounded-2xl md:border-muted/40 md:px-8 md:py-8">
        <h1 className="text-2xl font-bold">Enter the 6-digit code we emailed you</h1>
        <p className="text-muted">
          Verify ou email <span className="">samsul@samsuldev.my.id</span>. This helps us keep your account secure by verifying that it’s really you.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <p className="font-bold">Enter code</p>
          <div className="flex gap-2 justify-between">
            <div className="w-13 h-14 border rounded-lg border-muted">
              <input type="text" className="h-full w-full bg-transparent rounded-lg p-2" />
            </div>
            <div className="w-13 h-14 border rounded-lg border-muted">
              <input type="text" className="h-full w-full bg-transparent rounded-lg" />
            </div>
            <div className="w-13 h-14 border rounded-lg border-muted">
              <input type="text" className="h-full w-full bg-transparent rounded-lg" />
            </div>
            <div className="w-13 h-14 border rounded-lg border-muted">
              <input type="text" className="h-full w-full bg-transparent rounded-lg" />
            </div>
            <div className="w-13 h-14 border rounded-lg border-muted">
              <input type="text" className="h-full w-full bg-transparent rounded-lg" />
            </div>
            <div className="w-13 h-14 border rounded-lg border-muted">
              <input type="text" className="h-full w-full bg-transparent rounded-lg" />
            </div>
          </div>

          <button className="bg-muted/40 py-4 rounded-full font-bold mt-8">Resend code</button>
          <button className="py-4 rounded-full text-blue-400 font-bold">Go back</button>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-xs text-muted px-4">
            By creating an account you certify that you are over the age of 18 and agree to the <span className="underline">Privacy Policy</span>
          </p>

          <p className="text-xs text-muted">
            We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span className="underline">Cookie Policy</span> and{' '}
            <span className="underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCard;
