import React from 'react';
import Select, { components } from 'react-select';
import { clsx } from 'clsx';
import styles from './AppSelect.module.scss';

const Control = ({ children, iconComponent, ...props }) => (
  <components.Control {...props}>
    {iconComponent}
    {children}
  </components.Control>
);
const AppSelect = React.forwardRef(
  ({ className, icon, label, ...props }, ref) => {
    const customStyles = {
      control: provided => ({
        ...provided,
        background: 'transparent',
        display: 'flex',
        boxShadow:
          '0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 8px 16px 0px rgba(0, 0, 0, 0.08)',
        borderColor: '#fff',
        paddingLeft: '10px',
        fontSize: '14px',
      }),
      menu: provided => ({
        ...provided,
        fontSize: '14px',
      }),
    };
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <div className={clsx(styles.wrap, className)}>
        <Select
          placeholder={label || ''}
          ref={ref}
          styles={customStyles}
          options={options}
          components={{
            Control: props => <Control {...props} iconComponent={icon} />,
          }}
          {...props}
        />
      </div>
    );
  },
);

export default AppSelect;
