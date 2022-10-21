import Formulario from "./componentes/Formulario";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Formulario />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
