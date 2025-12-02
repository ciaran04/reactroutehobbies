import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Hobbies from './pages/Hobbies'
import HobbyDetail from './pages/HobbyDetail'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1 className="text-center my-4">My Hobbies App</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/hobbies/:id" element={<HobbyDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
