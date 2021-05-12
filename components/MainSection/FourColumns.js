import React from 'react';
import Image from "next/image";
import Link from "next/link";

const FourColumns = ({topics}) => {
  return (<ul className="flex flex-wrap -mx-2 mb-20">
  <li className="w-full md:w-1/2 px-2">
      <a href="#" className="group block relative">
              <div className="overflow-hidden rounded-lg mb-4 w-full aspect-w-4 aspect-h-3">
                  <img className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                  src="https://doqvf81n9htmm.cloudfront.net/data/shenlin_127/shutterstock_707130331.jpeg"
                  alt="" />
              </div>
              <p className="absolute w-full bottom-0 left-0 rounded-b-lg bg-black bg-opacity-75 text-white p-3 text-sm group-hover:bg-primary-dark transition-all duration-500 ease-in-out">
                  退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
              </p>
      </a>
  </li>
  <li className="w-full md:w-1/2 px-2">
      <a href="#" className="group block relative">
              <div className="overflow-hidden rounded-lg mb-4 w-full aspect-w-4 aspect-h-3">
                  <img className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                  src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/jamiesu_149/2020OCT/1021/LeeY4.JPG"
                  alt="" />
              </div>
              <p className="absolute w-full bottom-0 left-0 rounded-b-lg bg-black bg-opacity-75 text-white p-3 text-sm group-hover:bg-primary-dark transition-all duration-500 ease-in-out">
                  退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
              </p>
      </a>
  </li>
  <li className="w-full md:w-1/2 px-2">
      <a href="#" className="group block relative">
              <div className="overflow-hidden rounded-lg mb-4 w-full aspect-w-4 aspect-h-3">
                  <img className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                  src="https://doqvf81n9htmm.cloudfront.net/data/shenlin_127/shutterstock_707130331.jpeg"
                  alt="" />
              </div>
              <p className="absolute w-full bottom-0 left-0 rounded-b-lg bg-black bg-opacity-75 text-white p-3 text-sm group-hover:bg-primary-dark transition-all duration-500 ease-in-out">
                  退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
              </p>
      </a>
  </li>
  <li className="w-full md:w-1/2 px-2">
      <a href="#" className="group block relative">
              <div className="overflow-hidden rounded-lg mb-4 w-full aspect-w-4 aspect-h-3">
                  <img className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                  src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/jamiesu_149/2020OCT/1021/LeeY4.JPG"
                  alt="" />
              </div>
              <p className="absolute w-full bottom-0 left-0 rounded-b-lg bg-black bg-opacity-75 text-white p-3 text-sm group-hover:bg-primary-dark transition-all duration-500 ease-in-out">
                  退休金規劃12-10／中年存款900萬，提早退休可行嗎？專家：小心做錯這5件事！
              </p>
      </a>
  </li>
</ul>);
};

export default FourColumns;