import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
const DableFullCover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpTime, setPopUpTime] = useState(90000);
  let popUpTimeout;

  const setTimeouts = () => {
    popUpTimeout = setTimeout(popUp, popUpTime);
  };

  const clearTimeouts = () => {
    if (popUpTimeout) clearTimeout(popUpTimeout);
  };

  const popUp = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const events = [
      'mousemove',
      'click',
      'keypress',
    ];

    const resetTimeout = () => {
      clearTimeouts();
      setTimeouts();
    };

    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    setTimeouts();
    return () => {
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
        clearTimeouts();
      }
    };
  }, []);


  useEffect(() => {
    dable('renderWidget', 'dablewidget_37JLneXN');
  }, []);

  return (
    <div
      onClick={closeHandler}
      className={clsx(
        isOpen && 'hidden sm:flex z-100',
        !isOpen && 'hidden',
        'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 justify-center items-center overflow-hidden',
      )}
    >
      <div className="relative border border-secondary-medium bg-white px-10 pt-10 pb-8 rounded-2xl rounded-br-6xl h-4/5 md:h-auto w-4/5 shadow-md">
        <div className="overflow-y-scroll md:overflow-y-hidden w-full h-full">
          <button
            onClick={closeHandler}
            type="button"
            className="absolute right-4 top-2 font-medium text-2xl text-primary-dark outline-none focus:outline-none hover:text-primary-medium"
          >
            ×
          </button>

          <div id="dablewidget_37JLneXN" data-widget_id="37JLneXN"></div>
        </div>
      </div>
    </div>
  );
};

export default DableFullCover;
