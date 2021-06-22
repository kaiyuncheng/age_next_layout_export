import React from "react";
import Link from "next/link";
const BreadCrumb = ({ titles }) => {
  return (
    <div className="breadcrumb pt-7 md:pt-5 mb-5">
      <nav className="max-w-screen-2xl mx-auto px-4 lg:px-2 text-sm text-gray-600 font-light">
        <Link href="/">
          <a className="hover:text-primary-dark">幸福熟齡</a>
        </Link>
        {titles &&
          titles.map((item, i) => {
            return (
              <span key={i} className="last:text-gray-800 last:font-medium">
                <span className="mx-1">/</span>
                {item.link ? (
                  <Link href={item.link}>
                    <a className="hover:text-primary-dark">{item.title}</a>
                  </Link>
                ) : (
                  
                    <span>{item.title}</span>
                  
                )}
              </span>
            );
          })}
      </nav>
    </div>
  );
};

export default BreadCrumb;
