import React from 'react';
import { observer } from 'mobx-react-lite';

import AppLayout from '@/components/AppLayout';
import { ProductLayout } from '@/pageLayout/Product';

const Product = () => {
  return (
    <AppLayout>
      <ProductLayout />
    </AppLayout>
  );
};

export default Product;
