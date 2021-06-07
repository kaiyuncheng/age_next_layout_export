import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
const DableHiddenBar = () => {
  const [isBack, setIsBack] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    const handleScrollTop = () => {
      if (window.pageYOffset > 300) {
        setIsScrollDown(true);
      }
      if (isScrollDown && window.pageYOffset <= 200) {
        setIsBack(true);
      }
    };
    window.addEventListener('scroll', handleScrollTop);
    return () => window.removeEventListener('scroll', handleScrollTop);
  }, [isScrollDown]);


  useEffect(() => {
    dable('renderWidgetByWidth', 'dablewidget_6XgV6RlN_y74mZdlV');
  }, []);

  return (
    <div
      className={clsx(
        isBack && 'block',
        !isBack && 'hidden',
        'dable_hidden_widget',
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-2 mt-5 mb-10">
        <div
          id="dablewidget_6XgV6RlN_y74mZdlV"
          data-widget_id-pc="6XgV6RlN"
          data-widget_id-mo="y74mZdlV"
          data-widget_id="6XgV6RlN"
          data-dable-sliding="1"
          dable-slided="1"
        ></div>
      </div>
    </div>
  );
};

export default DableHiddenBar;
