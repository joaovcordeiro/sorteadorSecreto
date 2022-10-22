import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import useListaParticipantes from "./useListaParticipantes";
import { realizarSorteio } from "../helpers/realizarSorteio";

export function useSorteador() {
  const participantes = useListaParticipantes();

  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  return () => {
    const resultado = realizarSorteio(participantes);
    return setResultado(resultado);
  };
}
