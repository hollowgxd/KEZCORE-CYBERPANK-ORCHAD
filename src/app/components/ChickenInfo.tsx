'use client';

const ChickenInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 px-2 lg:px-8 max-w-screen-xl mx-auto">
      {/* Петушок слева */}
      <div className="bg-black text-red-400 p-4 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex justify-center items-center max-h-[700px] overflow-hidden">
        <img
          src="/cyberchickinit.webp"
          alt="Петушок"
          className="h-full max-h-[700px] w-auto object-contain shadow-lg rounded-lg"
        />
      </div>

      {/* Текст справа (Ширина контейнера увеличена) */}
      <div className="bg-black text-red-400 p-6 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex-1 ">
        <h2 className="text-3xl font-bold mb-4">Сведения о Курицах</h2>
        <p className="text-gray-300">
          Все курицы зарегистрированы в системе. Пожалуйста, используйте команды для взаимодействия.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit error beatae exercitationem esse dolorem consequuntur. Quia, quas neque, perferendis sint dolore consequatur aperiam, nesciunt quisquam ipsa deleniti a quam explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit error beatae exercitationem esse dolorem consequuntur. Quia, quas neque, perferendis sint dolore consequatur aperiam, nesciunt quisquam ipsa deleniti a quam explicabo.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-red-400">Среднее количество яиц</h3>
          <p className="text-gray-500">
            Среднее количество яиц, получаемое от каждой курицы данного веса и возраста.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChickenInfo;
