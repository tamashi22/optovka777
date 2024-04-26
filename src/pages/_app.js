import Head from 'next/head';
import React from 'react';
import { observer } from 'mobx-react-lite';
import NProgress from 'nprogress';
import Router from 'next/router';
import { store } from '@/store';
import { RootStoreProvider } from '@/providers/RootStoreProvider';
import '@/styles/globals.scss';
import { AppTapBar } from '@/components/AppTapBar';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = observer(({ Component, pageProps }) => {
  const MOBILE_WIDTH = 768;
  const hasWindow = typeof window !== 'undefined';
  const { devicesStore } = store;

  React.useEffect(() => {
    setNewWindow();

    const handleResize = () => {
      if (
        window.innerWidth > MOBILE_WIDTH ||
        window.innerWidth < MOBILE_WIDTH
      ) {
        setNewWindow();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow]);

  const setNewWindow = () => {
    devicesStore.setWidth(window.innerWidth);
  };

  return (
    <RootStoreProvider>
      <Head>
        <title>Optovka777</title>
      </Head>
      <Component {...pageProps} />
      {devicesStore.isMobile && <AppTapBar />}
    </RootStoreProvider>
  );
});

export default App;
