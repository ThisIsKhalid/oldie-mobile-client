import React from 'react';

const Loading = () => {
    return (
      <div className='h-screen flex justify-center items-center border'>
        <div className="flex">
          <p className="text-4xl font-bold text-secondary">L</p>
          <p className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-accent"></p>
          <p className="text-4xl font-bold text-secondary">DING</p>
          <div className="flex items-end justify-center space-x-2 pb-1">
            <div className="w-2 h-2 rounded-full animate-pulse bg-secondary"></div>
            <div className="w-2 h-2 rounded-full animate-pulse bg-secondary"></div>
            <div className="w-2 h-2 rounded-full animate-pulse bg-secondary"></div>
          </div>
        </div>
      </div>
    );
};

export default Loading;