import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import FisioterapiaPortoAlegre from './pages/FisioterapiaPortoAlegre'
import ReabilitacaoPortoAlegre from './pages/ReabilitacaoPortoAlegre'
import DomiciliarPortoAlegre from './pages/DomiciliarPortoAlegre'
import FisioterapiaCaesPortoAlegre from './pages/FisioterapiaCaesPortoAlegre'
import ReabilitacaoPosOperatoriaCaesPortoAlegre from './pages/ReabilitacaoPosOperatoriaCaesPortoAlegre'

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

        <Route
          path="/fisioterapia-para-caes-porto-alegre"
          element={<FisioterapiaCaesPortoAlegre />}
        />

        <Route
          path="/reabilitacao-pos-operatoria-caes-porto-alegre"
          element={<ReabilitacaoPosOperatoriaCaesPortoAlegre />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App