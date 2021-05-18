import Link from 'next/link';

const ChangePassword = () => {
  return (
    <div className="rounded-lg rounded-br-6xl border border-secondary-medium shadow-md overflow-hidden h-full w-full">
      <div className="relative border-b border-dashed border-secondary-medium p-3 flex justify-center items-center">
        <h2 className="text-center text-lg font-medium">修改密碼</h2>
      </div>

      <div className="flex flex-col items-center w-full px-3 py-10 xs:py-20 lg:px-20">
        <div className="xs:w-3/4 lg:w-2/3 w-full">
          <div className="flex flex-col space-y-4 w-full mb-8">
            <label className="flex flex-col space-y-2 w-full relative">
              <span className="w-full sm:w-1/4 flex-none">舊密碼：</span>
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
                type="password"
                name="oldPassword"
              />
            </label>

            <label className="flex flex-col space-y-2 w-full relative">
              <span className="w-full sm:w-1/4 flex-none">新密碼：</span>
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
                type="password"
                name="newPassword"
              />
            </label>

            <label className="flex flex-col space-y-2 w-full relative">
              <span className="w-full sm:w-1/4 flex-none">確認新密碼：</span>
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
                type="password"
                name="confirmNewPassword"
              />
            </label>
          </div>
          <button
            type="button"
            className="bg-primary-dark hover:bg-primary-medium transition-all duration-200 ease-in-out rounded-lg h-10 w-full px-5
                        text-white outline-none focus:outline-none"
          >
            確定修改
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
