import { Link } from 'react-router-dom'
import type { Question } from '../types'
import { DifficultyBadge } from './DifficultyBadge'

export function QuestionCard({ question, done }: { question: Question; done: boolean }) {
  return (
    <Link to={`/q/${question.id}`} className={`question-card${done ? ' question-card--done' : ''}`}>
      <div className="question-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <DifficultyBadge difficulty={question.difficulty} />
          {done && <span className="done-badge">Done</span>}
        </div>
        <span className="time-limit">{question.timeLimit} min</span>
      </div>
      <h3>{question.title}</h3>
      <div className="focus-areas">
        {question.focusAreas.map((area) => (
          <span key={area} className="focus-tag">
            {area}
          </span>
        ))}
      </div>
    </Link>
  )
}
