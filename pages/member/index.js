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
          <div className="border border-secondary-medium bg-white shadow-md rounded-lg rounded-br-5xl flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 p-5 md:p-10 mb-10">
            <div className="w-full md:w-1/4 inline-flex items-center justify-center">
              <img
                className="w-1/2 md:w-full xl:w-3/4 h-auto object-cover rounded-full"
                src="https://doqvf81n9htmm.cloudfront.net/customer/user_default.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:w-2/3 md:flex-grow flex flex-col justify-center">
              <h2 className="text-xl font-medium mb-4">John</h2>
              <div className="flex flex-col space-y-2 text-gray-700">
                <p>一般會員</p>
              </div>
            </div>
          </div>

          <div className="sections">
            <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0">
              <div className="relative w-full md:w-1/4 flex flex-col space-y-14">
                <div className="border border-secondary-medium bg-rainbow-olight rounded-lg rounded-br-6xl shadow-md flex flex-col overflow-hidden text-center text-lg font-medium">
                  <a
                    href="#"
                    className="bg-primary-light last:border-none border-b border-dashed border-secondary-medium p-3"
                  >
                    會員資料
                  </a>
                  <a
                    href="#"
                    className="hover:bg-primary-light last:border-none border-b border-dashed border-secondary-medium p-3"
                  >
                    文章收藏
                  </a>
                  <a
                    href="#"
                    className="hover:bg-primary-light last:border-none border-b border-dashed border-secondary-medium p-3"
                  >
                    修改密碼
                  </a>
                  <a
                    href="#"
                    className="hover:bg-primary-light last:border-none border-b border-dashed border-secondary-medium p-3"
                  >
                    登出
                  </a>
                </div>
              </div>

              <div className="rounded-lg rounded-br-6xl border border-secondary-medium relative h-full w-full md:w-3/4 flex flex-col overflow-hidden shadow-md">
                <div className="relative border-b border-dashed border-secondary-medium p-3 flex justify-center items-center">
                  <h2 className="text-center text-lg font-medium">會員資料</h2>

                  <a
                    href="#"
                    className="absolute right-5 flex items-center text-primary-dark hover:text-primary-medium font-medium"
                  >
                    <div className="mr-1 fill-current">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 16.878 15"
                      >
                        <path
                          id="Icon_awesome-edit"
                          data-name="Icon awesome-edit"
                          d="M11.8,2.442,14.44,5.085a.287.287,0,0,1,0,.4l-6.4,6.4-2.719.3a.57.57,0,0,1-.63-.63l.3-2.719,6.4-6.4A.287.287,0,0,1,11.8,2.442Zm4.747-.671L15.114.341a1.146,1.146,0,0,0-1.618,0L12.459,1.378a.287.287,0,0,0,0,.4L15.1,4.426a.287.287,0,0,0,.4,0l1.037-1.037a1.146,1.146,0,0,0,0-1.618Zm-5.292,8.378v2.983H1.875V3.755H8.609a.36.36,0,0,0,.249-.1L10.03,2.48a.352.352,0,0,0-.249-.6H1.407A1.407,1.407,0,0,0,0,3.286V13.6a1.407,1.407,0,0,0,1.407,1.407H11.721A1.407,1.407,0,0,0,13.128,13.6V8.977a.352.352,0,0,0-.6-.249L11.355,9.9A.36.36,0,0,0,11.252,10.149Z"
                          transform="translate(0 1)"
                        />
                      </svg>
                    </div>
                    <p>編輯</p>
                  </a>
                </div>

                <div className="flex flex-col items-center w-full p-3 lg:py-10 lg:px-20">
                  <h3 className="bg-primary-light font-medium rounded-tl-full rounded-br-full py-2 px-10 self-start">
                    註冊資料
                  </h3>

                  <table className="table-auto text-left w-full mb-10 whitespace-nowrap">
                    <tbody>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">帳號：</th>
                        <td>tanya**********l.com</td>
                      </tr>
                      <tr className="bg-rainbow-olight border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">註冊模式：</th>
                        <td>Google 註冊</td>
                      </tr>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">姓名：</th>
                        <td>Chris</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3 className="bg-primary-light font-medium rounded-tl-full rounded-br-full py-2 px-10 self-start">
                    基本資料
                  </h3>

                  <table className="table-auto text-left w-full mb-10 whitespace-nowrap">
                    <tbody>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">聯絡地址：</th>
                        <td>臺北市中正區羅斯福路1絡地址聯絡地址</td>
                      </tr>
                      <tr className="bg-rainbow-olight border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">手機電話：</th>
                        <td>12345567</td>
                      </tr>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">市內電話：</th>
                        <td>12345567</td>
                      </tr>
                      <tr className="bg-rainbow-olight border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">生日：</th>
                        <td>1234:56:71</td>
                      </tr>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">性別：</th>
                        <td>女</td>
                      </tr>
                      <tr className="bg-rainbow-olight border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">婚姻狀態：</th>
                        <td>已婚</td>
                      </tr>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">是否有子女：</th>
                        <td>否</td>
                      </tr>
                      <tr className="bg-rainbow-olight border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">教育程度：</th>
                        <td>大學</td>
                      </tr>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">職業產業別：</th>
                        <td>資訊</td>
                      </tr>
                      <tr className="bg-rainbow-olight border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">職稱：</th>
                        <td>記者</td>
                      </tr>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">公司名稱：</th>
                        <td>公司名稱</td>
                      </tr>
                      <tr className="bg-rainbow-olight border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">公司電話：</th>
                        <td>02-13394934</td>
                      </tr>
                      <tr className="border-b border-secondary-medium">
                        <th className="w-1/4 h-12 px-5">統一編號：</th>
                        <td>11223421412</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
