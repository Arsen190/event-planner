export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-xl w-full space-y-4">
        <h1 className="text-3xl font-extrabold text-center text-zinc-800 dark:text-white">Добро пожаловать!</h1>
        <p className="text-center text-zinc-600 dark:text-zinc-300">
          Это личный планировщик событий. Добавляй, просматривай и управляй своими мероприятиями с лёгкостью.
        </p>
      </div>
    </div>
  )
}
