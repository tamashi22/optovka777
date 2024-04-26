import { AppHeader } from '@/components/AppHeader';
import { CardLayout } from '@/pageLayout/CardLayout';
import React from 'react';

const Card = () => {
  return (
    <>
      <AppHeader />
      <div className=" grey ">
        <div className="container">
          <CardLayout />
        </div>
      </div>
    </>
  );
};

export default Card;
