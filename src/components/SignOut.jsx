import React from 'react';

const SignOut = ({ className }) => {
  return <button className={`w-full px-6 py-4 font-bold text-left text-red-700 hover:bg-surface/50 active:bg-surface ${className}`}>Sign Out</button>;
};

export default SignOut;
