// src/components/ChickenInfo.tsx
'use client';

const ChickenInfo = () => {
  return (
    <div className="bg-black text-green-400 p-6 rounded-lg border-2 border-green-600 animate-pulse-glow">
      <h2 className="text-3xl font-bold mb-4">Сведения о Курах</h2>
      <p className="text-gray-300">Все курицы зарегистрированы в системе. Пожалуйста, используйте команды для взаимодействия.</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-green-400">Среднее количество яиц</h3>
        <p className="text-gray-500">Среднее количество яиц, получаемое от каждой курицы данного веса и возраста.</p>
      </div>
    </div>
  );
};

export default ChickenInfo;
