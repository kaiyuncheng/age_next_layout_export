// import Cookies from 'cookies'
import { useRouter } from 'next/router'

export const getServerSideProps = ({ query, req, res }) => {
  const { token } = query;
  
  // Create a cookies instance
  // const cookies = new Cookies(req, res)
  // cookies.set('termcare_businesstoday', token);

  // if (res) {
  //   res.writeHead(302, { // or 301
  //     Location: "/",
  //   });
  //   res.end();
  // }
  return {
    props: { token }
  }
};

export default function settoken({ token }) {
  const router = useRouter();
  if(typeof window !== 'undefined') {
    localStorage.setItem('btnetThebetteraging', token);
    router.push('/');
  }
  
  return (
    <></>
  );
}
