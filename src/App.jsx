import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './_pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App