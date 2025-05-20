'use client';

import { useEffect, useState } from 'react';

type Chicken = {
  id: number;
  eggRate: number;
};

type Worker = {
  id: number;
  name: string;
};

type Cage = {
  id: number;
  chicken: Chicken;
  worker: Worker | null;
  lastEggCollectionDate: string | null;
  eggsCollected: number;
};

type CageWithProductivity = Cage & {
  isMostProductive?: boolean;
};

const CageInfo = () => {
  const [newWorkerId, setNewWorkerId] = useState<number | null>(null);
const [newChickenId, setNewChickenId] = useState<number | null>(null);
const [showAddForm, setShowAddForm] = useState(false);
  const [cages, setCages] = useState<CageWithProductivity[]>([]);
  const [loading, setLoading] = useState(true);
const fetchCages = async () => {
  try {
    const response = await fetch('/api/cages');
    const data: Cage[] = await response.json();

    // Найдём максимальную яйценоскость среди всех куриц в клетках
    const maxEggRate = Math.max(
      ...data
        .filter(cage => cage.chicken)  // учитываем только клетки с курицами
        .map(cage => cage.chicken.eggRate)
    );

    const updatedCages: CageWithProductivity[] = data.map((cage) => ({
      ...cage,
      isMostProductive: cage.chicken ? cage.chicken.eggRate === maxEggRate : false,
    }));

    setCages(updatedCages);
  } catch (error) {
    console.error('Ошибка при получении данных о клетках', error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchCages();
  }, []);

  const handleDeleteCage = async (id: number) => {
    try {
      const res = await fetch('/api/cages', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        fetchCages();
      }
    } catch (error) {
      console.error('Ошибка при удалении клетки:', error);
    }
  };

const handleAddCage = async () => {
  if (!newWorkerId) {
    alert('Укажите ID работника!');
    return;
  }

  try {
    const res = await fetch('/api/cages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        workerId: newWorkerId,
        chickenId: newChickenId || undefined,
      }),
    });

    if (res.ok) {
      fetchCages();
      setShowAddForm(false);
      setNewWorkerId(null);
      setNewChickenId(null);
    }
  } catch (error) {
    console.error('Ошибка при добавлении клетки:', error);
  }
};


  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 px-2 lg:px-0 max-w-screen-2xl mx-auto">
      <div className="bg-black text-red-400 p-4 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex justify-center items-center max-h-[467px] overflow-hidden">
        <img
          src="/zloy/cyberfabric.webp"
          alt="Картинка отсека"
          className="h-full max-h-[467px] w-auto object-contain shadow-lg rounded-lg"
        />
      </div>

      <div className="bg-black text-red-400 p-6 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex-1">
        <h2 className="text-3xl font-bold mb-4">Сведения о клетках</h2>
        <p className="text-gray-300 mb-4">
          Клетка, в которой курица показала максимальную продуктивность, будет <span className="text-red-400 font-semibold"> ВЫДЕЛЕНА </span> <br/> <br/>
        </p>
        <p className="text-gray-300 mb-4">
          Текущее количество клеток: <span className="text-red-400 font-semibold">{cages.length}</span>
        </p>
{showAddForm && (
  <div className="mb-6 p-4 border border-red-600 rounded bg-black text-gray-300 w-full max-w-md">
    <h3 className="text-xl mb-2 font-semibold">Новая клетка</h3>
    <div className="flex flex-col gap-3">
      <label className="text-sm">
        ID работника:
        <input
          type="number"
          value={newWorkerId ?? ''}
          onChange={(e) => setNewWorkerId(e.target.value ? parseInt(e.target.value) : null)}
          className="mt-1 p-2 w-full bg-gray-800 text-white border border-red-600 rounded"
        />
      </label>
      <label className="text-sm">
        ID курицы (опционально):
        <input
          type="number"
          value={newChickenId ?? ''}
          onChange={(e) => setNewChickenId(e.target.value ? parseInt(e.target.value) : null)}
          className="mt-1 p-2 w-full bg-gray-800 text-white border border-red-600 rounded"
        />
      </label>
      <button
        onClick={handleAddCage}
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Подтвердить добавление
      </button>
    </div>
  </div>
)}

<button
  onClick={() => setShowAddForm(!showAddForm)}
  className="bg-black space-y-2 mb-6 py-4 px-8 border-2 text-semibold text-xl border-red-600 hover:bg-red-700 hover:text-black text-gray-400 px-4 py-2 rounded transition-all duration-200 transform"
          
          
>
  {showAddForm ? 'Скрыть форму' : 'Добавить клетку'}
</button>


        <div className="flex flex-row flex-wrap justify-center items-start gap-6 lg:gap-12">
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
                    src={cage.isMostProductive ? '/zloy/cyberfemida.webp' : '/zloy/cybercageinit.webp'}
                    alt={`Отсек ${cage.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Клетка ID#{cage.id}</h3>
                  <p className="text-gray-300">
  Курица: {cage.chicken ? `ID ${cage.chicken.id}` : 'Нет'}
</p>
<p className="text-gray-300">
  Работник: {cage.worker ? `ID ${cage.worker.id}` : 'Не назначен'}
</p>

                  <p className="text-gray-300">Дата последнего сбора: {cage.lastEggCollectionDate}</p>
                  <p className="text-gray-300">Собрано яиц за месяц: {cage.eggsCollected}</p>

                  <button
                    onClick={() => handleDeleteCage(cage.id)}
                    className="mt-4 bg-red-700 text-white px-4 py-2 rounded bg-red-700 hover:bg-red-800 text-white transition-all duration-200 transform font-semibold"
                  >
                    Удалить клетку
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CageInfo;
