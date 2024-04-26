import * as React from 'react';

import ReactPaginate from 'react-paginate';

// import ArrowLeft from '@/assets/icons/arrow_left.svg';
// import ArrowRight from '@/assets/icons/arrow_right_linear.svg';

import styles from './AppPagination.module.scss';

export const AppPagination = props => {
  return (
    <ReactPaginate
      containerClassName={styles.container}
      breakLabel="..."
      pageRangeDisplayed={1}
      nextClassName={styles.next}
      activeClassName={styles.active}
      // nextLabel={<ArrowRight />}
      // previousLabel={<ArrowLeft />}
      disabledClassName={styles.disabled}
      {...props}
    />
  );
};
