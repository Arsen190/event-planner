'use client'

import { useEventStore } from '@/stores/eventStore'
import { EventCard } from '@/components/ui/EventCard'

export default function EventsPage() {
  const events = useEventStore((state) => state.events)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-3xl w-full space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-zinc-800 dark:text-white">Список событий</h1>
        {events.length === 0 ? (
          <p className="text-center text-zinc-600 dark:text-zinc-300">События не найдены. Добавь своё первое!</p>
        ) : (
          <div className="space-y-4">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
