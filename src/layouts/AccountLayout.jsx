import React from 'react';
import ProfileHeader from '../components/account/ProfileHeader';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/account/Sidebar';

const AccountLayout = () => {
  return (
    <div>
      <ProfileHeader />
      <Sidebar />
      <main className="flex items-center justify-center w-full pt-20 md:pl-28 lg:pl-56">
        <Outlet />
      </main>
    </div>
  );
};

export default AccountLayout;
