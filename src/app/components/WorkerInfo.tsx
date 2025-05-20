'use client';

import { useEffect, useState } from 'react';

type Worker = {
  id: number;
  name: string;
  salary: number;
  cageIds: number[];
  chickensCount: number;
  totalEggRate: number;
};

const WorkerInfo = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const res = await fetch('/api/workers');
      const data = await res.json();
      setWorkers(data);
    } catch (err) {
      console.error('Ошибка при загрузке работников:', err);
    }
  };

  const deleteWorker = async (id: number) => {
    try {
      await fetch('/api/workers', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchWorkers();
    } catch (err) {
      console.error('Ошибка при удалении:', err);
    }
  };

  const addWorker = async () => {
    const demoName = `Работник ${Math.floor(Math.random() * 1000)}`;
    const demoSalary = Math.floor(Math.random() * 30000) + 30000;

    try {
      await fetch('/api/workers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: demoName, salary: demoSalary }),
      });
      fetchWorkers();
    } catch (err) {
      console.error('Ошибка при добавлении:', err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 px-4 lg:px-0 max-w-screen-2xl mx-auto py-8">

      {/* ВЕРХНИЙ БЛОК */}

        {/* КАРТИНКА СЛЕВА */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 w-full">
        <div className="bg-black text-red-400 p-4 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex justify-center items-center max-h-[467px] overflow-hidden">
          <img
            src="/zloy/cyberworkerinit.webp"
            alt="Работник"
            className="h-full max-h-[467px] w-auto object-contain shadow-lg rounded-lg"
          />
        </div>

        {/* БЛОК С ТЕКСТОМ И КАРТОЧКАМИ */}
        <div className="flex flex-col gap-6 w-full bg-black border-2 border-red-600 text-red-400 rounded-lg p-6 animate-pulse-glow-delayed">
          <div>
            <h2 className="text-3xl font-bold mb-4">Сведения о Работниках</h2>
            <p className="text-sm text-gray-300">
              Здесь отображаются все текущие работники, их зарплаты, обслуживаемые клетки и общая яйценоскость.
              Используйте кнопки ниже для добавления или удаления работников.
            </p>
          </div>

          {/* КНОПКА ДОБАВИТЬ */}
          <button
            onClick={addWorker}
            
            className=" bg-black py-4 px-8 border-2 text-semibold text-xl border-red-600 hover:bg-red-700 hover:text-black text-gray-400 px-4 py-2 rounded transition-all duration-200 transform "
          >
            Добавить Работника
          </button>

          {/* КАРТОЧКИ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="relative bg-zinc-900 border-2 border-red-600 text-red-300 rounded-2xl p-6 shadow-xl"
              >
                {/* УДАЛИТЬ */}
                <button
                  onClick={() => deleteWorker(worker.id)}
                  className="absolute top-2 right-2 bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800 text-sm transition-all duration-200 transform font-semibold"
                >
                  ✖
                </button>

                {/* АВАТАР */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src="/zloy/cyberpersonal2.webp"
                    alt="Аватар работника"
                    className="w-full h-full object-cover border-2 border-red-600 rounded"
                  />
                </div>

                {/* ИНФОРМАЦИЯ */}
                <div className="space-y-1 text-sm">
                  <p><strong>ФИО:</strong> {worker.name}</p>
                  <p><strong>Зарплата:</strong> {worker.salary.toLocaleString()} ₽</p>
                  <p><strong>Клетки:</strong> {worker.cageIds.length > 0 ? worker.cageIds.join(', ') : '—'}</p>
                  <p><strong>Кур:</strong> {worker.chickensCount}</p>
                  <p><strong>Яйценоскость:</strong> {worker.totalEggRate.toFixed(2)}</p>
                  <p><strong>ID:</strong> {worker.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerInfo;
