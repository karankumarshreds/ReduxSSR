import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';

const AppComponent: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(AppComponent);
