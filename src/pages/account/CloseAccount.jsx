import React from 'react';

const CloseAccount = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <p className="text-xl font-bold">Close account</p>

      <div>
        <span className="font-bold">Close account</span>
        <p className="text-muted">Closing you account can't be undone. Please make sure your account balance is $0.00 before you begin.</p>
      </div>

      <button className="px-4 py-2 font-semibold text-red-700 rounded-full w-fit hover:bg-muted/5 active:bg-muted/10">Close</button>
    </div>
  );
};

export default CloseAccount;
