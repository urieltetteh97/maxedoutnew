import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import News from './pages/News'
import Portfolio from './pages/Portfolio'
import Resources from './pages/Resources'
import IndustryUpdates from './pages/IndustryUpdates'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:projectId" element={<ProjectDetail />} />
          <Route path="resources" element={<Resources />} />
          <Route path="animation" element={<IndustryUpdates topic="animation" />} />
          <Route path="games" element={<IndustryUpdates topic="games" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
