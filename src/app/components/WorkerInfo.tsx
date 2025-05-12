'use client';

const WorkerInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 px-2 lg:px-0 max-w-screen-2xl mx-auto">
      {/* Картинка слева (пока временная) */}
      <div className="bg-black text-red-400 p-4 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex justify-center items-center max-h-[467px] overflow-hidden">
        <img
          src="/cyberworkerinit.webp" // Заменишь на изображение работника
          alt="Работник"
          className="h-full max-h-[467px] w-auto object-contain shadow-lg rounded-lg"
        />
      </div>

      {/* Текстовый блок */}
      <div className="bg-black text-red-400 p-6 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex-1">
        <h2 className="text-3xl font-bold mb-4">Сведения о Работниках</h2>
        <p className="text-gray-300">
          Информация о текущем обслуживании куриц и яйценоскости. Пожалуйста, используйте меню для взаимодействия.<br></br><br></br>

          
        </p>
      </div>
    </div>
  );
};

export default WorkerInfo;
