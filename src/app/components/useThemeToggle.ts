// hooks/useThemeToggle.ts
'use client'
import { useEffect, useState } from 'react'

export function useThemeToggle() {
  const [theme, setTheme] = useState<'default'|'business'>('default')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'default'|'business') || 'default'
    document.documentElement.dataset.theme = saved
    setTheme(saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'business' ? 'default' : 'business'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return { theme, toggleTheme }
}
