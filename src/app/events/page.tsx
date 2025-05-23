'use client'

import { useEventStore } from '@/stores/eventStore'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function EventsPage() {
  const events = useEventStore((state) => state.events)
  const removeEvent = useEventStore((state) => state.removeEvent)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">Мои события</h2>
          <Link href="/add-event">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">+ Добавить</Button>
          </Link>
        </div>

        {events.length === 0 ? (
          <p className="text-gray-600 text-lg text-center mt-10">
            Нет событий. Добавь событие, чтобы начать планировать!
          </p>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <li
                key={event.id}
                className="bg-white shadow-lg rounded-xl p-6 transition hover:shadow-xl border border-gray-200 space-y-3"
              >
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <div className="text-xs text-gray-500">
                  {event.location}<br /> {event.date}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link href={`/edit-event/${event.id}`}>
                    <Button variant="outline" className="text-yellow-600 border-yellow-500 hover:bg-yellow-100">
                      Изменить
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-red-600 border-red-500 hover:bg-red-100"
                    onClick={() => removeEvent(event.id)}
                  >
                    Удалить
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
