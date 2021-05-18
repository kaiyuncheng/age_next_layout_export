import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const MemberInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <div className="rounded-lg rounded-br-6xl border border-secondary-medium shadow-md overflow-hidden h-full w-full">
      <div className="relative border-b border-dashed border-secondary-medium p-3 flex justify-center items-center">
        <h2 className="text-center text-lg font-medium">
          {isEdit ? '編輯會員資料' : '會員資料'}
        </h2>
        <button
          type="button"
          onClick={toggleEdit}
          className={clsx(
            isEdit ? 'hidden' : 'flex',
            'absolute right-5 items-center text-primary-dark hover:text-primary-medium font-medium',
          )}
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
        </button>
      </div>

      {isEdit ? (
        <div className="flex flex-col items-center w-full px-3 py-10 xs:py-20 lg:px-20">
          <h3 className="bg-primary-light font-medium rounded-tl-full rounded-br-full py-2 px-10 self-start">
            註冊資料
          </h3>

          <table className="table-auto text-left w-full mb-10 whitespace-nowrap">
            <tbody>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">帳號：</th>
                <td className="whitespace-normal break-all py-4">
                  tanya**********l.com
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">註冊模式：</th>
                <td className="whitespace-normal break-all py-4">
                  Google 註冊
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">姓名：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    name="username"
                    value="Chris"
                  />
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">照片：</th>
                <td className="whitespace-normal break-all py-4">
                  <label className="w-64 flex flex-col items-center px-4 py-6 border border-secondary-medium active:border-primary-medium active:ring active:ring-primary-medium active:ring-opacity-50 rounded-md shadow-sm tracking-wide cursor-pointer hover:bg-blue hover:text-primary-dark">
                    <svg
                      className="w-8 h-8 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      選擇照片上傳
                    </span>
                    <input type="file" className="hidden" />
                  </label>

                  <span className="text-sm">建議大小: 500*500</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="bg-primary-light font-medium rounded-tl-full rounded-br-full py-2 px-10 self-start">
            基本資料
          </h3>

          <table className="table-auto text-left w-full mb-10 whitespace-nowrap">
            <tbody>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">*聯絡地址：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    name="address"
                    value="臺北市中正區羅斯福路1絡地址聯絡"
                  />
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">*手機電話：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    id="cellphone"
                    name="cellphone"
                    value="12345567"
                  />
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">市內電話：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    id="phone"
                    name="telephone"
                    value="12345567"
                  />
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">生日：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    id="birth"
                    name="birthday"
                    value="1999/01/20"
                  />
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">性別：</th>
                <td className="whitespace-normal break-all py-4">
                  <select class="form-select w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none">
                    <option value="">請選擇</option>
                    <option value="1">男</option>
                    <option value="2" selected>
                      女
                    </option>
                  </select>
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">婚姻狀態：</th>
                <td className="whitespace-normal break-all py-4">
                  <select class="form-select w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none">
                    <option value="">請選擇</option>
                    <option value="1">已婚</option>
                    <option value="0" selected>
                      未婚
                    </option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">是否有子女：</th>
                <td className="whitespace-normal break-all py-4">
                  <select class="form-select w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none">
                    <option value="">請選擇</option>
                    <option value="1">是</option>
                    <option value="0" selected>
                      否
                    </option>
                  </select>
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">*教育程度：</th>
                <td className="whitespace-normal break-all py-4">
                  <select class="form-select w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none">
                    <option value="">請選擇</option>
                    <option value="1">國中以下</option>
                    <option value="2">高中職</option>
                    <option value="3">專科</option>
                    <option value="4">大學/科技院校</option>
                    <option value="5">研究所</option>
                    <option value="6">博士班</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">*個人年收入：</th>
                <td className="whitespace-normal break-all py-4">
                  <select class="form-select w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none">
                    <option value="">請選擇</option>
                    <option value="50萬元以下">50萬元以下</option>
                    <option value="51-100萬元">51-100萬元</option>
                    <option value="101-150萬元">101-150萬元</option>
                    <option value="151-200萬元">151-200萬元</option>
                    <option value="200-300萬元">200-300萬元</option>
                    <option value="300-500萬元">300-500萬元</option>
                    <option value="500萬以上">500萬以上</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">*職業產業別：</th>
                <td className="whitespace-normal break-all py-4">
                  <select class="form-select w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none">
                    <option value="">請選擇</option>
                    <option value="軍公教">軍公教</option>
                    <option value="資訊科技業">資訊科技業</option>
                    <option value="製造業">製造業</option>
                    <option value="服務業">服務業</option>
                    <option value="金融/保險業">金融/保險業</option>
                    <option value="娛樂/行銷">娛樂/行銷</option>
                    <option value="傳播/出版業">傳播/出版業</option>
                    <option value="運輸/旅遊業">運輸/旅遊業</option>
                    <option value="法律">法律</option>
                    <option value="藝術">藝術</option>
                    <option value="農漁牧">農漁牧</option>
                    <option value="自營商">自營商</option>
                    <option value="自由業">自由業</option>
                    <option value="學生">學生</option>
                    <option value="家管">家管</option>
                    <option value="已退休">已退休</option>
                    <option value="待業中">待業中</option>
                    <option value="其他">其他</option>
                  </select>
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">*職稱：</th>
                <td className="whitespace-normal break-all py-4">
                  <select class="form-select w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none">
                    <option value="">請選擇</option>
                    <option value="一般職員">一般職員</option>
                    <option value="基層主管">基層主管</option>
                    <option value="中高階主管">中高階主管</option>
                    <option value="專業經理人">專業經理人</option>
                    <option value="企業負責人">企業負責人</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">公司名稱：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    name="company"
                    value="XXX公司"
                  />
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">公司電話：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    name="companyPhone"
                    value="02-12345567"
                  />
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">統一編號：</th>
                <td className="whitespace-normal break-all py-4">
                  <input
                    className="form-input w-full border border-secondary-medium focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50 rounded-md shadow-sm outline-none focus:outline-none placeholder-gray-400"
                    type="text"
                    name="companyNumber"
                    value="1343423444"
                  />
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">喜好主題：</th>
                <td className="whitespace-normal break-all py-4">
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme1"
                      type="checkbox"
                      name="like"
                      value="台股"
                    />
                    台股
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme2"
                      type="checkbox"
                      name="like"
                      value="全球股市"
                    />
                    全球股市
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme3"
                      type="checkbox"
                      name="like"
                      value="債券基金"
                    />
                    債券基金
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme4"
                      type="checkbox"
                      name="like"
                      value="信用卡"
                    />
                    信用卡
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme5"
                      type="checkbox"
                      name="like"
                      value="理財"
                    />
                    理財
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme6"
                      type="checkbox"
                      name="like"
                      value="ETF"
                    />
                    ETF
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme7"
                      type="checkbox"
                      name="like"
                      value="科技產業動態"
                    />
                    科技產業動態
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme8"
                      type="checkbox"
                      name="like"
                      value="傳統產業動態"
                    />
                    傳統產業動態
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme9"
                      type="checkbox"
                      name="like"
                      value="金融產業動態"
                    />
                    金融產業動態
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme10"
                      type="checkbox"
                      name="like"
                      value="房地產"
                    />
                    房地產
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme11"
                      type="checkbox"
                      name="like"
                      value="保險"
                    />
                    保險
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme12"
                      type="checkbox"
                      name="like"
                      value="稅制"
                    />
                    稅制
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme13"
                      type="checkbox"
                      name="like"
                      value="勞保勞退"
                    />
                    勞保勞退
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme14"
                      type="checkbox"
                      name="like"
                      value="國際總經"
                    />
                    國際總經
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme15"
                      type="checkbox"
                      name="like"
                      value="政治社會"
                    />
                    政治社會
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme16"
                      type="checkbox"
                      name="like"
                      value="健康"
                    />
                    健康
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme17"
                      type="checkbox"
                      name="like"
                      value="生活消費"
                    />
                    生活消費
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme18"
                      type="checkbox"
                      name="like"
                      value="美食旅遊"
                    />
                    美食旅遊
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme19"
                      type="checkbox"
                      name="like"
                      value="品味收藏"
                    />
                    品味收藏
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme20"
                      type="checkbox"
                      name="like"
                      value="職場"
                    />
                    職場
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme21"
                      type="checkbox"
                      name="like"
                      value="教育"
                    />
                    教育
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme22"
                      type="checkbox"
                      name="like"
                      value="情感關係"
                    />
                    情感關係
                  </label>
                  <label class="inline-flex items-center mr-4 mb-4">
                    <input
                      className="form-checkbox text-primary-dark border border-secondary-medium focus:border-primary-medium mr-1"
                      id="theme23"
                      type="checkbox"
                      name="like"
                      value="退休"
                    />
                    退休
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col space-y-5 self-start mb-10">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-primary-dark border border-secondary-medium rounded-sm focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-800">
                訂閱幸福熟齡會員與排行榜電子報
              </span>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-primary-dark border border-secondary-medium rounded-sm focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-800 align-middle">
                接收幸福熟齡活動與優惠訊息
              </span>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-primary-dark border border-secondary-medium rounded-sm focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50"
              />
              <span className="ml-2 text-gray-800 align-middle">
                接收幸福熟齡通知簡訊
              </span>
            </div>
          </div>
          <button
            type="button"
            className="self-center bg-primary-dark hover:bg-primary-medium transition-all duration-200 ease-in-out rounded-lg h-10 w-full md:w-52 px-5 flex text-white items-center justify-center outline-none focus:outline-none"
            onClick={toggleEdit}
          >
            儲存變更
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full px-3 py-10 xs:py-20 lg:px-20">
          <h3 className="bg-primary-light font-medium rounded-tl-full rounded-br-full py-2 px-10 self-start">
            註冊資料
          </h3>

          <table className="table-auto text-left w-full mb-10 whitespace-nowrap">
            <tbody>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">帳號：</th>
                <td className="whitespace-normal break-all py-4">
                  tanya**********l.com
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">註冊模式：</th>
                <td className="whitespace-normal break-all py-4">
                  Google 註冊
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">姓名：</th>
                <td className="whitespace-normal break-all py-4">Chris</td>
              </tr>
            </tbody>
          </table>

          <h3 className="bg-primary-light font-medium rounded-tl-full rounded-br-full py-2 px-10 self-start">
            基本資料
          </h3>

          <table className="table-auto text-left w-full mb-10 whitespace-nowrap">
            <tbody>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">聯絡地址：</th>
                <td className="whitespace-normal break-all py-4">
                  臺北市中正區羅斯福路1絡地址聯絡
                </td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">手機電話：</th>
                <td className="whitespace-normal break-all py-4">12345567</td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">市內電話：</th>
                <td className="whitespace-normal break-all py-4">12345567</td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">生日：</th>
                <td className="whitespace-normal break-all py-4">1234:56:71</td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">性別：</th>
                <td className="whitespace-normal break-all py-4">女</td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">婚姻狀態：</th>
                <td className="whitespace-normal break-all py-4">已婚</td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">是否有子女：</th>
                <td className="whitespace-normal break-all py-4">否</td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">教育程度：</th>
                <td className="whitespace-normal break-all py-4">大學</td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">職業產業別：</th>
                <td className="whitespace-normal break-all py-4">資訊</td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">職稱：</th>
                <td className="whitespace-normal break-all py-4">記者</td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">公司名稱：</th>
                <td className="whitespace-normal break-all py-4">公司名稱</td>
              </tr>
              <tr className="bg-rainbow-olight border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">公司電話：</th>
                <td className="whitespace-normal break-all py-4">
                  02-13394934
                </td>
              </tr>
              <tr className="border-b border-secondary-medium">
                <th className="w-1/4 py-4 pl-2 sm:px-5">統一編號：</th>
                <td className="whitespace-normal break-all py-4">
                  11223421412
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MemberInfo;
