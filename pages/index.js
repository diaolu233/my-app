// import Head from 'next/head'
import React, { useEffect } from 'react';
// import styles from '../styles/Home.module.css'
// import HomePage from './page/Home/'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { connect } from 'react-redux';
// import IsPC from "@/utils/isPc";
// const MediaQuery = require('react-responsive');
import { useMediaQuery } from 'react-responsive'
// import { exp } from 'react-native-reanimated';
import Salesreport from '@/pages/salesReport'
// import dynamic from 'next/dynamic'
 function Home(props) {
  // console.log(props)
  // const router = useRouter()
  // const dpi = props.userAgent ? 1 : window.devicePixelRatio;
  const dpi = 1;
  const isMobile = useMediaQuery({ maxWidth: 767 * dpi });
  useEffect(() => {
    // router.push('/page/Home');
    // alert(8)
    props.dispatch({
      type: 'index/updateState',
      payload: {
        isMobile:`${isMobile}`
        // isDesktop,
        // isSmall,
      }
    })
  },[isMobile])
  return (
    // <div>1</div>
       <Salesreport></Salesreport> 

  //   <div>
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  // <div>{props.index.isMobile}</div>
  //     <ul>
  //       <li>
  //         <Link href="/page/Home">
  //           <a>Home</a>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link href="/page/Detail">
  //           <a>About Us</a>
  //         </Link>
  //       </li>
  //     </ul>
      
      //  <MediaQuery query='(min-device-width: 1224px)'>
        
      //   <div>pc</div>
      // </MediaQuery>
      // <MediaQuery query='(max-device-width: 1224px)'>
      //   <div>移动</div>
      // </MediaQuery> 
      
    // </div>
    
  )
}



Home.getInitialProps = async ({ req }) => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  // return { stars: json.stargazers_count }
 
    // console.log(3)
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   
    // })
    // const Agents = ["Android", "iPhone",
    // "SymbianOS", "Windows Phone",
    // "iPad", "iPod"];
    // let flag = true;
    // for (let v = 0; v < Agents.length; v++) {
    // if (userAgentInfo.indexOf(Agents[v]) > 0) {
    //     flag = false;
    //     break;
    //   }
    // }
    // const dpi = flag ? 1 : window.devicePixelRatio;
    // const isMobile = useMediaQuery({ maxWidth: 767 * dpi });
    // useEffect(() => {
    //   // router.push('/page/Home');
    //   dispatch({
    //     type: 'global/updateState',
    //     params: {
    //       isMobile
    //       // isDesktop,
    //       // isSmall,
    //     }
    //   })

    return { userAgent }
  

    // })
  }
  


export default connect(({index}) => {
  return {
    index
  };
})(Home);
// import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// // import ProTip from '../src/ProTip';
// // import Link from '../src/Link';
// // import Copyright from '../src/Copyright';

// export default function Home() {
//   return (
//     <Container maxWidth="sm">
//       <Box my={4}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Next.js example
//         </Typography>
//         {/* <Link href="/about" color="secondary">
//           Go to the about page
//         </Link>
//         <ProTip />
//         <Copyright /> */}
//       </Box>
//     </Container>
//   );
// }


// export  function Home(props) {
//   return (
//     <div>1</div>
// }