import { HashRouter, Route, Routes } from "react-router-dom";
import { Admin, Catalogue, Home } from './pages';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  )
}

export default App
