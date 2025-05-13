'use client';

import { useEffect, useState } from 'react';

// Типы данных для отсека

type Cage = {
  id: number;
  chicken: { id: number; eggRate: number }[];
  workers: any[];
  lastEggCollectionDate: string;
  eggsCollected: number;
};

type CageWithProductivity = Cage & {
  isMostProductive?: boolean;
};

const CageInfo = () => {
  const [cages, setCages] = useState<CageWithProductivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCage, setEditingCage] = useState<Cage | null>(null);
  const [formData, setFormData] = useState({
  id: null as number | null,
  chicken: [] as { id: number; eggRate: number }[],
  workers: [] as any[],
});
const [isEditing, setIsEditing] = useState(false);


  const fetchCages = async () => {
    try {
      const response = await fetch('/api/cages');
      const data = await response.json();

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
const handleEdit = (cage: Cage) => {
  setFormData({
    id: cage.id,
    chicken: cage.chicken,
    workers: cage.workers,
  });
  setIsEditing(true);
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const method = isEditing ? 'PUT' : 'POST';
  const url = '/api/cages';

  const body = {
    ...formData,
  };

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    await fetchCages();
    setFormData({
      id: null,
      chicken: [],
      workers: [],

    });
    setIsEditing(false);
  } else {
    console.error('Ошибка при отправке данных');
  }
};


  return (
    <>
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
          <p className="text-gray-300">
            Информация о зарегистрированных в системе клетках. Пожалуйста, используйте меню для взаимодействия.
            <br />
            <br />
            Клетка, в которой находится курица с самым большим показателем снесенных яиц, будет помечаться.
            <br />
            <br />
            <br />
            Текущее количество клеток: <span className="text-red-400 font-semibold">{cages.length}</span>
          </p>
<form onSubmit={handleSubmit} className="space-y-2 mt-6">
  {/* Пример: для отладки можно пока оставить ввод кур и работников пустым или через textarea */}
  <textarea
    placeholder="Курицы (JSON)"
    value={JSON.stringify(formData.chicken)}
    onChange={(e) => {
      try {
        setFormData({ ...formData, chicken: JSON.parse(e.target.value) });
      } catch {}
    }}
    className="w-full bg-gray-900 text-white p-2 rounded"
  />

  <textarea
    placeholder="Работники (JSON)"
    value={JSON.stringify(formData.workers)}
    onChange={(e) => {
      try {
        setFormData({ ...formData, workers: JSON.parse(e.target.value) });
      } catch {}
    }}
    className="w-full bg-gray-900 text-white p-2 rounded"
  />

  <button
    type="submit"
    className="bg-black py-4 px-8 border-2 text-semibold text-xl border-red-600 hover:bg-red-700 hover:text-black text-gray-400 rounded transition-all duration-200 transform"
  >
    {isEditing ? 'Обновить' : 'Добавить'}
  </button>
</form>

          {/* Список клеток */}
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
                      src={cage.isMostProductive ? '/zloy/cyberfemida.webp' : '/zloy/cybercageinit.webp'}
                      alt={`Отсек ${cage.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

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

                    {/* Кнопки редактирования/удаления */}
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => setEditingCage(cage)}
                        className="bg-black py-4 px-8 border-2 text-bold text-l border-red-600 hover:bg-red-700 hover:text-black - text-gray-400 px-4 py-2 rounded transition-all duration-200 transform font-semibold"
                      >
                        Редактировать
                      </button>
                      <button
                        onClick={() => handleDeleteCage(cage.id)}
                        className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Удалить
                      </button>
                    </div>
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
