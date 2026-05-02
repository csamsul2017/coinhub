import React, { useEffect } from 'react';
import { FaRegUserCircle, FaRegIdBadge, FaHouseUser, FaRegEnvelope, FaRegCalendarAlt, FaRegClock, FaDollarSign, FaExclamationCircle, FaRegStar, FaRegTimesCircle, FaRegFlag } from 'react-icons/fa';
import { FaPencil, FaAngleRight, FaPhone } from 'react-icons/fa6';
import InfoRow from '../../components/InfoRow';
import { useState } from 'react';

const infoData = [
  { label: 'Phone number', value: '6287718272510', icon: FaRegIdBadge, path: 'edit/phone-number' },
  { label: 'Legal name', value: 'Muhamad Samsul', icon: FaRegUserCircle, path: 'edit/legal-name' },
  { label: 'Display name', value: 'Samsul Dev', icon: FaRegStar, path: 'edit/display-name' },
  { label: 'Residential address', value: 'Jl. Cemara 1 No. 112A Lippo Cikarang', icon: FaHouseUser, path: 'edit/residential-address' },
  { label: 'Email address', value: 'admin@samsul.dev', icon: FaRegEnvelope, path: 'edit/email' },
  { label: 'Date of birth', value: '22/07/2001', icon: FaRegCalendarAlt, path: 'edit/date-birth' },
  { label: 'Country Code', value: 'ID', icon: FaRegFlag, path: 'edit/country-code' },
  { label: 'Close Account', icon: FaRegTimesCircle, path: 'edit/close-account' },
];

const Profile = () => {
  const [userData, setUserData] = useState(null);
  // const initials = userData.firstName[0].toUpperCase();
  const maskNumber = number => {
    if (!number) return '';
    const lastFour = number.slice(-4);
    return `********${lastFour}`;
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    fetch('https://anaf17-coinhub.hf.space/api/profile/user', { method: 'GET', headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(res => setUserData(res.data))
      .catch(error => console.log('Failed get data', error));
  }, []);

  return (
    <div className="w-full p-4 md:max-w-xl">
      <div className="flex flex-col items-center justify-center gap-4 py-4 text-center">
        {/* <FaUserCircle size={50} color="gray" /> */}
        <div className="flex flex-col items-center gap-5 ">
          {userData ? (
            <div className="relative">
              {/* <div className="flex items-center justify-center w-12 h-12 text-3xl text-white rounded-full bg-primary">{userData?.firstName[0]?.toUpperCase()}</div> */}
              <div className="flex items-center justify-center w-12 h-12 text-3xl text-white rounded-full bg-primary">S</div>
              <div className="absolute flex items-center justify-center w-5 h-5 bg-white border border-black rounded-full top-8 left-8">
                <FaPencil size={8} />
              </div>
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-surface animate-pulse"></div>
          )}

          {userData ? <p className="text-3xl font-bold leading-none">{userData?.firstName}</p> : <div className="h-8 rounded-md w-44 bg-surface/50 animate-pulse"></div>}

          {/* <span className="text-sm leading-none">csamsul2017@gmail.com</span> */}
        </div>
        {/* <button className="px-4 py-2 font-semibold rounded-3xl bg-surface hover:bg-gray-200 active:bg-gray-300">Edit</button> */}
      </div>

      <div className="flex flex-col gap-4 py-4">
        {/* <div className="flex flex-col w-full gap-2">
          <div className="w-full h-10 bg-gray-100 rounded-md animate-pulse"></div>
          <div className="w-32 h-8 rounded-md bg-gray-50 animate-pulse"></div>
        </div> */}

        {/* {infoData.map((data, i) => {
          const Icon = data.icon;

          return <InfoRow icon={<Icon size={25} />} key={i} value={data.value} label={data.label} path={data.path} data={userData} />;
        })}
        <div className="border mt-25"></div> */}

        {/* <InfoRow icon={<FaRegIdBadge size={25} />} label={'Phone number'} value={userData?.phoneNumber} isLoading={userData} path={'edit/phone-number'} /> */}
        <InfoRow icon={<FaRegIdBadge size={25} />} label={'Phone number'} value={maskNumber(userData?.phoneNumber)} isLoading={userData} path={'edit/phone-number'} />
        <InfoRow icon={<FaRegUserCircle size={25} />} label={'Legal name'} value={userData?.firstName + ' ' + userData?.lastName} isLoading={userData} path={'edit/legal-name'} />
        <InfoRow icon={<FaRegStar size={25} />} label={'Display name'} value={userData?.firstName} isLoading={userData} path={'edit/display-name'} />
        <InfoRow icon={<FaHouseUser size={25} />} label={'Residential address'} value={userData?.address} isLoading={userData} path={'edit/residential-address'} />
        <InfoRow icon={<FaRegEnvelope size={25} />} label={'Email address'} value={userData?.email} isLoading={userData} path={'edit/email'} disabled={true} />
        <InfoRow icon={<FaRegCalendarAlt size={25} />} label={'Date of birth'} value={userData?.dateOfBirth} isLoading={userData} path={'edit/date-birth'} disabled={true} />
        <InfoRow icon={<FaRegTimesCircle size={25} />} label={'Close Account'} isLoading={userData} disabled={true} />
      </div>
    </div>
  );
};

export default Profile;
