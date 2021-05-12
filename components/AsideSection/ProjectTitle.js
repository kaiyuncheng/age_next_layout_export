import React from "react";

const ProjectTitle = ({ topics }) => {
  return (
    <div className="hidden md:flex border border-secondary-medium rounded-lg rounded-br-6xl shadow-lg  flex-col justify-cneter mb-10">
      <h3 className="border-b border-dashed border-secondary-medium text-center text-lg font-medium p-3">
        關於品牌標題
      </h3>
      <p className="p-5 text-gray-700">
        曾任《中國時報》駐日特派員，2004年專事寫作，在多家報紙雜誌撰寫專欄。書寫對象包括兩性關係、職場文化及日本政經社會議題、文學評論等，相關書籍有《性愛成就願》等30冊，《棋神物語》等。最大特點是好奇，最大願望是慢慢咀嚼幸福，最大嗜好是讀書、美食和旅行。
      </p>
    </div>
  );
};

export default ProjectTitle;
