import { useState, useCallback } from 'react'

const STORAGE_KEY = 'mock-interview-completed'

function loadCompleted(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? new Set(JSON.parse(stored)) : new Set()
  } catch {
    return new Set()
  }
}

function saveCompleted(completed: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
}

export function useCompletion() {
  const [completed, setCompleted] = useState(loadCompleted)

  const toggleComplete = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      saveCompleted(next)
      return next
    })
  }, [])

  return { completed, toggleComplete }
}
