'use client';

import { useEffect, useState } from 'react';

// Типы данных для отсека
type Cage = {
  id: number;
  chicken: { id: number; eggRate: number; }[];  // Список куриц в отсеке
  workers: any[];             // Работники (пока не используем, но добавим для полноты данных)
  lastEggCollectionDate: string;
  eggsCollected: number;
};
type CageWithProductivity = Cage & {
  isMostProductive?: boolean;
};

const CageInfo = () => {
  const [cages, setCages] = useState<CageWithProductivity[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCages = async () => {
      try {
        const response = await fetch('/api/cages');
        const data = await response.json();
  
        // Найдём cage с максимальной продуктивностью
        const maxEggs = Math.max(...data.map((cage: any) => cage.eggsCollected || 0));
        const updatedCages = data.map((cage: any) => ({
          ...cage,
          isMostProductive: cage.eggsCollected === maxEggs,
        }));
  
        setCages(updatedCages);
      } catch (error) {
        console.error('Ошибка при получении данных о клетках', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCages();
  }, []);
  

  return (
    <>
      {/* Картинка слева */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 px-2 lg:px-0 max-w-screen-2xl mx-auto">
        <div className="bg-black text-red-400 p-4 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex justify-center items-center max-h-[467px] overflow-hidden">
          <img
            src="/cyberfabric.webp"
            alt="Картинка отсека"
            className="h-full max-h-[467px] w-auto object-contain shadow-lg rounded-lg"
          />
        </div>

        {/* Блок с общей информацией об отсеках */}
        <div className="bg-black text-red-400 p-6 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex-1">
          <h2 className="text-3xl font-bold mb-4">Сведения о клетках</h2>
          <p className="text-gray-300">
            Информация о зарегистрированных в системе клетках. Пожалуйста, используйте меню для взаимодействия.<br></br> <br></br>
            Клетка в которой находится курица с самым большим показателем снесенных яиц, будет помечаться.
            <br></br> <br></br> <br></br> 
            Текущее количество клеток: <span className="text-red-400 font-semibold ">{cages.length}</span>
          </p>

          <div className="flex flex-row flex-wrap justify-center items-start gap-6 lg:gap-12 py-16 px-2 lg:px-0 max-w-screen-2xl mx-auto">
            {loading ? (
              <p className="text-gray-400">Загрузка данных...</p>
            ) : (
              cages.map((cage) => (
                <div
  key={cage.id}
  className={`relative bg-black text-red-400 rounded-lg border-2 ${
    cage.isMostProductive ? 'border-red-600 animate-pulse-glow-delayed' : 'border-red-600'
  } flex flex-col w-full lg:w-[30%] overflow-hidden shadow-lg`}
>
  {cage.isMostProductive && (
    <div className="absolute top-2 right-2 z-50">
      <img src="/crown.svg" alt="Самая продуктивная клетка" className="w-8 h-8" />
    </div>
  )}

  <div className="h-48 w-full overflow-hidden border-b-2 border-red-600">
    <img
      src={cage.isMostProductive ? '/cyberfemida.webp' : '/cybercageinit.webp'}
      alt={`Отсек ${cage.id}`}
      className="w-full h-full object-cover"
    />
  </div>
                  {cage.isMostProductive && (
    <div className="absolute top-2 right-2 z-50">
      <img src="/crown.svg" alt="Самая продуктивная клетка" className="w-8 h-8" />
    </div>
  )}

                  {/* Информация по отсеку */}
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">Клетка #{cage.id}</h3>
                    <p className="text-gray-300">
                      <span className="font-semibold">Куриц:</span> {cage.chicken.length} шт.
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">Дата последнего сбора:</span> {cage.lastEggCollectionDate}
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">Собрано яиц за текущий месяц:</span> {cage.eggsCollected} шт.
                    </p>
                    <p className="text-gray-400 mt-2">Детали...</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CageInfo;
