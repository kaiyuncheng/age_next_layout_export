import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = ({ topics }) => {
  return (
    <div className="main bg-primary-light shadow-innerBottomLg p-10 mb-5 relative">
      <div className="absolute -top-2 left-0 p-1 bg-white shadow-md w-full"></div>
      <div className="max-w-screen-2xl mx-auto px-0 lg:px-2 relative">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          {/* <iframe
            src="https://www.youtube.com/embed/6S8o_Z5npqU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}

          <Image
            className="w-full h-full object-cover"
            src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/87967/2020_1200x900.jpg_1140x855.jpg"
            layout="fill"
            alt=""
          />
        </div>

        <div className="md:absolute bottom-10 left-12 text-white  bg-black bg-opacity-75 p-5 lg:p-10 mt-5 md:mt-0 rounded-lg rounded-br-6xl w-full md:w-2/5">
          <span className="bg-primary-dark p-2 rounded-md inline-block mb-4">財富管理</span>
          <h2 className="font-bold text-2xl lg:text-3xl mb-2">財富管理銀行紀證卷評鑑</h2>
          <p>描述財富管理銀行紀證卷評鑑描述財富管理銀行紀證卷評鑑描述財富管理銀行紀證卷評鑑</p>
        </div>

        


      </div>
    </div>
  );
};

export default ProjectSection;
