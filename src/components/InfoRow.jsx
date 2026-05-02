import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const InfoRow = ({ icon, label, value = '', color = 'text-black', path, data, isLoading, disabled = false }) => {
  const Icon = icon;
  // console.log(Boolean(isLoading));

  return (
    <Link to={path} state={{ label: value }} className={` ${disabled ? 'pointer-events-none opacity-50' : ''} flex items-center justify-between h-16 gap-4 p-4 rounded-xl hover:bg-surface/30 active:bg-slate-100`}>
      <div className={`flex items-center gap-4 ${color}`}>
        {isLoading ? Icon : <div className="w-8 h-8 rounded-full bg-surface animate-pulse"></div>}

        <div className="flex flex-col gap-1">
          {isLoading ? (
            <div className="flex flex-col gap-1">
              <p className="font-bold">{label}</p>
              <span className="text-muted">{value}</span>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <div className="h-4 rounded-sm w-44 bg-surface animate-pulse"></div>
              <div className="h-4 rounded-sm w-72 bg-surface/50 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
      {isLoading ? <FaAngleRight /> : <div className="rounded-full w-7 h-7 bg-surface/50 animate-pulse"></div>}

      {/* <button className="px-4 font-semibold rounded-3xl bg-surface hover:bg-gray-200 active:bg-gray-300">Edit</button> */}
    </Link>
  );
};

export default InfoRow;
