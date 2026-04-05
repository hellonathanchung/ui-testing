import { questions } from '../data/questions'
import { QuestionCard } from '../components/QuestionCard'
import { useCompletion } from '../hooks/useCompletion'
import type { Difficulty } from '../types'

const sections: { label: string; difficulty: Difficulty }[] = [
  { label: 'Easy (Warm-ups)', difficulty: 'Easy' },
  { label: 'Medium', difficulty: 'Medium' },
  { label: 'Hard', difficulty: 'Hard' },
]

export function HomePage() {
  const { completed } = useCompletion()
  const doneCount = completed.size

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>React Mock Interview</h1>
        <p>{doneCount}/{questions.length} completed &middot; Easy &rarr; Hard &middot; Pick one and build it</p>
      </header>

      {sections.map(({ label, difficulty }) => {
        const group = questions.filter((q) => q.difficulty === difficulty)
        if (group.length === 0) return null
        const groupDone = group.filter((q) => completed.has(q.id)).length
        return (
          <section key={difficulty} className="question-section">
            <h2>{label} ({groupDone}/{group.length})</h2>
            <div className="question-grid">
              {group.map((q) => (
                <QuestionCard key={q.id} question={q} done={completed.has(q.id)} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
