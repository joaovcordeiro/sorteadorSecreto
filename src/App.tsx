import Formulario from "./componentes/Formulario/Formulario";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./pages/Configuracao/Configuracao";
import Sorteio from "./pages/Sorteio/Sorteio";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
