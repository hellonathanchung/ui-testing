import type { Difficulty } from '../types'

const colorMap: Record<Difficulty, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
}

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className="difficulty-badge"
      style={{ backgroundColor: colorMap[difficulty] }}
    >
      {difficulty}
    </span>
  )
}
