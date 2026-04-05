export function HintsSection({ hints }: { hints: string[] }) {
  if (hints.length === 0) return null

  return (
    <details className="hints-section">
      <summary>Hints ({hints.length})</summary>
      <ul>
        {hints.map((hint, i) => (
          <li key={i}>{hint}</li>
        ))}
      </ul>
    </details>
  )
}
