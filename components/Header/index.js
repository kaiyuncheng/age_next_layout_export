import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useMenuContext } from "../../context/menu";
import Topbar from "./Topbar";
import Banner from "../utils/googletags/Banner";
import SearchBar from "../Header/SearchBar";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [top, setTop] = useState(true);
  const { menuData, setMenuData } = useMenuContext();
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 130 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const toggleOpen = (id) => {
    setMenuData((prevMenuData) =>
      prevMenuData.map((item) => {
        if (item.category_id !== id) {
          return item;
        } else {
          return {
            ...item,
            open: !item.open,
          };
        }
      })
    );
  };

  return (
    <header className="shadow-md fixed top-0 z-50 w-full bg-white">
      <Topbar />
      <div className="mainbar">
        <div className="max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-2 h-20 md:h-24 flex justify-between items-center">
          <button
            onClick={toggleMenu}
            className="mainbar_burger flex items-center justify-center md:hidden hover:bg-primary-light rounded-full transform transition-all duration-300 ease-in-out text-primary-dark h-12 w-12 relative focus:outline-none outline-none"
          >
            <span className="sr-only">Open menu</span>
            <div className="">
              <span
                aria-hidden="true"
                className={clsx(
                  !menuState && '-translate-y-2',
                  menuState && 'rotate-45 translate-y-0',
                  'block absolute left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-current transform transition duration-500 ease-in-out',
                )}
              ></span>
              <span
                aria-hidden="true"
                className={clsx(
                  menuState && 'opacity-0',
                  'block absolute left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-current transform transition duration-500 ease-in-out',
                )}
              ></span>
              <span
                aria-hidden="true"
                className={clsx(
                  !menuState && 'translate-y-2',
                  menuState && '-rotate-45 translate-y-0',
                  'block absolute left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-current transform transition duration-500 ease-in-out',
                )}
              ></span>
            </div>
          </button>

          <div className="mainbar_group flex items-center md:mr-10">
            <div className="mainbar_logo md:mr-10">
              <Link href="/">
                <a>
                  <h1 className="hidden">
                    幸福熟齡 - 從今開始，一同勾勒熟齡的美好
                  </h1>
                  <svg
                    className="h-12 md:h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="197.479"
                    height="50"
                    viewBox="0 0 197.479 50"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.63"
                        y1="0.007"
                        x2="0.351"
                        y2="0.724"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stopColor="#ff5f00" />
                        <stop offset="0.26" stopColor="#ff5f00" />
                        <stop offset="1" stopColor="#ffb07a" />
                      </linearGradient>
                      <linearGradient
                        id="linear-gradient-2"
                        x1="1.038"
                        y1="0.167"
                        x2="0.201"
                        y2="1.074"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stopColor="#ff5f00" />
                        <stop offset="1" stopColor="#ff9a57" />
                      </linearGradient>
                      <linearGradient
                        id="linear-gradient-3"
                        x1="0.975"
                        y1="0.813"
                        x2="0.459"
                        y2="0.439"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stopColor="#ffceab" />
                        <stop offset="0.415" stopColor="#ff954f" />
                        <stop offset="0.637" stopColor="#ff8d42" />
                        <stop offset="1" stopColor="#ff5f00" />
                      </linearGradient>
                      <linearGradient
                        id="linear-gradient-4"
                        x1="0.5"
                        y1="0.972"
                        x2="0.5"
                        y2="0.016"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0.099" stopColor="#ff5f00" />
                        <stop offset="0.415" stopColor="#eeb819" />
                        <stop offset="0.637" stopColor="#c6cd37" />
                        <stop offset="0.809" stopColor="#25a999" />
                        <stop offset="1" stopColor="#a14f90" />
                      </linearGradient>
                    </defs>
                    <g
                      id="Group_398"
                      data-="Group 398"
                      transform="translate(-261 -66.57)"
                    >
                      <g
                        id="Group_391"
                        data-name="Group 391"
                        transform="translate(261 66.57)"
                      >
                        <g
                          id="Group_397"
                          data-name="Group 397"
                          transform="translate(0)"
                        >
                          <g
                            id="Group_394"
                            data-name="Group 394"
                            transform="translate(0)"
                          >
                            <g
                              id="Group_392"
                              data-name="Group 392"
                              transform="translate(0.001)"
                            >
                              <g
                                id="Group_391-2"
                                data-name="Group 391"
                                transform="translate(9.916 5.261)"
                              >
                                <path
                                  id="Path_4156"
                                  data-name="Path 4156"
                                  d="M165.6,516.183a33.979,33.979,0,0,0-6.011-.8,22.79,22.79,0,0,0-7.667,9.992c-2.04,4.942.29,5.323,2.255,2.218,1.7-2.679,4.23-7.842,5.4-7.351,1.117.465-1.283,5.008-1.993,9.4-.89,5.5-.187,7.474,2.605.876C162.18,525.809,163.93,521.011,165.6,516.183Z"
                                  transform="translate(-150.093 -498.157)"
                                  fillRule="evenodd"
                                  fill="url(#linear-gradient)"
                                />
                                <path
                                  id="Path_4157"
                                  data-name="Path 4157"
                                  d="M167.547,481.4c-3.928,10.54-7.382,11.448-16.085,12.742-4.1.609-2.84,2.81,1.234,2.318a35.092,35.092,0,0,1,5.739-.226,23.431,23.431,0,0,1,7.5-3.571c1.175-3.487,2.334-6.981,3.532-10.462S168.976,477.57,167.547,481.4Z"
                                  transform="translate(-148.941 -479.012)"
                                  fillRule="evenodd"
                                  fill="url(#linear-gradient-2)"
                                />
                                <path
                                  id="Path_4158"
                                  data-name="Path 4158"
                                  d="M168.83,498.513c2.36,1.084,3.9-3.328,1.544-4.411S166.469,497.429,168.83,498.513Z"
                                  transform="translate(-158.792 -486.866)"
                                  fill="#ff5f00"
                                  fillRule="evenodd"
                                />
                              </g>
                              <path
                                id="Path_4159"
                                data-name="Path 4159"
                                d="M171.861,476.935c1.114,1.771-.554,2.3-1.21,1.284-8.372-11.753-29.988-10.524-36.8,4.333-5.027,10.974.513,24.365,12.323,27.951,6.774,2.059,12.337-1.638,13.223-7.442.838-5.5-2.389-11.844-11.989-12.674,15.143-10.581,27.268-.11,26.779,11.6-.439,10.512-13.815,20.481-30.617,13.7-13.181-5.319-19.548-21.257-12.928-33.977C139.3,465.087,161.068,463.449,171.861,476.935Z"
                                transform="translate(-128.001 -467.903)"
                                fillRule="evenodd"
                                fill="url(#linear-gradient-3)"
                              />
                            </g>
                            <g id="Group_393" data-name="Group 393">
                              <path
                                id="Path_4160"
                                data-name="Path 4160"
                                d="M132.516,495.668a20.5,20.5,0,0,1,1.337-13.117c6.809-14.857,28.425-16.086,36.8-4.333.656,1.012,2.324.487,1.21-1.284-10.794-13.486-32.566-11.848-41.216,4.774a23.592,23.592,0,0,0-2.3,14.938Z"
                                transform="translate(-128 -467.903)"
                                fillRule="evenodd"
                                fill="url(#linear-gradient-4)"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_396"
                            data-name="Group 396"
                            transform="translate(43.654 6.147)"
                          >
                            <path
                              id="Path_4161"
                              data-name="Path 4161"
                              d="M372.8,480.883H223.426A29.05,29.05,0,0,1,220.18,522.3H372.8a1.3,1.3,0,0,0,1.2-1.308v-39A1.124,1.124,0,0,0,372.8,480.883Z"
                              transform="translate(-220.18 -480.883)"
                              fill="#ff5f00"
                            />
                            <g
                              id="Group_395"
                              data-name="Group 395"
                              transform="translate(18.258 4.19)"
                            >
                              <path
                                id="Path_4162"
                                data-name="Path 4162"
                                d="M269.961,509.357H260.98l-.227-1.043h6.138l-.4-.418a3.511,3.511,0,0,1-.455-1.841,9.357,9.357,0,0,0-.34-2.432,7.939,7.939,0,0,0-1.109-2.4h-5.6l-.255-1.042h11.34v-4.935h-8.753l-.257-1.041h9.01v-4.03c0-.1.056-.14.2-.14a13.036,13.036,0,0,1,2.956.626c.369.173.569.381.569.625,0,.313-.229.486-.682.66-.114.035-.171.139-.171.348v1.911h3.524l.341-.313,1.619-2.328a.328.328,0,0,1,.54-.069,9.286,9.286,0,0,1,2.558,2.953c.143.209.2.347.114.521a.567.567,0,0,1-.539.277h-8.158v4.935H279.6l.34-.313,1.592-2.328a.354.354,0,0,1,.569-.07,9.684,9.684,0,0,1,2.558,2.953.514.514,0,0,1,.085.522c-.057.174-.256.278-.541.278H277.18l1.307.764c.313.209.454.417.426.66-.028.209-.17.313-.484.348l-.34.243a16.59,16.59,0,0,1-2.047,3.162l-1.733,1.911H276.7l.484-.277,1.534-2.154a.307.307,0,0,1,.483-.07,8.988,8.988,0,0,1,2.33,2.745.532.532,0,0,1,.114.556.622.622,0,0,1-.539.243h-8.271v5.072h6.2l.34-.312,1.619-2.329c.143-.208.314-.243.541-.069a9.692,9.692,0,0,1,2.558,2.953c.142.209.2.348.113.522a.587.587,0,0,1-.568.278h-10.8v5.559a1.244,1.244,0,0,1-.654,1.217,1.645,1.645,0,0,1-1.734-.071,1.283,1.283,0,0,1-.483-1.146v-5.559H259.332l-.255-1.042h10.884Zm-3.836-8.131a6.5,6.5,0,0,1,1.989,1.563,5.012,5.012,0,0,1,1.308,2.606,3.741,3.741,0,0,1-.425,2.188,2.459,2.459,0,0,1-.683.73h5.257a21.354,21.354,0,0,0,1.137-3.231l.711-3.613v-.243Z"
                                transform="translate(-258.735 -489.892)"
                                fill="#fefefe"
                              />
                              <path
                                id="Path_4163"
                                data-name="Path 4163"
                                d="M336.015,522.05a1.794,1.794,0,0,1-1.819-.036,1.157,1.157,0,0,1-.426-1.112V508.534a13.3,13.3,0,0,1-3.212,2.293c-.171.07-.255.034-.285-.07l.086-.277a28.286,28.286,0,0,0,2.671-3.058,22.939,22.939,0,0,0,2.558-4.238,23.945,23.945,0,0,0,1.564-4.69h-6.509l-.256-1.078h6.451a.287.287,0,0,0,.285-.069l.965-.939a.258.258,0,0,1,.37-.035,7.4,7.4,0,0,1,1.761,1.564,1.267,1.267,0,0,1,.4.9c-.028.208-.257.382-.654.452-.114.034-.256.208-.4.59a37.361,37.361,0,0,1-2.53,4.794l-.4.556a6.2,6.2,0,0,1,2.53,1.286,4.239,4.239,0,0,1,1.307,2.015,3.019,3.019,0,0,1-.2,1.876,1.587,1.587,0,0,1-.938.938,1.07,1.07,0,0,1-1.108-.348,3.167,3.167,0,0,1-.539-1.529,8.55,8.55,0,0,0-.484-1.945l-.624-1.216V520.9A1.143,1.143,0,0,1,336.015,522.05Zm.369-30.68a2.858,2.858,0,0,1,.71,3.961,1.738,1.738,0,0,1-1.25.9,1.318,1.318,0,0,1-1.25-.59,3.851,3.851,0,0,1-.4-1.877,6.206,6.206,0,0,0-.142-1.563,4.79,4.79,0,0,0-.568-1.6c-.17-.209-.227-.382-.142-.521.057-.139.227-.139.541,0A5.223,5.223,0,0,1,336.384,491.37Zm4.264,2.224-.256-1.042h10.4l.34-.314,1.621-2.327c.141-.209.312-.243.539-.069a9.689,9.689,0,0,1,2.558,2.952c.142.209.2.348.113.522a.587.587,0,0,1-.568.278H340.648Zm0,12.612c-.029-.1.056-.139.255-.1a10.077,10.077,0,0,1,2.558,1.39h8.384l1.051-1.39a.327.327,0,0,1,.456-.069,7.922,7.922,0,0,1,2.473,1.529.755.755,0,0,1,.312.7,1.015,1.015,0,0,1-.6.625.416.416,0,0,0-.256.451v11.536a1.235,1.235,0,0,1-.654,1.146,2.131,2.131,0,0,1-1.137.313,1.01,1.01,0,0,1-1.08-1.32v-.521h-8.925v.1a1.459,1.459,0,0,1-.455,1.216,2.352,2.352,0,0,1-1.307.452,1.341,1.341,0,0,1-.881-.279,1.114,1.114,0,0,1-.2-.869V506.206Zm3.836-1.529a2.214,2.214,0,0,1-1.307.487,1.3,1.3,0,0,1-.909-.313,1.16,1.16,0,0,1-.171-.834v-7.991c-.029-.1.056-.139.226-.07a7.963,7.963,0,0,1,2.389,1.216h5.854l.369-.243.825-.973a.475.475,0,0,1,.312,0,12.133,12.133,0,0,1,2.161,1.772.734.734,0,0,1,.256.591c0,.243-.171.451-.512.556-.084,0-.142.138-.142.347v3.231l.313.556a1.344,1.344,0,0,1,.143.661c0,.243-.057.383-.143.383h-9.293A1.234,1.234,0,0,1,344.484,504.677Zm2.046,3.857h-3.041v4.9h3.041Zm-3.041,10.876h3.041v-4.9h-3.041Zm7.475-16.574v-4.621h-6.026v4.794h5.941Zm-1.591,10.6h3.041v-4.9h-3.041Zm0,5.977h3.041v-4.9h-3.041Z"
                                transform="translate(-296.395 -489.73)"
                                fill="#fefefe"
                              />
                              <path
                                id="Path_4164"
                                data-name="Path 4164"
                                d="M406.838,515.046c.085,0,.142.1.171.278a10.5,10.5,0,0,1-.256,3.753,5.829,5.829,0,0,1-1.279,2.744,1.7,1.7,0,0,1-1.449.383,1.444,1.444,0,0,1-1.052-.9,2.081,2.081,0,0,1,.028-1.6,2.012,2.012,0,0,1,1.109-1.216,4.453,4.453,0,0,0,1.392-1.008,7.134,7.134,0,0,0,1.165-2.223C406.7,515.081,406.753,515.011,406.838,515.046Zm-3.581-19.978-.285-1.043H409a2.863,2.863,0,0,1-.427-1.6l-.056-.9-.369-.938c-.143-.173-.2-.312-.143-.451s.2-.14.455-.035a4.172,4.172,0,0,1,1.99.417,2.476,2.476,0,0,1,1.051,1.112,2.891,2.891,0,0,1-.284,1.911l-.285.486h1.394l.454-.278,1.194-2.015c.2-.277.4-.347.625-.1a8.424,8.424,0,0,1,1.648,2.4.99.99,0,0,1,.17.73.5.5,0,0,1-.511.313H403.258Zm.994,8.3h7.9l.2-.14,1.023-.694a.389.389,0,0,1,.4.138,13.126,13.126,0,0,1,2.16,2.4.6.6,0,0,1-.029.694c-.142.175-.341.208-.624.035h-.4l-2.643,1.007a.7.7,0,0,1-.425.452.5.5,0,0,0-.228.486v.278l4.207-.66c.255-.036.367.035.4.208.029.139-.084.277-.284.417l-3.1,1.112-1.223.382V512.3a2.973,2.973,0,0,1-.626,2.085,3.47,3.47,0,0,1-2.387,1.077c-.17.035-.255-.035-.255-.208a3.45,3.45,0,0,0-2.1-3.093.32.32,0,0,1-.171-.347c.028-.173.113-.244.227-.208l1.563.07c.6.069.853-.14.853-.66v-.66l-3.183.833c-.427.1-.654.243-.682.417-.085.243-.2.381-.341.417-.2,0-.341-.1-.428-.382l-.368-1.425-.341-1.528c-.028-.209.057-.279.255-.243a39.77,39.77,0,0,0,4.888-.174h.2v-2.327c0-.175.057-.244.2-.244l2.018.209,1.336-1.46h-7.73Zm2.985-1.425a2.221,2.221,0,0,1-1.308.486,1.2,1.2,0,0,1-.882-.313,1.025,1.025,0,0,1-.2-.834v-5.8c-.028-.14.056-.173.227-.1a9.529,9.529,0,0,1,2.586,1.355h4.348l.342-.243.852-.938a.217.217,0,0,1,.284,0,11.787,11.787,0,0,1,2.188,1.771.735.735,0,0,1,.227.556c0,.243-.17.452-.511.556-.086.034-.143.174-.143.382v1.389l.227.313a1.5,1.5,0,0,1,.143.7c0,.243-.057.382-.143.382H407.52Zm.453-4.169v2.745h4.691v-2.745Zm6.139,19.318a4.343,4.343,0,0,1,.911,2.293,3.423,3.423,0,0,1-.682,2.05,1.636,1.636,0,0,1-1.365.694,1.335,1.335,0,0,1-1.165-.833,3.9,3.9,0,0,1-.2-1.946,6.612,6.612,0,0,0,.028-1.842,6.475,6.475,0,0,0-.483-1.98.59.59,0,0,1-.086-.591q.129-.157.511.1A7.232,7.232,0,0,1,413.829,517.1Zm9.379-20.082,1.108-1.251c.085-.069.2-.069.341.035a8.223,8.223,0,0,1,1.9,1.737.971.971,0,0,1,.229.626c-.028.243-.256.417-.627.556a.467.467,0,0,0-.284.348l-.4,5.108v2.675a7.551,7.551,0,0,0,.37,2.015c.114.313.255.487.4.487a.722.722,0,0,0,.454-.382l1.252-2.919c.085-.243.2-.348.34-.313s.2.174.227.417c-.255,1.495-.482,2.954-.624,4.343a2.824,2.824,0,0,0,.17,1.425,2.149,2.149,0,0,1,.4,1.459,1.047,1.047,0,0,1-.739,1.008,1.81,1.81,0,0,1-1.648-.417,5.96,5.96,0,0,1-1.792-2.467,14.8,14.8,0,0,1-.936-4.378c-.143-1.876-.143-4.9-.029-9.068h-1.961l-.227,2.606c-.17,1.389-.4,2.711-.682,4l.171.138a6.806,6.806,0,0,1,1.676,1.947,4.19,4.19,0,0,1,.369,1.807,1.378,1.378,0,0,1-.567,1.111.976.976,0,0,1-1.137,0,3.454,3.454,0,0,1-1.052-1.285l-.369-.73a12.988,12.988,0,0,1-2.643,4.273,13.615,13.615,0,0,1-3.155,2.4.216.216,0,0,1-.312-.069.393.393,0,0,1,.142-.382,13.225,13.225,0,0,0,2.132-2.955,18.51,18.51,0,0,0,1.62-3.857l.538-2.259a26.813,26.813,0,0,0-2.1-2.745.336.336,0,0,1-.056-.278c.056-.14.143-.173.284-.069l.852.417,1.308.834.085-.626.37-4.273h-1.99l-.256-1.042h2.275l.113-5.143v-1.563c0-.208.058-.313.143-.347a17.857,17.857,0,0,1,2.927.382q.682.1.682.521a.615.615,0,0,1-.513.591.526.526,0,0,0-.284.416l-.255,5.143Zm-2.956,19.8a4.829,4.829,0,0,1,1.194,2.293,3.374,3.374,0,0,1-.484,2.119,1.841,1.841,0,0,1-1.279.939,1.377,1.377,0,0,1-1.25-.626,4.036,4.036,0,0,1-.369-1.91,7.318,7.318,0,0,0-.227-2.015,6.917,6.917,0,0,0-.852-2.051.593.593,0,0,1-.115-.59c.057-.07.228-.07.513.035A7.9,7.9,0,0,1,420.253,516.818Zm6.509-.278a4.382,4.382,0,0,1,1.391,2.258,3.512,3.512,0,0,1-.284,2.189,1.877,1.877,0,0,1-1.166,1.077,1.293,1.293,0,0,1-1.307-.486,4.043,4.043,0,0,1-.541-1.841,7.575,7.575,0,0,0-.454-2.085,6.632,6.632,0,0,0-1.051-2.05c-.2-.208-.256-.383-.2-.557.057-.1.228-.1.541-.034A7.628,7.628,0,0,1,426.762,516.54Z"
                                transform="translate(-334.589 -489.848)"
                                fill="#fefefe"
                              />
                              <path
                                id="Path_4165"
                                data-name="Path 4165"
                                d="M474.272,499.732l-.256-1.042h1.933v-6.359c0-.1.055-.138.2-.138a13.076,13.076,0,0,1,2.957.66c.37.173.568.382.568.591,0,.313-.227.521-.683.7-.085.035-.142.139-.142.347v4.2h1.421v-8.512c0-.1.057-.14.2-.14a13.31,13.31,0,0,1,2.983.626c.341.173.539.381.539.625,0,.313-.227.486-.653.66-.113.035-.171.139-.171.348v1.911h.682l.227-.244,1.166-1.875c.142-.313.34-.313.6-.1a8.986,8.986,0,0,1,1.449,2.154.948.948,0,0,1,.143.8.461.461,0,0,1-.482.312h-3.781v3.44h.739l.456-.277,1.193-2.016c.2-.278.4-.347.626-.139a8.621,8.621,0,0,1,1.648,2.432.971.971,0,0,1,.17.73.5.5,0,0,1-.512.312H474.272Zm.681,1.807v-.348c0-.1.057-.174.171-.139a15.555,15.555,0,0,1,2.615.452.852.852,0,0,1,.681.451l.057-.729v-.66c0-.1.028-.14.113-.14l2.019.348c.284.07.427.209.427.382s-.143.314-.4.383l-.142.208-.482,1.7.8.313.34.277.313-2.885.056-.694c0-.071.029-.1.114-.1a6.733,6.733,0,0,1,2.018.521c.256.1.4.243.37.416,0,.174-.142.313-.37.348l-.171.173-.681,2.119.8.383a2.568,2.568,0,0,1,.567.591v-3.718c0-.1.059-.174.171-.139a15.073,15.073,0,0,1,2.616.452c.452.1.71.348.71.626,0,.313-.2.556-.6.695a.577.577,0,0,0-.255.486v1.042a30.625,30.625,0,0,0,2.7-5.907,27.909,27.909,0,0,0,1.449-7.609v-.486a.34.34,0,0,1,.257-.277,10.828,10.828,0,0,1,2.9.382c.4.1.626.277.626.59.027.278-.171.453-.511.556a.386.386,0,0,0-.257.348,14.415,14.415,0,0,0,2.332,5.628,13.787,13.787,0,0,0,4.546,4.344.306.306,0,0,1,.2.348c0,.1-.086.174-.256.208a2.418,2.418,0,0,0-1.563.695,3.747,3.747,0,0,0-.967,1.356c-.085.242-.256.278-.455.035a13.636,13.636,0,0,1-3.183-5.49,29.368,29.368,0,0,1-1.137-5.524,30.628,30.628,0,0,1-2.53,6.184,17.792,17.792,0,0,1-4.064,5.212h-.085V521.1a1.153,1.153,0,0,1-.654,1.112,1.493,1.493,0,0,1-1.563-.07.9.9,0,0,1-.428-.833h-7.047l-.17.1a1.43,1.43,0,0,1-1.564-.1.887.887,0,0,1-.4-.87v-18.9Zm2.643,6.184a22.285,22.285,0,0,0,.6-2.988l.2-2.363a.926.926,0,0,1-.569.452.652.652,0,0,0-.228.486Zm0,9.937.4-2.223.371-3.892v-.659c0-.105.028-.174.113-.174a6.9,6.9,0,0,1,2.018.382c.285.069.425.208.425.417,0,.174-.141.313-.4.348l-.143.208-.427,1.633a2.534,2.534,0,0,1,.768.556l.4.486.37-3.127v-.66c.028-.1.057-.174.142-.174l2.018.521c.256.105.4.243.37.418,0,.208-.142.312-.37.347l-.171.173-.624,2.12.938.764.368.486v-9.1a1.122,1.122,0,0,1-.653.59.683.683,0,0,1-.767-.243,2.029,2.029,0,0,1-.284-1.042l-.114-.66-.314.7a13.166,13.166,0,0,1-1.762,2.814h-.143v-.174l.541-1.911a.694.694,0,0,1-.568-.243,2.022,2.022,0,0,1-.369-1.007l-.143-.66-.341.8a10.609,10.609,0,0,1-1.505,2.641H477.6Zm6.564,2.6v-2.257a1.12,1.12,0,0,1-.567.347.8.8,0,0,1-.739-.347,1.93,1.93,0,0,1-.256-1.042,5.78,5.78,0,0,0-.171-1.355l-.426.974a12.813,12.813,0,0,1-1.819,3.057h-.169v-.174c.227-.695.482-1.528.681-2.432l-.342.1a.728.728,0,0,1-.681-.382,2.033,2.033,0,0,1-.227-1.077v-.418l-.4,1.008a13.759,13.759,0,0,1-1.449,2.675v1.32Zm-6.536-11.4h4.462l.682-1.389c.086-.209.2-.209.286,0l.994,1.389c.084,0,.112.174.112.487,0,.381-.112.556-.312.556h-6.025Zm10.317,0h6.935a.755.755,0,0,0,.426-.278l.967-.939a.369.369,0,0,1,.454,0,13.761,13.761,0,0,1,2.7,2.05.664.664,0,0,1,.169.7c-.084.208-.283.278-.568.313l-.369.139c-1.648,1.946-3.127,3.649-4.547,5.073a6.788,6.788,0,0,1,1.847,2.259,4.848,4.848,0,0,1,.342,2.467,2.2,2.2,0,0,1-.8,1.493,1.029,1.029,0,0,1-1.166-.1,2.4,2.4,0,0,1-.824-1.251,19.434,19.434,0,0,0-1.676-4.134,21.5,21.5,0,0,0-2.415-3.579c-.085-.14-.115-.243-.057-.348s.142-.1.255-.035a27.138,27.138,0,0,1,3.723,2.536,38.1,38.1,0,0,0,2.217-5.315H488.2Zm3.211-5.455.285-.174,1.505-1.841c.171-.313.37-.348.626-.174a13.506,13.506,0,0,1,2.615,2.571.468.468,0,0,1,.115.487c-.058.139-.229.208-.484.208h-6.281l-.256-1.076h1.875Z"
                                transform="translate(-372.065 -489.892)"
                                fill="#fefefe"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="mainbar_search hidden md:block w-72 lg:w-96 relative border border-grey-500 rounded-br-full">
              <SearchBar />
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="mainbar_search_mobile block md:hidden transform transition-all duration-300 ease-in-out hover:bg-primary-light rounded-full focus:outline-none outline-none"
          >
            <div className="icon h-12 w-12 flex items-center justify-center fill-current text-primary-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path
                  id="Icon_awesome-search"
                  data-name="Icon awesome-search"
                  d="M15.78,13.833l-3.115-3.115a.749.749,0,0,0-.531-.219h-.509A6.5,6.5,0,1,0,10.5,11.624v.509a.749.749,0,0,0,.219.531l3.115,3.115a.747.747,0,0,0,1.059,0l.884-.884a.753.753,0,0,0,0-1.062ZM6.5,10.5a4,4,0,1,1,4-4A4,4,0,0,1,6.5,10.5Z"
                />
              </svg>
            </div>
          </button>

          <div className="mainbar_banner hidden lg:block">
            <Banner adId="thebetteraging_pc_all_300x100" />
          </div>
        </div>
      </div>

      {/* <!-- PC menu --> */}
      <nav className="main_menu md:block hidden">
        <ul className="max-w-screen-2xl mx-auto h-10 flex items-center">
          {menuData &&
            menuData.map((item, i) => {
              return (
                <li key={i} className="group flex-grow relative">
                  {item.link ? (
                    item.link.charAt(0) === '/' ? (
                      <Link href={item.link}>
                        <a className="main_menu_btn flex items-center justify-center relative w-full h-10 rounded-br-full rounded-tl-full transition-all duration-500 group-hover:bg-primary-light focus-within:bg-primary-light outline-none focus:outline-none">
                          <h2>{item.name}</h2>
                          <span
                            className={clsx(
                              item.color,
                              'absolute w-full h-1 left-0 bottom-0 border',
                            )}
                          ></span>
                        </a>
                      </Link>
                    ) : (
                      <a
                        href={item.link}
                        rel="noreferrer"
                        target="_blank"
                        className="main_menu_btn flex items-center justify-center relative w-full h-10 rounded-br-full rounded-tl-full transition-all duration-500 group-hover:bg-primary-light focus-within:bg-primary-light outline-none focus:outline-none"
                      >
                        <h2>{item.name}</h2>
                        <span
                          className={clsx(
                            item.color,
                            'absolute w-full h-1 left-0 bottom-0 border',
                          )}
                        ></span>
                      </a>
                    )
                  ) : (
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_self"
                      className="main_menu_btn flex items-center justify-center relative w-full h-10 rounded-br-full rounded-tl-full transition-all duration-500 group-hover:bg-primary-light focus-within:bg-primary-light outline-none focus:outline-none"
                    >
                      <h2>{item.name}</h2>
                      <span
                        className={clsx(
                          item.color,
                          'absolute w-full h-1 left-0 bottom-0 border',
                        )}
                      ></span>
                    </a>
                  )}
                  <ul className="block transform origin-top scale-y-0 transition-all duration-300 group-hover:scale-y-100 absolute top-10 left-0 w-full bg-rainbow-olight shadow-md rounded-b-lg overflow-hidden">
                    {item.under_menu &&
                      item.under_menu.map((item, i) => {
                        return (
                          <li
                            key={i}
                            className="border-b last:border-none border-primary-light"
                          >
                            {item.link.charAt(0) === '/' ||
                            item.link == false ? (
                              <Link href={item.link || '/'}>
                                <a className="link_1 relative flex items-center justify-center w-full h-10 transition duration-300 hover:bg-primary-light hover:overflow-hidden outline-none focus:outline-none">
                                  <h2>{item.name}</h2>
                                </a>
                              </Link>
                            ) : (
                              <a
                                href={item.link}
                                rel="noreferrer"
                                target="_blank"
                                className="relative flex items-center justify-center w-full h-10 transition duration-300 hover:bg-primary-light hover:overflow-hidden outline-none focus:outline-none"
                              >
                                <h2>{item.name}</h2>
                              </a>
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
        </ul>
      </nav>

      {/* <!-- popup mobile menu toggle:scale-x-100 --> */}
      <div
        className={clsx(
          !menuState && 'scale-x-0',
          menuState && 'scale-x-100',
          'mobile_menu md:hidden absolute top-30 z-100 inset-x-0 transition-all duration-200 ease-in-out transform origin-left h-screen overflow-y-scroll',
        )}
      >
        <div className="w-full h-screen sm:w-1/2 bg-primary-light shadow-mdRight pt-5 pb-10">
          <div className="mobile_menu_search mx-5 mb-5 relative border border-white rounded-br-full">
            <SearchBar toggleMenu={toggleMenu} />
          </div>
          <nav className="bg-primary-light">
            <ul className="flex flex-col">
              {menuData &&
                menuData.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={clsx(
                        !item.open && 'h-10',
                        item.open && 'h-auto',
                        'transition-all duration-200 ease-in-out relative border-t border-white overflow-hidden',
                      )}
                    >
                      <div className="main_menu_btn h-10 group relative w-full transition-all duration-500 group-hover:bg-white outline-none focus:outline-none flex items-center justify-center">
                        {item.link.charAt(0) === '/' ? (
                          <Link href={item.link}>
                            <a onClick={toggleMenu}>
                              <h2 className="mr-2">{item.name}</h2>
                            </a>
                          </Link>
                        ) : (
                          <a
                            onClick={toggleMenu}
                            href={item.link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <h2 className="mr-2">{item.name}</h2>
                          </a>
                        )}

                        {item.under_menu.length !== 0 && (
                          <span
                            className="cursor-pointer"
                            onClick={() => toggleOpen(item.category_id)}
                          >
                            <svg
                              className={clsx(
                                !item.open && 'rotate-0',
                                item.open && 'rotate-90',
                                'fill-current text-gray-800 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out',
                              )}
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 13.503 23.619"
                            >
                              <path
                                id="Icon_ionic-ios-arrow-back"
                                data-name="Icon ionic-ios-arrow-back"
                                d="M20.683,18,11.746,9.07a1.688,1.688,0,0,1,2.391-2.384L24.262,16.8a1.685,1.685,0,0,1,.049,2.327L14.144,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                                transform="translate(-11.25 -6.194)"
                              />
                            </svg>
                          </span>
                        )}

                        <span
                          className={clsx(
                            item.color,
                            'absolute w-2 h-full left-0 bottom-0 border',
                          )}
                        ></span>
                      </div>

                      <ul className="block transform origin-top transition-all duration-300 scale-y-100 w-full bg-rainbow-olight">
                        {item.under_menu &&
                          item.under_menu.map((item, i) => {
                            return (
                              <li
                                key={i}
                                className="border-b border-primary-light"
                              >
                                {item.link.charAt(0) === '/' ? (
                                  <Link href={item.link}>
                                    <a
                                      onClick={toggleMenu}
                                      className="relative flex items-center justify-center w-full h-10 transition duration-300 hover:bg-primary-light hover:overflow-hidden outline-none focus:outline-none"
                                    >
                                      <h2>{item.name}</h2>
                                    </a>
                                  </Link>
                                ) : (
                                  <a
                                    href={item.link}
                                    onClick={toggleMenu}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="relative flex items-center justify-center w-full h-10 transition duration-300 hover:bg-primary-light hover:overflow-hidden outline-none focus:outline-none"
                                  >
                                    <h2>{item.name}</h2>
                                  </a>
                                )}
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
