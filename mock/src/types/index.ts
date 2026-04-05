export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Question {
  id: string
  title: string
  difficulty: Difficulty
  timeLimit: number // minutes
  focusAreas: string[]
  prompt: string
  requirements: string[]
  hints: string[]
  evaluationCriteria: string[]
}
