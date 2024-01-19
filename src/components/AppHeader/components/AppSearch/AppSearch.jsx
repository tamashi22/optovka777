import React from 'react';
import clsx from 'clsx';
import styles from './AppSearch.module.scss';
import { AppSearchPopover } from './AppSearchPopover';
const AppSearch = ({ iconLeft, placeholder }) => {
  const [popoverOpened, setPopoverOpened] = React.useState(false);
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.container}>
        {iconLeft ? <div className={styles.icon}>{iconLeft}</div> : null}
        <input
          className={clsx(styles.input, iconLeft && styles.iconSpace)}
          name="search"
          placeholder={placeholder}
          type="search"
        />
      </div>
      {popoverOpened && <AppSearchPopover />}
    </div>
  );
};

export default AppSearch;
