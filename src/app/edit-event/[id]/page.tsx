'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useEventStore } from '@/stores/eventStore'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function EditEventPage() {
  const { id } = useParams()
  const router = useRouter()
  const getEventById = useEventStore((state) => state.getEventById)
  const updateEvent = useEventStore((state) => state.updateEvent)

  const event = getEventById(id as string)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (event) {
      setTitle(event.title)
      setDescription(event.description)
      setDate(event.date)
      setLocation(event.location)
    }
  }, [event])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    updateEvent({
      id: id as string,
      title,
      description,
      date,
      location,
    })

    router.push('/events')
  }

  if (!event) {
    return <p className="p-6">Событие не найдено.</p>
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-4">
      <h1 className="text-2xl font-bold">Редактировать событие</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Название события"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Input
          placeholder="Место"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <div className="flex gap-4">
          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
            Сохранить
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push('/events')}>
            Отмена
          </Button>
        </div>
      </form>
    </div>
  )
}
