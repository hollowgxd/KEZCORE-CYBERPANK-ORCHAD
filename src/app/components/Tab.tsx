'use client';

import React from 'react';

interface TabProps {
  label: string;

}

const Tab: React.FC<TabProps> = ({ label }) => {
  return (
    <button
      className={`px-6 py-3 text-lg font-semibold border-2 border-green-400 rounded-sm transition-all duration-200 transform
        ${1==1
          ? ' bg-black text-green-400 shadow-md shadow-green-600 animate-pulse-glow'
          : 'text-gray-400 hover:bg-green-500 hover:text-black'}
      `}
      
    >
      {label}
    </button>
  );
};

export default Tab;
