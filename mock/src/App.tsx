import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { QuestionPage } from './pages/QuestionPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/q/:questionId" element={<QuestionPage />} />
    </Routes>
  )
}

export default App
