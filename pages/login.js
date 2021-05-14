import Layout from "../components/Layout";
import MemberLogin from "../components/login/MemberLogin"
import { useUserContext } from "../context/user";
import { useRouter } from 'next/router';
import BreadCrumb from "../components/utils/BreadCrumb";

export default function login() {
  const { userData } = useUserContext();
  const router = useRouter();
  if(Object.keys(userData).length) {
    router.push('/');
  }

  return (
    <Layout siteTitle="幸福熟齡 - 會員登入">
      {/* <!-- bread crumb --> */}
      <BreadCrumb titles={[ { title: '會員登入', link: '/login' }]}/>


      {/* <!-- main section--> */}
      <div>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col justify-center md:py-28 space-y-14 md:flex-row md:space-x-5 md:space-y-0">
          {/* <!-- login --> */}
          <div className="login_social w-full md:w-1/2">
            <div className="h-full border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex flex-col">
              <h2 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
                使用社群登入
              </h2>
              <div className="flex flex-col justify-center items-center space-y-5 py-20 px-3 lg:px-10 xl:px-20 2xl:px-32">
                <a
                  href="#"
                  className="group flex items-center justify-center outline-none w-full xs:w-3/4 focus:outline-none"
                >
                  <span className="bg-blue-900 h-10 w-10 flex items-center justify-center rounded-l-lg">
                    <svg
                      className="fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.45"
                      height="18"
                      viewBox="0 0 13.45 25"
                    >
                      <path
                        id="Icon_zocial-facebook"
                        data-name="Icon zocial-facebook"
                        d="M13.257,13.425V8.651h3.851V6.25a6.283,6.283,0,0,1,1.687-4.425A5.366,5.366,0,0,1,22.882,0h3.825V4.775H22.882a.842.842,0,0,0-.674.412,1.675,1.675,0,0,0-.3,1.013V8.65h4.8v4.774h-4.8V25h-4.8V13.425Z"
                        transform="translate(-13.257)"
                      />
                    </svg>
                  </span>
                  <p className="flex-grow whitespace-nowrap h-10 px-5 bg-blue-600 group-hover:bg-blue-500 transition-all duration-200 ease-in-out rounded-r-lg text-white font-medium inline-flex items-center">
                    使用FACEBOOK帳號登入
                  </p>
                </a>
                <a
                  href="#"
                  className="group flex items-center outline-none w-full xs:w-3/4 focus:outline-none"
                >
                  <span className="bg-red-700 h-10 w-10 flex items-center justify-center rounded-l-lg">
                    <svg
                      className="fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28.8"
                      height="15"
                      viewBox="0 0 28.8 18"
                    >
                      <path
                        id="Icon_awesome-google-plus-g"
                        data-name="Icon awesome-google-plus-g"
                        d="M18.4,12.211a7.634,7.634,0,0,1,.147,1.5c0,5.145-3.45,8.791-8.644,8.791a9,9,0,1,1,0-18,8.6,8.6,0,0,1,6.029,2.357L13.485,9.2A5.053,5.053,0,0,0,9.9,7.815a5.686,5.686,0,0,0,0,11.37,4.875,4.875,0,0,0,5.108-3.88H9.9V12.211h8.5Zm8.691.3V9.9H24.462v2.612H21.85v2.625h2.612V17.75h2.625V15.138H29.7V12.512H27.088Z"
                        transform="translate(-0.9 -4.5)"
                      />
                    </svg>
                  </span>
                  <p className="flex-grow whitespace-nowrap h-10 px-5 bg-red-500 group-hover:bg-red-400 transition-all duration-200 ease-in-out rounded-r-lg text-white font-medium inline-flex items-center">
                    使用Gmail帳號登入
                  </p>
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center outline-none w-full xs:w-3/4 focus:outline-none"
                >
                  <span className="bg-green-600 h-10 w-10 flex items-center justify-center rounded-l-lg">
                    <svg
                      className="fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.251"
                      height="18"
                      viewBox="0 0 26.251 25"
                    >
                      <path
                        id="Icon_simple-line"
                        data-name="Icon simple-line"
                        d="M21.181,11.02a.69.69,0,0,1,0,1.379h-1.92V13.63h1.92a.689.689,0,1,1,0,1.377h-2.61a.69.69,0,0,1-.686-.688V9.1a.691.691,0,0,1,.689-.689h2.61a.689.689,0,0,1,0,1.378h-1.92V11.02h1.92Zm-4.217,3.3a.688.688,0,0,1-.473.652.707.707,0,0,1-.218.034.676.676,0,0,1-.558-.273L13.044,11.1v3.216a.687.687,0,1,1-1.375,0V9.1a.685.685,0,0,1,.47-.651.636.636,0,0,1,.212-.036.707.707,0,0,1,.541.278l2.693,3.642V9.1a.689.689,0,0,1,1.378,0v5.218Zm-6.279,0a.688.688,0,1,1-1.376,0V9.1a.688.688,0,1,1,1.376,0Zm-2.7.688H5.378a.693.693,0,0,1-.689-.688V9.1a.689.689,0,0,1,1.378,0V13.63H7.988a.689.689,0,0,1,0,1.377m18.263-3.494c0-5.875-5.89-10.656-13.125-10.656S0,5.639,0,11.514c0,5.262,4.67,9.671,10.976,10.509.428.09,1.01.282,1.157.645a2.672,2.672,0,0,1,.042,1.181L12,24.965c-.049.329-.263,1.3,1.147.705s7.565-4.46,10.321-7.629a9.431,9.431,0,0,0,2.787-6.528"
                        transform="translate(0 -0.858)"
                      />
                    </svg>
                  </span>
                  <p className="flex-grow whitespace-nowrap h-10 px-5 bg-green-500 group-hover:bg-green-400 transition-all duration-200 ease-in-out rounded-r-lg text-white font-medium inline-flex items-center">
                    使用LINE帳號登入
                  </p>
                </a>
              </div>
            </div>
          </div>
          <MemberLogin />
        </div>
      </div>
    </Layout>
  );
}
