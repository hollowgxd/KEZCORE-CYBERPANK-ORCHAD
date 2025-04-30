'use client';

import React from 'react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-6 py-3 text-lg font-semibold border-2 border-red-400 rounded-sm transition-all duration-200 transform
        ${isActive
          ? ' bg-black text-red-400 shadow-md shadow-red-600 animate-pulse-glow'
          : 'text-gray-400 hover:bg-red-500 hover:text-black'}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
