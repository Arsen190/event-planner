'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEventStore } from '@/stores/eventStore'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function AddEventPage() {
  const addEvent = useEventStore((state) => state.addEvent)
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = () => {
    if (!title || !date || !location) return

    const newEvent = {
      id: Date.now(), // или UUID, если нужно
      title,
      description,
      date,
      location,
    }

    addEvent(newEvent)
    router.push('/events') // переход к списку событий
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] flex items-center justify-center px-4 py-10">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl w-full max-w-xl space-y-4">
        <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white">Новое событие</h1>

        <Input
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          placeholder="Место проведения"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Button className="w-full mt-4" onClick={handleSubmit}>
          Добавить
        </Button>
      </div>
    </div>
  )
}
