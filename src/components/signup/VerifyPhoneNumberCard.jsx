import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const VerifyPhoneNumberCard = ({ phoneNumber, setPhoneNumber, onNext }) => {
  const safePhoneNumber = phoneNumber || '';
  const hasLength = safePhoneNumber.length >= 10 && safePhoneNumber.length <= 13;

  return (
    <div className="flex justify-center mt-16 text-white">
      <div className="flex flex-col gap-8 px-4 md:border md:border-muted/50 md:p-8 md:max-w-md rounded-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Verify your phone number</h1>
          <p className="leading-none text-muted">Enter your phone number to receive a verification code</p>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            onNext();
          }}
          className="flex flex-col justify-between gap-2"
        >
          <label>Phone number</label>
          <div className="flex gap-4">
            <div className="flex items-center gap-4 px-12 py-4 border rounded-lg w-fit border-muted/50">ID +62</div>
            <div className="flex-1">
              <input
                type="text"
                onChange={e => {
                  const val = e.target.value;

                  if (val === '' || /^[0-9]+$/.test(val)) {
                    setPhoneNumber(val);
                  }
                }}
                inputMode="numeric"
                className="w-full h-full px-4 bg-transparent border rounded-lg border-muted/50"
                placeholder="0000-000-000"
                value={phoneNumber}
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full py-4 mt-4 font-bold text-black rounded-full bg-primary disabled:bg-blue-500/50 active:scale-95 hover:bg-primary/90" disabled={!hasLength}>
            Continue
          </button>
        </form>

        <p className="text-xs leading-none text-muted">
          Messaging and data rates may apply. Message frequency depends on account activity. Reply HELP for support or STOP to opt out of future alerts. Opting out won't affect two-step verification SMS. Click for{' '}
          <span>User Agreements</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyPhoneNumberCard;
