import React from 'react';

const UserMenu = ({ isPopover, setIsPopover }) => {
  return (
    <button onClick={() => setIsPopover(!isPopover)} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007BB3] text-white hover:bg-[#007BB3]/90 active:bg-[#007BB3]/80">
      S
    </button>
  );
};

export default UserMenu;
