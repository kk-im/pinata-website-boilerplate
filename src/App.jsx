import './App.css'
import { createHashRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Layout
import Root from './components/Root'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
