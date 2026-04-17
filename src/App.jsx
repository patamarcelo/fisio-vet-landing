import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FisioterapiaPortoAlegre from './pages/FisioterapiaPortoAlegre'
import ReabilitacaoPortoAlegre from './pages/ReabilitacaoPortoAlegre'
import DomiciliarPortoAlegre from './pages/DomiciliarPortoAlegre'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/fisioterapia-veterinaria-porto-alegre"
          element={<FisioterapiaPortoAlegre />}
        />
        <Route
          path="/reabilitacao-veterinaria-porto-alegre"
          element={<ReabilitacaoPortoAlegre />}
        />
        <Route
          path="/fisioterapia-veterinaria-domiciliar-porto-alegre"
          element={<DomiciliarPortoAlegre />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App