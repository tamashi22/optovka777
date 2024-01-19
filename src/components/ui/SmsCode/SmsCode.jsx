import React from 'react';
import clsx from 'clsx';
import styles from './SmsCode.module.scss';

const createArray = (count, empty) => {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(empty);
  }
  return arr;
};

export const SmsCode = ({
  count = 4,
  onComplete,
  onChangeCode: onChangeCodeProp,
}) => {
  const refs = React.useRef([]);
  const [fields, setFields] = React.useState(createArray(count, { value: '' }));

  const code = React.useMemo(() => {
    return fields.map(item => item.value).join('');
  }, [fields]);

  const setNewFields = (index, value) => {
    setFields(prev => {
      const newFields = prev.slice();
      newFields[index] = {
        value,
      };

      return newFields;
    });
  };

  const onChangeCode = (index, value) => {
    setNewFields(index, value);
    if (index < fields.length - 1) {
      refs.current?.[index + 1]?.focus();
    }
  };

  const onKeyDown = (event, index) => {
    if ((event.keyCode === 8 || event.key === 'Backspace') && index > 0) {
      if (index === fields.length - 1 && fields[index].value) {
        setNewFields(index, '');
        return;
      }
      if (!fields[index].value) {
        refs?.current?.[index - 1].focus();
        return;
      }
    }
  };
  const onFocus = index => {
    setNewFields(index, '');
  };

  React.useEffect(() => {
    if (code.length === count) {
      onComplete?.(code);
    }
    onChangeCodeProp?.(code);
  }, [code, count, onComplete, onChangeCodeProp]);

  return (
    <div className={styles.container}>
      {fields.map((item, index) => {
        return (
          <input
            inputMode="numeric"
            key={index}
            className={clsx(styles.input, item.value ? styles.active : '')}
            ref={ref => {
              if (!refs.current[index] && ref) {
                refs.current[index] = ref;
              }
            }}
            onChange={({ currentTarget }) =>
              onChangeCode(index, currentTarget?.value)
            }
            value={item.value}
            onKeyDown={event => onKeyDown(event, index)}
            maxLength={1}
            onFocus={event => onFocus(index)}
          />
        );
      })}
    </div>
  );
};
