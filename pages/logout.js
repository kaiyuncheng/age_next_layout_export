import { useRouter } from 'next/router';
import useFBLogin from '../hooks/useFBLogin';
export default function logout() {
  const [handleFBLogout] = useFBLogin();
  
  if (typeof window !== 'undefined') {
    const router = useRouter();
    localStorage.removeItem('btnetThebetteraging');
    
    router.push('/');
  }

  

  return <></>;
}