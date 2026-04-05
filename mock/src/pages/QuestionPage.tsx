import { Suspense } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { DifficultyBadge } from '../components/DifficultyBadge'
import { HintsSection } from '../components/HintsSection'
import { questionComponents } from '../questions/registry'
import { useCompletion } from '../hooks/useCompletion'

export function QuestionPage() {
  const { questionId } = useParams<{ questionId: string }>()
  const question = questions.find((q) => q.id === questionId)
  const QuestionComponent = questionId ? questionComponents[questionId] : undefined
  const { completed, toggleComplete } = useCompletion()
  const isDone = questionId ? completed.has(questionId) : false
  const navigate = useNavigate()

  const handleMarkDone = () => {
    if (!isDone) {
      toggleComplete(question!.id)
      navigate('/')
    } else {
      toggleComplete(question!.id)
    }
  }

  if (!question) {
    return (
      <div className="not-found">
        <h1>Question not found</h1>
        <Link to="/">&larr; Back to all questions</Link>
      </div>
    )
  }

  return (
    <div className="question-page">
      <div className="question-topbar">
        <Link to="/" className="back-link">&larr; All Questions</Link>
        <button
          className={`done-toggle${isDone ? ' done-toggle--active' : ''}`}
          onClick={handleMarkDone}
        >
          {isDone ? 'Completed' : 'Mark as Done'}
        </button>
      </div>

      <header className="question-header">
        <div className="question-meta">
          <DifficultyBadge difficulty={question.difficulty} />
          <span className="time-limit">{question.timeLimit} min</span>
        </div>
        <h1>{question.title}</h1>
        <div className="focus-areas">
          {question.focusAreas.map((area) => (
            <span key={area} className="focus-tag">{area}</span>
          ))}
        </div>
      </header>

      <section className="question-prompt">
        <h2>Prompt</h2>
        <p>{question.prompt}</p>
      </section>

      <section className="question-requirements">
        <h2>Requirements</h2>
        <ul>
          {question.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      <HintsSection hints={question.hints} />

      <details className="evaluation-section">
        <summary>Evaluation Criteria ({question.evaluationCriteria.length})</summary>
        <ul>
          {question.evaluationCriteria.map((criterion, i) => (
            <li key={i}>{criterion}</li>
          ))}
        </ul>
      </details>

      <section className="workspace-section">
        <h2>Your Solution</h2>
        <div className="workspace">
          <Suspense fallback={<p>Loading...</p>}>
            {QuestionComponent ? <QuestionComponent /> : <p>No component found for this question.</p>}
          </Suspense>
        </div>
      </section>
    </div>
  )
}
