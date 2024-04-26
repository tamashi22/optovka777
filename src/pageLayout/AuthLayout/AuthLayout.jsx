import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthWrapper from './components/AuthWrapper';
import { TextFieldPhone } from '@/components/ui/TextFieldPhone';
import { AppButton } from '@/components/ui/AppButton';
import { SmsCode } from '@/components/ui/SmsCode';
import { AuthApi } from '@/services/api/AuthApi';
import styles from './AuthLayout.module.scss';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
const SMS_CODE_LENGTH = 6;
const AuthLayout = () => {
  const router = useRouter();
  const [tab, setTab] = React.useState('phone');
  const [phoneData, setPhoneData] = React.useState({
    phone: '',
    formattedPhone: '',
    isValid: false,
  });

  const [checked, setChecked] = React.useState(false);
  const [code, setCode] = React.useState('');
  const [sessionId, SetSessonId] = React.useState();
  const [minutes, setMinutes] = React.useState(1);
  const [seconds, setSeconds] = React.useState(0);
  const onChangePhone = data => {
    setPhoneData(data);
  };
  const onSendCode = () => {
    if (phoneData.isValid && checked) {
      AuthApi.sendCode(phoneData.formattedPhone).then(res => {
        SetSessonId(res.data.data.session_id);
        setTab('sms');
      });
    }
  };
  const handleСheck = () => {
    setChecked(!checked);
  };
  const onLogin = () => {
    AuthApi.verify({ session_id: sessionId, code: code }).then(() => {
      
      router.push('/');
    });
  };
  const resendCode = () => {
    setMinutes(1);
    setSeconds(0);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);
  return (
    <AuthWrapper>
      <h2 className={styles.title}>
        {tab == 'phone' && 'Войти или зарегистрироваться'}
        {tab == 'sms' && 'Введите код подтверждения'}
      </h2>
      {tab == 'phone' && (
        <div>
          <div className={styles.input}>
            <TextFieldPhone value={phoneData.phone} onChange={onChangePhone} />
          </div>
          <AppButton onClick={onSendCode}>Получить код</AppButton>
          <div className={styles.wrapper}>
            <input
              type="checkbox"
              className={styles.checkBox}
              onClick={handleСheck}
            />
            <span>
              Соглашаюсь с <Link href="#">политикой конфиденциальности </Link>и
              <Link href="#"> условиями пользования</Link>
            </span>
          </div>
        </div>
      )}
      {tab == 'sms' && (
        <div>
          <div className={styles.input}>
            <SmsCode count={SMS_CODE_LENGTH} onChangeCode={setCode} />
          </div>
          <AppButton onClick={onLogin}>Отправить</AppButton>
          <div className={styles.count}>
            {seconds > 0 || minutes > 0 ? (
              <p>
                Запросить код повторно через
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            ) : (
              <button
                disabled={seconds > 0 || minutes > 0}
                onClick={resendCode}
                className={styles.resendCodeButton}
              >
                Запросить код
              </button>
            )}
          </div>
        </div>
      )}
    </AuthWrapper>
  );
};

export default AuthLayout;
