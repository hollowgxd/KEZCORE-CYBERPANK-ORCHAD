// src/components/CageInfo.tsx
const CageInfo = () => {
  return (
    <div className="bg-black text-red-400 p-6 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed">
      <h2 className="text-3xl font-bold mb-4 ">Сведения об отсеках</h2>
      <p className="text-gray-300 ">Доступ к клеткам ограничен. Используйте команды для получения сведений о статусе отсеков.</p>
    </div>
  );
};

export default CageInfo;
