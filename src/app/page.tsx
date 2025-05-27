// src/app/page.tsx
'use client';  // Указание, что это клиентский компонент

import { useState } from 'react';
import Tab from './components/Tab'; // Это компонент вкладки
import ChickenInfo from './components/ChickenInfo'; // Информация о курицах
import CageInfo from './components/CageInfo'; // Информация о клетках
import WorkerInfo from './components/WorkerInfo'; // Информация о работниках
import { ThemeProvider } from 'next-themes'
const Page = () => {
  const [activeTab, setActiveTab] = useState<string>('chickens');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'chickens':
        return <ChickenInfo />;
      case 'cages':
        return <CageInfo />;
      case 'workers':
        return <WorkerInfo />;
      default:
        return <div>Содержание не найдено</div>;
    }
  };

  return (
    <ThemeProvider attribute="class">
    <div className="min-h-screen bg-url(cyberorchad) text-green-400 font-mono ">
      
      
      <main className="container mx-auto p-6">
        {renderTabContent()}
      </main>
    </div>
    </ThemeProvider>
  );
};

export default Page;
