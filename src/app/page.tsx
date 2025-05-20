// src/app/page.tsx
'use client';  // Указание, что это клиентский компонент

import { useState } from 'react';
import Tab from './components/Tab'; // Это компонент вкладки
import ChickenInfo from './components/ChickenInfo'; // Информация о курицах
import CageInfo from './components/CageInfo'; // Информация о клетках
import WorkerInfo from './components/WorkerInfo'; // Информация о работниках

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
    <div className="min-h-screen bg-url(cyberorchad) text-red-400 font-mono ">
      <header className="bg-black text-red-400 py-4 px-8 border-b-2 border-red-600">
        <div className="container mx-auto flex justify-center space-x-8">
          <Tab label="Курицы" isActive={activeTab === 'chickens'} onClick={() => setActiveTab('chickens')} />
          <Tab label="Клетки" isActive={activeTab === 'cages'} onClick={() => setActiveTab('cages')} />
          <Tab label="Работники" isActive={activeTab === 'workers'} onClick={() => setActiveTab('workers')} />
        </div>
      </header>
      
      <main className="container mx-auto p-6">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Page;
