// src/components/CageInfo.tsx
const CageInfo = () => {
  return (
    <div className="bg-black text-green-400 p-6 rounded-lg border-2 border-green-600 animate-pulse-glow">
      <h2 className="text-3xl font-bold mb-4">Сведения о Клетках</h2>
      <p className="text-gray-300">Доступ к клеткам ограничен. Используйте команды для получения сведений о статусе клеток.</p>
    </div>
  );
};

export default CageInfo;
