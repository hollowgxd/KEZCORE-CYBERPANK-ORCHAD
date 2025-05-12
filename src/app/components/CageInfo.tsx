'use client';

import { useEffect, useState } from 'react';

// Типы данных для отсека
type Cage = {
  id: number;
  chicken: { id: number }[];  // Список куриц в отсеке
  workers: any[];             // Работники (пока не используем, но добавим для полноты данных)
  lastEggCollectionDate: string;
  eggsCollected: number;
};

const CageInfo = () => {
  const [cages, setCages] = useState<Cage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Запрос данных об отсеках
    const fetchCages = async () => {
      try {
        const response = await fetch('/api/cages');
        const data = await response.json();
        setCages(data);
      } catch (error) {
        console.error('Ошибка при получении данных об отсеках', error);
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
          <h2 className="text-3xl font-bold mb-4">Сведения об отсеках</h2>
          <p className="text-gray-300">
          Информация о зарегистрированных в системе клетках. Пожалуйста, используйте меню для взаимодействия.<br></br> <br></br> 
          
          Клетка в которой находится курица с самым большим показателем снесенных яиц, будет помечаться.

          <br></br> <br></br> <br></br> 
          Текущее количество отсеков: <span className="text-white font-semibold ">{cages.length}</span>
          </p>

          <div className="flex flex-row flex-wrap justify-center items-start gap-6 lg:gap-12 py-16 px-2 lg:px-0 max-w-screen-2xl mx-auto">
            {loading ? (
              <p className="text-gray-400">Загрузка данных...</p>
            ) : (
              cages.map((cage) => (
                <div
                  key={cage.id}
                  className="bg-black text-red-400 rounded-lg border-2 border-red-600 flex flex-col w-full lg:w-[30%] overflow-hidden shadow-lg"
                >
                  {/* Картинка отсека */}
                  <div className="h-48 w-full overflow-hidden border-b-2 border-red-600">
                    <img
                      src="/cybercageinit.webp"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Информация по отсеку */}
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">Отсек #{cage.id}</h3>
                    
                    <p className="text-gray-300">
                      <span className="font-semibold">Куриц:</span> {cage.chicken.length} шт.
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">Дата последнего сбора:</span> {cage.lastEggCollectionDate}
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">Собрано яиц:</span> {cage.eggsCollected} шт.
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