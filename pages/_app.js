// import '../styles/globals.css'
// // import {  Provider} from 'dva';
import { Provider } from "react-redux";
// import Head from 'next/head';
import widthDva from "@/utils/store";
import "babel-polyfill"
// import { useMediaQuery } from "react-responsive";

// // import 'antd/dist/antd.css';
// function MyApp({ Component, pageProps,dvaStore }) {
//   console.log(dvaStore)
//   return(<>
//   <Head>
//     <title>心知天气电网监控平台</title>
//   </Head>
//   <Provider store={dvaStore}>
//      <Component {...pageProps} />
//   </Provider>
//   </>)

// }

// export default widthDva(MyApp)

import App, { Container } from "next/app";
import React from "react";
// import IsPC from "@/utils/isPc";

// import '../static/css/common.scss'
// import { init } from '../plugins/getData'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    console.log(1);
    let pageProps = {};
    if (Component.getInitialProps) {
      // 执行当前页面的getInitialProps
      let data = await Component.getInitialProps(ctx);
      pageProps = { ...data };
    }
    return { pageProps };
  }

  async componentDidMount() {
    // if (this.props.router.pathname != "/_error") {
      // var _hmt = _hmt || [];
      // (function() {
      //   var hm = document.createElement("script");
      //   hm.src = "https://hm.baidu.com/hm.js?292c3026c555200d85ceefd89797a4c4";
      //   var s = document.getElementsByTagName("script")[0];
      //   s.parentNode.insertBefore(hm, s);
      // })();
    // }
    // const dpi = IsPC() ? 1 : window.devicePixelRatio;
    // const isMobile = useMediaQuery({ maxWidth: 767 * dpi });
    // // const isDesktop = !isMobile;
    // const { dispatch } = this.props;
    // await dispatch({
    //   type: "global/updateState",
    //   params: {
    //     isMobile,
    //     // isDesktop,
    //     // isSmall,
    //   },
    // });
    // console.log(this.props.isMobile);
  }

  render() {
    const { Component, pageProps, dvaStore } = this.props;
    return (
      <Provider store={dvaStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default widthDva(MyApp);

// import React from 'react';
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import theme from './theme';

// export default function MyApp(props) {
//   const { Component, pageProps } = props;

//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <Head>
//         <title>My page</title>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </React.Fragment>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
