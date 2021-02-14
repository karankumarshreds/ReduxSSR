import React from 'react';
import { wrapper } from '../src/store';

const WrappedApp = ({ Component, pageProps }) => <Component {...pageProps} />;

WrappedApp.getInitialProps = async (appContext) => {
  // page Components expect a context with (req, res) properties which is appContext.ctx
  let pageProps = {};
  // invoke pages gips() only if exist // passed down to pages as pageProps
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  // recieved above by WrappedApp's props and further passed down
  return {
    pageProps,
  };
};

export default wrapper.withRedux(WrappedApp);
