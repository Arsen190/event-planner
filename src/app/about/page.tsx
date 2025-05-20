'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-xl w-full space-y-4">
        <h1 className="text-3xl font-extrabold text-center text-zinc-800 dark:text-white">
          О приложении
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-300">
          Личный планировщик событий — это удобный инструмент для хранения и организации твоих встреч, дел и мероприятий.
        </p>
        <p className="text-center text-zinc-600 dark:text-zinc-300">
          Ты можешь добавлять, просматривать и управлять мероприятиями. Всё хранится локально!
        </p>
      </div>
    </div>
  )
}
