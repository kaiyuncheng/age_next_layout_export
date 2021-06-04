import Link from "next/link";
import React, { useState } from 'react';
import axios from "../utils/axios";
import { useRouter } from 'next/router'

export default function MemberLogin() {
  const [email, setEmail] = useState(
    typeof window !== 'undefined' && localStorage.getItem('rememberMail') ? localStorage.getItem('rememberMail') : ''
  );
  const [password, setPassword] = useState();
  const [rememberme, setRememberme] = useState(
    typeof window !== 'undefined' && localStorage.getItem('rememberMail') ? true : false
  );

  const router = useRouter();

  const submit = async function() {
    // todo 前端檢測
    if(!email || email.length < 5) {
      alert('mail none')
      return false;
    }
    if(!password || password.length < 5) {
      alert('password none')
      return false;
    }
    try {
      const res = await axios.post(
        'Customer/login',
        JSON.stringify({
          email: email,
          password: password
        })
      )
      if(res.data && res.data.code) {
        const { data } = res;
        switch(data.code) {
          case 200:
            alert(data.messages);
            // 寫入token
            localStorage.setItem('btnetThebetteraging', data.token);
            if(rememberme) {
              localStorage.setItem('rememberMail', email);
            }
            // 跳轉
            router.push('/');
            break;
          case 403:
            alert(data.messages);
            break;
          default:
            // 未知錯誤
        }
      } else {
        // 未知錯誤
      }
    } catch (error) {
      alert('登入送出失敗');
      console.log(error);
    }
  }
  
  return (
    <div className="login_member w-full md:w-1/2">
      <div className="h-full border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex flex-col">
        <h2 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
          會員登入
        </h2>
        <div className="flex flex-col justify-center items-center space-y-5 py-20 px-3 lg:px-10 xl:px-20 2xl:px-32">
          <div className="flex flex-col space-y-4 xs:w-3/4 w-full">
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
                  placeholder="會員Email帳號"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="password"
                  placeholder="密碼"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="login_remember">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary-dark border border-secondary-medium rounded-sm focus:border-primary-medium focus:ring focus:ring-primary-medium focus:ring-opacity-50"
                  defaultChecked={rememberme}
                  onClick={() => {
                    if(rememberme) localStorage.removeItem('rememberMail');
                    setRememberme(!rememberme);
                  }}
                />
                <span className="ml-2 text-gray-800 text-sm whitespace-nowrap">
                  記住這個帳號
                </span>
              </label>
            </div>

            <button
              type="button"
              className="bg-primary-dark hover:bg-primary-medium transition-all duration-200 ease-in-out rounded-lg h-10 w-full px-5 flex text-white items-center justify-center outline-none focus:outline-none"
              onClick={submit}
            >
              立即登入
            </button>
          </div>

          <div>
            <Link href="/forgetPassword">
              <a
                className="text-primary-dark hover:text-gray-600 transition-all duration-200 ease-in-out text-sm pr-3 border-r border-primary-medium"
              >
                忘記密碼
              </a>
            </Link>
            <Link href="/register">
              <a
                className="text-primary-dark hover:text-gray-600 transition-all duration-200 ease-in-out text-sm ml-2"
              >
                註冊會員
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
  
}