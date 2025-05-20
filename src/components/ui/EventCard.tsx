// src/components/EventCard.tsx
'use client'

import { Event, useEventStore } from '@/stores/eventStore'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface Props {
  event: Event
}

export const EventCard = ({ event }: Props) => {
  const removeEvent = useEventStore((state) => state.removeEvent)
  const router = useRouter()

  return (
    <div className="border rounded-2xl p-4 shadow-md flex flex-col gap-2 bg-white">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-sm text-gray-600">{event.date} — {event.location}</p>
      <p className="text-gray-700">{event.description}</p>
      <div className="flex gap-2 mt-2">
        <Button
          variant="outline"
          onClick={() => router.push(`/event/${event.id}`)}
        >
          Подробнее
        </Button>
        <Button
          variant="destructive"
          onClick={() => removeEvent(event.id)}
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}
