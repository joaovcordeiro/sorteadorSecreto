import Formulario from "../../componentes/Formulario/Formulario";
import ListaParticipantes from "../../componentes/ListaParticipantes/ListaParticipantes";
import Rodape from "../../componentes/Rodape/Rodape";

export default function Configuracao() {
  return (
    <section>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </section>
  );
}
