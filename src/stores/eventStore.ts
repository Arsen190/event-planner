// src/stores/eventStore.ts
import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
}

interface EventState {
  events: Event[]
  addEvent: (event: Omit<Event, 'id'>) => void
  removeEvent: (id: string) => void
  updateEvent: (updatedEvent: Event) => void  // <-- добавлено
  getEventById: (id: string) => Event | undefined
}

export const useEventStore = create<EventState>((set, get) => ({
  events: [],
  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, { ...event, id: uuidv4() }],
    })),
  removeEvent: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),
  updateEvent: (updatedEvent) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      ),
    })),
  getEventById: (id) => get().events.find((event) => event.id === id),
}))
