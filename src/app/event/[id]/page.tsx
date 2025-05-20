// src/app/event/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { useEventStore } from '@/stores/eventStore'

export default function EventDetailsPage() {
  const { id } = useParams()
  const event = useEventStore((state) => state.getEventById(id as string))

  if (!event) return <p className="p-6">Событие не найдено.</p>

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600">{event.date} — {event.location}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  )
}
