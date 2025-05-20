'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEventStore } from '@/stores/eventStore'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, StickyNote, Type } from 'lucide-react'

export default function AddEventPage() {
  const addEvent = useEventStore((state) => state.addEvent)
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = () => {
    if (!title || !date || !location) return
    addEvent({ title, description, date, location })
    router.push('/events')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-xl w-full space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-zinc-800 dark:text-white">Добавить событие</h1>

        <div className="relative">
          <Type className="absolute left-3 top-3 text-zinc-400" size={18} />
          <Input
            className="pl-10"
            placeholder="Название"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="relative">
          <StickyNote className="absolute left-3 top-3 text-zinc-400" size={18} />
          <Textarea
            className="pl-10"
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-zinc-400" size={18} />
          <Input
            className="pl-10"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-zinc-400" size={18} />
          <Input
            className="pl-10"
            placeholder="Место проведения"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:brightness-110 transition duration-200"
        >
          Создать событие
        </Button>
      </div>
    </div>
  )
}
