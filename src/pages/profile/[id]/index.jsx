import { AppHeader } from '@/components/AppHeader';
import { ProfileLayout } from '@/pageLayout/User/Profile';
import React from 'react';

const ProfilePage = () => {
  return (
    <>
      <AppHeader />
      <ProfileLayout />
    </>
  );
};

export default ProfilePage;
