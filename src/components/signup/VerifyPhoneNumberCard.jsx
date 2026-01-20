import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const VerifyPhoneNumberCard = () => {
  return (
    <div className="text-white flex justify-center mt-16">
      <div className="flex flex-col px-4 gap-4 md:border md:border-muted/50 md:p-8 md:max-w-md rounded-2xl">
        <h1 className="font-bold text-2xl">Verify your phone number</h1>
        <p className="text-muted leading-none">Enter your phone number to receive a verification code</p>

        <div>
          <p>Phone number</p>
          <div className="flex gap-4 justify-between">
            <div className="flex flex-1 gap-4 items-center border border-muted/50 px-4 py-4 rounded-lg">
              ID +62
              <FaChevronDown />
            </div>
            <div>
              <input type="text" inputMode="numeric" pattern="[0-9]" className="flex-1 h-full rounded-lg bg-transparent border border-muted/50 px-4" placeholder="0000-000-000" />
            </div>
          </div>

          <button className="bg-blue-500/50 text-black font-bold w-full mt-4 py-4 rounded-full">Continue</button>
        </div>

        <p className="text-muted leading-none text-xs">
          Messaging and data rates may apply. Message frequency depends on account activity. Reply HELP for support or STOP to opt out of future alerts. Opting out won't affect two-step verification SMS. Click for{' '}
          <span>User Agreements</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyPhoneNumberCard;
