'use client'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] p-6">
      <div className="bg-white rounded-xl shadow-md p-10 max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Личный планировщик дел</h1>
        <p className="text-gray-600 text-lg">
          Управляй своими событиями, задачами и планами с лёгкостью. Добавляй, редактируй и будь продуктивнее каждый день.
        </p>
      </div>
    </main>
  )
}
