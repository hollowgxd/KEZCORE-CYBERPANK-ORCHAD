'use client'

import { useEffect, useState } from 'react'

type Chicken = {
  id: number
  weight: number
  age: number
  eggRate: number
  breed: string
  cageId: number
  cage: {
    id: number
    name: string
  }
}

const ChickenInfo = () => {
    const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.dataset.theme;
    const next = current === 'business' ? 'default' : 'business';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
  };
  const [chickens, setChickens] = useState<Chicken[]>([])
  const [loading, setLoading] = useState(true)
  const [filteredChickens, setFilteredChickens] = useState<Chicken[]>([])
  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const visibleChickens = selectedBreed ? filteredChickens : chickens
  const [averageEggRateByCage, setAverageEggRateByCage] = useState<number | null>(null)
  const [cageOccupiedWarning, setCageOccupiedWarning] = useState<string | null>(null)


  const [formData, setFormData] = useState({
    id: null as number | null,
    weight: '',
    age: '',
    eggRate: '',
    breed: '',
    cageId: '',
  })

  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetchChickens()
    fetchAverageEggsByCage()
  }, [])
  const [avgWeight, setAvgWeight] = useState('')
  const [avgAge, setAvgAge] = useState('')
  const [averageResult, setAverageResult] = useState<number | null>(null)
  
  const fetchAverageEggs = async () => {
    if (!avgWeight && !avgAge) {
  setAverageResult(null);
  return;
}

  
    const params = new URLSearchParams()
    if (avgWeight) params.append('weight', avgWeight)
    if (avgAge) params.append('age', avgAge)
  
    try {
      const res = await fetch(`/api/stats?${params.toString()}`)
      const data = await res.json()
      setAverageResult(data.average)
    } catch (error) {
      console.error('Ошибка при получении среднего:', error)
      setAverageResult(null)
    }
  }
  const fetchAverageEggsByCage = async () => {
    try {
      const res = await fetch('/api/stats') // Без фильтров по возрасту или весу
      const data = await res.json()
      setAverageEggRateByCage(data.average) // Получаем среднюю яйценоскость по всем курицам
    } catch (error) {
      console.error('Ошибка при получении средней яйценоскости по цеху:', error)
      setAverageEggRateByCage(null)
    }
  }
  
  const fetchChickens = async () => {
    try {
      const res = await fetch('/api/chickens')
      const data = await res.json()
      setChickens(data)
    } catch (error: any) {
  console.error('Ошибка сервера:', error?.message || error)
  return Response.json({ error: error?.message || 'Internal Server Error' }, { status: 500 })
    } finally {
      setLoading(false)
    }
  }
  const handleFilter = (breed: string) => {
    setSelectedBreed(breed)
    if (breed) {
      const filtered = chickens.filter((chicken) => chicken.breed === breed)
      setFilteredChickens(filtered)
    } else {
      setFilteredChickens(chickens) // Если фильтра нет, показываем всех
    }
  }
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const method = isEditing ? 'PUT' : 'POST'
  const url = '/api/chickens'
  const body = {
    ...formData,
    weight: parseFloat(formData.weight),
    age: parseInt(formData.age),
    eggRate: parseFloat(formData.eggRate),
    cageId: parseInt(formData.cageId),
  }
  const isCageOccupied = chickens.some((chicken) => {
    return chicken.cageId === body.cageId && chicken.id !== formData.id
  })

  if (isCageOccupied) {
    setCageOccupiedWarning(`Клетка #${body.cageId} уже занята другой курицей.`)
    return
  }

  setCageOccupiedWarning(null)
  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) throw new Error('Ошибка при создании курицы')
    const createdChicken = await res.json()

    // Обновляем клетку, связываем с курицей
    const cageUpdateRes = await fetch('/api/cages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cageId: parseInt(formData.cageId),
        chickenId: createdChicken.id,
      }),
    })

    if (!cageUpdateRes.ok) throw new Error('Ошибка при обновлении клетки')

    await fetchChickens()
    setFormData({ id: null, weight: '', age: '', eggRate: '', breed: '', cageId: '' })
    setIsEditing(false)
  } catch (error) {
    console.error(error)
  }
}


  const handleEdit = (chicken: Chicken) => {
    setFormData({
      id: chicken.id,
      weight: chicken.weight.toString(),
      age: chicken.age.toString(),
      eggRate: chicken.eggRate.toString(),
      breed: chicken.breed,
      cageId: chicken.cageId.toString(),
    })
    setIsEditing(true)
  }

  const handleDelete = async (id: number) => {
    const confirmed = confirm('Удалить курицу?')
    if (!confirmed) return

    const res = await fetch('/api/chickens', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })

    if (res.ok) {
      await fetchChickens()
    } else {
      console.error('Ошибка при удалении')
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12 px-2 lg:px-0 max-w-screen-2xl mx-auto">
      {/* Картинка слева */}
      <div
        className="bg-black text-green-400  rounded-lg border-2 border-green-600 animate-pulse-glow-delayed flex justify-center items-center max-h-[467px] overflow-hidden cursor-pointer"
        onClick={toggleTheme}
      >
        
        <img
          src="/dobriy/chicken_1.webp"
          alt="Петушок"
          className="h-full max-h-[467px] w-auto object-contain shadow-lg rounded-lg"
        />
      </div>

      {/* Контент */}
      <div className="bg-black text-green-400 p-6 rounded-lg border-2 border-green-600 animate-pulse-glow-delayed flex-1">
        <h2 className="text-3xl font-bold mb-4">Сведения о Курицах</h2>
        <p className="text-gray-300 mb-4">
          Все курицы зарегистрированы в системе. Пожалуйста, используйте меню для взаимодействия.  <br/> <br/>

          Вы можете быстро выбрать для отображения куриц нужной вам породы, для этого нажмите на изображение с курицей интересующей породы. <br/> <br/>

          Система помогает вам вычислять куриц с яйценоскостью ниже среднего значения по цеху, если вас не устраивает производительность этой особи - <span className="text-green-400 font-semibold"> УТИЛИЗИРУЙТЕ </span> ее <br/> <br/>

          Вы можете получать параметры средней яйценоскости куриц с примерно равным весом и возрастом, для этого воспользуйтесь фильтром внизу списка.
        </p>

        {/* 🔘 Форма */}
        <form onSubmit={handleSubmit} className="space-y-2 mb-6">
          <input
            type="text"
            placeholder="Порода"
            value={formData.breed}
            onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
            className="w-full bg-gray-900 text-white p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Возраст (дни)"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="w-full bg-gray-900 text-white p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Вес (кг)"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            className="w-full bg-gray-900 text-white p-2 rounded"
            step="0.1"
            required
          />
          <input
            type="number"
            placeholder="Яиц/месяц"
            value={formData.eggRate}
            onChange={(e) => setFormData({ ...formData, eggRate: e.target.value })}
            className="w-full bg-gray-900 text-white p-2 rounded"
            step="0.1"
            required
          />
          <input
            type="number"
            placeholder="ID клетки"
            value={formData.cageId}
            onChange={(e) => setFormData({ ...formData, cageId: e.target.value })}
            className="w-full bg-gray-900 text-white p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-black py-4 px-8 border-2 text-semibold text-xl border-green-600 hover:bg-green-700 hover:text-black text-gray-400 px-4 py-2 rounded transition-all duration-200 transform"
          >
            {isEditing ? 'Обновить' : 'Добавить'}
          </button>
        </form>
        {cageOccupiedWarning && (
  <div className="text-green-400 font-semibold bg-gray-900 p-2 rounded border border-green-600 mb-4">
    ⚠ {cageOccupiedWarning}
  </div>
)}

        <div className="mb-6 w-full">
  <h3 className="text-xl font-semibold text-green-400 mb-4 ">Фильтр по породам</h3>
  <div className="grid grid-cols-4 gap-4">
    {[
      { name: 'Микс', img: '/dobriy/cyclositus1.webp' },
      { name: 'Белый', img: '/dobriy/ovexiron1.webp' },
      { name: 'Рыжий', img: '/dobriy/hatracs1.webp' },
      { name: '', img: '/zloy/stopsign.webp' }
    ].map(({ name, img }) => (
      <button
        key={name}
        onClick={() => handleFilter(name)}
        className={`w-full aspect-[4/3] overflow-hidden rounded-lg border-2 hover:border-green-500 transition-all duration-200 transform font-semibold
          ${selectedBreed === name ? 'border-green-600 bg-green-800 animate-pulse-glow-delayed ' : 'border-gray-700 hover:bg-gray-800'}`}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </button>
    ))}

    {/* Сброс фильтра */}
  </div>
</div>



        {/* 🐔 Список кур */}
        {loading ? (
          <p className="text-gray-400">Загрузка данных...</p>
        ) : (
          <ul className="space-y-2 mb-6">
            {visibleChickens.map((chicken, index) => {
              const isUnderperforming = averageEggRateByCage && chicken.eggRate < averageEggRateByCage;
              return (
                <li
                  key={chicken.id}
                  className="text-sm text-gray-300 border border-green-600 rounded-lg p-3 flex justify-between items-center"
                >
                  <p>
                    <span className="text-green-400 font-semibold">#{chicken.id}</span> — порода{' '}
                    <span className="text-green-500 text-xl">{chicken.breed}</span>, {chicken.age} дней,{' '}
                    {chicken.weight} кг, {chicken.eggRate} яиц/месяц, клетка #{chicken.cage?.id || chicken.cageId || 'не назначена'}

                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(chicken)}
                      className="bg-black py-4 px-8 border-2 text-bold text-l border-green-600 hover:bg-green-700 hover:text-black - text-gray-400 px-4 py-2 rounded transition-all duration-200 transform font-semibold"
                    >
                      Редактировать
                    </button>
                    <button
                      onClick={() => handleDelete(chicken.id)}
                      className={`text-sm px-3 py-1 rounded transition-all duration-200 transform font-semibold min-w-[130px]
                      ${isUnderperforming ? 'bg-green-800 animate-pulse-glow text-white' : 'bg-green-700 hover:bg-green-800 text-white'}`}> {isUnderperforming ? 'УТИЛИЗИРОВАТЬ' : 'Удалить'}
                    </button>

                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {/* 📊 Блок внизу */}
        <div className="mt-4 space-y-4">
  <div className="flex gap-4">
    <input
      type="number"
      step="0.1"
      placeholder="Вес курицы (кг)"
      value={avgWeight}
      onChange={(e) => setAvgWeight(e.target.value)}
      className="bg-gray-900 text-white p-2 rounded w-full"
    />
    <input
      type="number"
      placeholder="Возраст курицы (дни)"
      value={avgAge}
      onChange={(e) => setAvgAge(e.target.value)}
      className="bg-gray-900 text-white p-2 rounded w-full"
    />
    <button
      onClick={fetchAverageEggs}
      className="bg-black py-4 border-green-600 px-8 border-2 hover:bg-green-700 hover:text-black - text-gray-400 px-4 py-2 rounded transition-all duration-200 transform font-semibold"
    >
      Показать
    </button>
  </div>

  {averageResult !== null && (
    <div className="text-gray-300 mt-2">
      Среднее количество яиц по весу {avgWeight} кг и возрасту {avgAge} дней:{" "}
      
      <span className="text-white font-semibold">{averageResult.toFixed(2)} яиц</span>
    </div>
  )}
</div>

      </div>
    </div>
  )
}

export default ChickenInfo