import React, { useEffect } from 'react';

// Component Helper
const FullnameInput = ({ title, placeholder, state, name }) => {
  return (
    <div>
      <p>{title}</p>
      <input
        type="text"
        className="w-full p-4 bg-transparent border border-muted rounded-2xl"
        onChange={e => {
          const val = e.target.value;
          if (val === '' || /^[a-zA-Z\s]+$/.test(val)) state(e.target.value);
        }}
        placeholder={placeholder}
        value={name}
        required
      />
    </div>
  );
};

const UserIdentityCard = ({ firstName, setFirstName, lastName, setLastName }) => {
  const isValidRule = firstName && lastName;

  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-4 px-4 text-white md:border md:border-muted/30 md:rounded-3xl md:max-w-md md:py-8 md:px-8">
        <div>
          <h1 className="text-2xl font-bold">What should we call you?</h1>
          <p className="text-muted">Enter your first and last name. You can make changes later on by verifying your account.</p>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Login successful');
          }}
          className="flex flex-col gap-4"
        >
          <FullnameInput title={'Firstname'} placeholder={'Satoshi'} state={setFirstName} name={firstName} />
          <FullnameInput title={'Lastname'} placeholder={'Nakamoto'} state={setLastName} name={lastName} />
          <button type="submit" className="py-4 mt-16 font-bold text-black rounded-full bg-primary disabled:bg-blue-400/60 active:scale-95 hover:bg-primary/90" disabled={!isValidRule}>
            Continue
          </button>
        </form>

        <p className="text-xs text-muted">
          We use strictly necessary cookies to enable essential functions, such as security and authentication. For more information, see our <span>Cookie Policy</span> and <span>Privacy policy</span>
        </p>
      </div>
    </div>
  );
};

export default UserIdentityCard;
