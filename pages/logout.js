import { useRouter } from 'next/router'

export default function logout() {
  if(typeof window !== 'undefined') {
    const router = useRouter();
    localStorage.removeItem('btnetThebetteraging');
    router.push('/');
  }
  
  return (
    <></>
  );
}