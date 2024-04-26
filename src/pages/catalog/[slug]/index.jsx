import React from 'react';
import AppLayout from '@/components/AppLayout';
import { CatalogLayout } from '@/pageLayout/Catalog';
const Catalog = () => {
  return (
    <AppLayout>
      <div className="container">
        <CatalogLayout />
      </div>
    </AppLayout>
  );
};

export default Catalog;
