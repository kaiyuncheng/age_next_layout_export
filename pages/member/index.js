import Layout from "../../components/Layout";
import Link from "next/link";

export default function member() {
  return (
    <Layout siteTitle="幸福熟齡 - 會員中心">
      {/* <!-- bread crumb --> */}
      <div className="breadcrumb pt-7 md:pt-5 mb-5">
        <nav className="max-w-screen-2xl mx-auto px-4 lg:px-2 text-sm text-gray-600 font-light">
          <a href="https://thebetteraging.businesstoday.com.tw/">幸福熟齡</a>
          <span className="mx-1">/</span>
          <a href="#" className="text-gray-800 font-normal">
            會員中心
          </a>
        </nav>
      </div>

      {/* <!-- main section--> */}
      <div>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col justify-center">
          
          {/* <!-- member --> */}
          <div className="border border-secondary-medium bg-white shadow-md rounded-lg rounded-br-5xl flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 p-5 md:p-10 mb-14">
            <div className="w-full md:w-1/4 inline-flex items-center justify-center">
              <img
                className="w-1/2 md:w-full xl:w-3/4 h-auto object-cover rounded-full"
                src="https://doqvf81n9htmm.cloudfront.net/customer/user_default.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:w-2/3 md:flex-grow flex flex-col justify-center">
              <h2 className="text-xl font-medium mb-4">
                John
              </h2>
              <div className="flex flex-col space-y-2 text-gray-700">
                <p>一般會員</p>
              </div>
            </div>
          </div>

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
          <div className="login_member w-full md:w-1/2">
            <div className="h-full border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex flex-col">
              <h2 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
                會員登入
              </h2>
              <div className="flex flex-col justify-center items-center space-y-5 py-20 px-3 lg:px-10 xl:px-20 2xl:px-32">
                <form
                  className="flex flex-col space-y-4 xs:w-3/4 w-full"
                  action=""
                  method="post"
                >
                  <div className="login_user relative">
                    <label>
                      <div className="absolute bottom-[1px] left-[1px] inline-flex items-center justify-center h-10 px-3 rounded-l-md bg-secondary-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="19"
                          viewBox="0 0 17 19"
                        >
                          <g
                            id="Icon_feather-user"
                            data-name="Icon feather-user"
                            transform="translate(-5.5 -4)"
                          >
                            <path
                              id="Path_4135"
                              data-name="Path 4135"
                              d="M22,28.973V26.815A4.167,4.167,0,0,0,18,22.5H10a4.167,4.167,0,0,0-4,4.315v2.158"
                              transform="translate(0 -6.473)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                            />
                            <path
                              id="Path_4136"
                              data-name="Path 4136"
                              d="M20.648,8.815A4.324,4.324,0,1,1,16.324,4.5a4.32,4.32,0,0,1,4.324,4.315Z"
                              transform="translate(-2.324)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <input
                        className="form-input w-full pl-14 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-lg shadow-sm outline-none focus:outline-none placeholder-gray-400"
                        type="text"
                        name="keywords"
                        placeholder="會員Email帳號"
                      />
                    </label>
                  </div>
                  <div className="login_password relative">
                    <label>
                      <div className="absolute bottom-[1px] left-[1px] inline-flex items-center justify-center h-10 px-3 rounded-l-md bg-secondary-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.2"
                          height="19"
                          viewBox="0 0 17.2 19"
                        >
                          <g
                            id="Icon_feather-lock"
                            data-name="Icon feather-lock"
                            transform="translate(-4 -2.5)"
                          >
                            <path
                              id="Path_4137"
                              data-name="Path 4137"
                              d="M6.3,16.5H18.9a1.8,1.8,0,0,1,1.8,1.8v6.3a1.8,1.8,0,0,1-1.8,1.8H6.3a1.8,1.8,0,0,1-1.8-1.8V18.3a1.8,1.8,0,0,1,1.8-1.8Z"
                              transform="translate(0 -5.4)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                            />
                            <path
                              id="Path_4138"
                              data-name="Path 4138"
                              d="M10.5,11.1V7.5a4.5,4.5,0,0,1,9,0v3.6"
                              transform="translate(-2.4 0)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <input
                        className="form-input w-full pl-14 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-lg shadow-sm outline-none focus:outline-none placeholder-gray-400"
                        type="text"
                        name="keywords"
                        placeholder="密碼"
                      />
                    </label>
                  </div>

                  <div className="login_remember">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-primary-dark border border-secondary-medium rounded-sm focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-gray-800 text-sm whitespace-nowrap">
                        記住這個帳號
                      </span>
                    </label>
                  </div>

                  <button
                    type="button"
                    className="bg-primary-dark hover:bg-primary-medium transition-all duration-200 ease-in-out rounded-lg h-10 w-full px-5 flex text-white items-center justify-center outline-none focus:outline-none"
                  >
                    立即登入
                  </button>
                </form>

                <div>
                  <Link href="/forgetPassword">
                    <a
                      className="text-primary-dark hover:text-gray-600 transition-all duration-200 ease-in-out text-sm pr-3 border-r border-primary-medium"
                      href="#"
                    >
                      忘記密碼
                    </a>
                  </Link>
                  <Link href="/register">
                    <a
                      className="text-primary-dark hover:text-gray-600 transition-all duration-200 ease-in-out text-sm ml-2"
                      href="#"
                    >
                      註冊會員
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
