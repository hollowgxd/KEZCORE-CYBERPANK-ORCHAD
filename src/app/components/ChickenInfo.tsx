'use client'

import { useEffect, useState } from 'react'

type Chicken = {
  id: number
  weight: number
  age: number
  eggRate: number
  breed: string
  cage: {
    id: number
    name: string
  }
}

const ChickenInfo = () => {
  const [chickens, setChickens] = useState<Chicken[]>([])
  const [loading, setLoading] = useState(true)

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
  }, [])
  const [avgWeight, setAvgWeight] = useState('')
  const [avgAge, setAvgAge] = useState('')
  const [averageResult, setAverageResult] = useState<number | null>(null)
  
  const fetchAverageEggs = async () => {
    console.log(JSON.stringify(chickens, null, 2))

    if (!avgWeight || !avgAge) return
  
    try {
      const res = await fetch(`/api/stats?weight=${avgWeight}&age=${avgAge}`)
      const data = await res.json()
      setAverageResult(data.average)
    } catch (error) {
      console.error('Ошибка при получении среднего:', error)
      setAverageResult(null)
    }
  }
  
  const fetchChickens = async () => {
    try {
      const res = await fetch('/api/chickens')
      const data = await res.json()
      setChickens(data)
    } catch (error) {
      console.error('Ошибка при загрузке кур:', error)
    } finally {
      setLoading(false)
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

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (res.ok) {
      await fetchChickens()
      setFormData({ id: null, weight: '', age: '', eggRate: '', breed: '', cageId: '' })
      setIsEditing(false)
    } else {
      console.error('Ошибка при отправке данных')
    }
  }

  const handleEdit = (chicken: Chicken) => {
    setFormData({
      id: chicken.id,
      weight: chicken.weight.toString(),
      age: chicken.age.toString(),
      eggRate: chicken.eggRate.toString(),
      breed: chicken.breed,
      cageId: chicken.cage.id.toString(),
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
      <div className="bg-black text-red-400 p-4 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex justify-center items-center max-h-[467px] overflow-hidden">
        <img
          src="/cyberchickinit.webp"
          alt="Петушок"
          className="h-full max-h-[467px] w-auto object-contain shadow-lg rounded-lg"
        />
      </div>

      {/* Контент */}
      <div className="bg-black text-red-400 p-6 rounded-lg border-2 border-red-600 animate-pulse-glow-delayed flex-1">
        <h2 className="text-3xl font-bold mb-4">Сведения о Курицах</h2>
        <p className="text-gray-300 mb-4">
          Все курицы зарегистрированы в системе. Пожалуйста, используйте команды для взаимодействия.
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
            placeholder="Вес (кг)"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            className="w-full bg-gray-900 text-white p-2 rounded"
            step="0.1"
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
            placeholder="Яиц/день"
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
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            {isEditing ? 'Обновить' : 'Добавить'}
          </button>
        </form>

        {/* 🐔 Список кур */}
        {loading ? (
          <p className="text-gray-400">Загрузка данных...</p>
        ) : (
          <ul className="space-y-2 mb-6">
            {chickens.map((chicken, index) => (
              <li
                key={chicken.id}
                className="text-sm text-gray-300 border border-red-600 rounded-lg p-3 flex justify-between items-center"
              >
                <p>
                  <span className="text-red-400 font-semibold">#{index+1}</span> — порода{' '}
                  <span className="text-white">{chicken.breed}</span>, {chicken.age} дней,{' '}
                  {chicken.weight} кг, {chicken.eggRate} яиц/день, клетка #{chicken.cage.id}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(chicken)}
                    className="text-sm bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded text-white"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDelete(chicken.id)}
                    className="text-sm bg-red-700 hover:bg-red-800 px-3 py-1 rounded text-white"
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
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
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
    >
      Показать
    </button>
  </div>

  {averageResult !== null && (
    <div className="text-gray-300 mt-2">
      Среднее количество яиц для веса {avgWeight} кг и возраста {avgAge} дней:{" "}
      
      <span className="text-white font-semibold">{averageResult.toFixed(2)} яиц</span>
    </div>
  )}
</div>

      </div>
    </div>
  )
}

export default ChickenInfo