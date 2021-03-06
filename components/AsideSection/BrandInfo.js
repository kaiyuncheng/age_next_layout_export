import React from "react";


const BrandInfo = ({ brandData }) => {
  return (
    <>
      <div className="hidden md:flex mb-5 border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg flex-col justify-center">
        <h3 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
          {brandData.about_brand_title}
        </h3>
        <p className="p-5 text-gray-700">{brandData.brand_description}</p>
      </div>

      <a
        href={brandData.advertising_url}
        className="hidden md:block relative overflow-hidden rounded-lg mb-5 w-[300px] h-[600px]"
      >
        <img
          className="w-full h-full object-cover"
          src={brandData.advertising_image_url}
          layout="responsive"
          alt={brandData.about_brand_title}
        />
      </a>
    </>
  );
};

export default BrandInfo;
