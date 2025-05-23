export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] p-6">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg max-w-xl w-full space-y-4">
        <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white">О приложении</h1>
        <p className="text-center text-zinc-600 dark:text-zinc-300">
          Это удобный инструмент для планирования и отслеживания личных дел и мероприятий.
        </p>
       
      </div>
    </main>
  )
}
