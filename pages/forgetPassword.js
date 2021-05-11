import Layout from '../components/Layout';

export default function login() {
    return (
    <Layout siteTitle="幸福熟齡 - 忘記密碼">
        {/* <!-- bread crumb --> */}
        <div className="breadcrumb pt-7 md:pt-5 mb-5">
            <nav className="max-w-screen-2xl mx-auto px-4 lg:px-2 text-sm text-gray-600 font-light">
                <a href="https://thebetteraging.businesstoday.com.tw/">幸福熟齡</a>
                <span className="mx-1">/</span>
                <a href="#" className="text-gray-800 font-normal">忘記密碼</a>
            </nav>
        </div>


        {/* <!-- main section--> */}
        <div> 
            <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 flex flex-col justify-center md:py-28 space-y-14 md:flex-row md:space-x-5 md:space-y-0">

            {/* <!-- Forget Password--> */}
                    <div className="w-full md:w-1/2">
                        <div className="h-full border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex flex-col">
                            <h2 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">使用您的Email帳號找回密碼</h2>
                            <div className="flex flex-col justify-center items-center space-y-5 py-20 px-3 lg:px-10 xl:px-20 2xl:px-32">
                                <form className="flex flex-col space-y-4 xs:w-3/4 w-full" action="" method="post">
                                    <div className="forget_user relative">
                                        <label>
                                            <div className="absolute bottom-[1px] left-[1px] inline-flex items-center justify-center h-10 px-3 rounded-l-md bg-secondary-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19">
                                                    <g id="Icon_feather-user" data-name="Icon feather-user" transform="translate(-5.5 -4)">
                                                      <path id="Path_4135" data-name="Path 4135" d="M22,28.973V26.815A4.167,4.167,0,0,0,18,22.5H10a4.167,4.167,0,0,0-4,4.315v2.158" transform="translate(0 -6.473)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                                      <path id="Path_4136" data-name="Path 4136" d="M20.648,8.815A4.324,4.324,0,1,1,16.324,4.5a4.32,4.32,0,0,1,4.324,4.315Z" transform="translate(-2.324)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <input
                                                className="form-input w-full pl-14 border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-lg shadow-sm outline-none focus:outline-none placeholder-gray-400"
                                                type="text" name="keywords" placeholder="請輸入您的Email帳號" />
                                        </label>
                                    </div>


                                    <button type="button" className="bg-primary-dark hover:bg-primary-medium transition-all duration-200 ease-in-out rounded-lg h-10 w-full px-5 flex text-white items-center justify-center outline-none focus:outline-none">
                                        送出驗證信
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>  </div>
        </div> 
        
  
    </Layout>
    );
  }