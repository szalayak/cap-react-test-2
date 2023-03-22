import { HashRouter, Route, Routes } from "react-router-dom";
import { About, Admin, Catalogue, Home, NotFound } from './pages';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="admin" element={<Admin />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
