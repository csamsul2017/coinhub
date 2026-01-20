import React from 'react';

const CryptoNewsCard = ({ img, title, content }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 group ">
        <div className="rounded-3xl overflow-hidden aspect-[4/2]">
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="">
          <h2 className="text-2xl group-hover:underline">{title}</h2>
        </div>
      </div>

      <p className="text-muted">{content}</p>
    </div>
  );
};

export default CryptoNewsCard;
