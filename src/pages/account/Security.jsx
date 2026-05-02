import React from 'react';
import InfoRow from '../../components/InfoRow';
import {
  FaRegUserCircle,
  FaRegIdBadge,
  FaHouseUser,
  FaRegEnvelope,
  FaRegCalendarAlt,
  FaRegClock,
  FaDollarSign,
  FaExclamationCircle,
  FaRegStar,
  FaRegTimesCircle,
  FaUserLock,
  FaCheckDouble,
  FaChartLine,
  FaGlobe,
  FaSignInAlt,
  FaSyncAlt,
  FaLock,
} from 'react-icons/fa';
import { FaPencil, FaAngleRight, FaPhone } from 'react-icons/fa6';

const infoData = [
  { label: 'Password', icon: FaUserLock },
  { label: '2-step verification', icon: FaCheckDouble },
  { label: 'Account activity', icon: FaChartLine },
  { label: 'Active sessions', icon: FaGlobe },
  { label: 'Signed in device', icon: FaSignInAlt },
  { label: 'Connected accounts', icon: FaSyncAlt },
  { label: 'Lock account', icon: FaLock, color: 'text-red-500' },
];

const Security = () => {
  return (
    <div className="flex flex-col w-full gap-2 p-4 md:max-w-xl">
      <h2 className="px-4 py-4 text-3xl font-bold">Security</h2>
      {infoData.map((info, i) => {
        const Icon = info.icon;

        return <InfoRow key={i} icon={<Icon size={25} />} label={info.label} color={info.color} isLoading={true} />;
      })}
    </div>
  );
};

export default Security;
