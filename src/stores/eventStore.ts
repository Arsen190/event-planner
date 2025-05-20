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
  getEventById: (id) => get().events.find((event) => event.id === id),
}))
