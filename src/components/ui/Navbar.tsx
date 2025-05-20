// src/components/Navbar.tsx
'use client'

import Link from 'next/link'

export const Navbar = () => (
  <nav className="bg-gray-100 p-4 shadow-md flex gap-4">
    <Link href="/" className="font-semibold">Главная</Link>
    <Link href="/events">События</Link>
    <Link href="/add-event">Добавить</Link>
    <Link href="/about">О приложении</Link>
  </nav>
)
