import { useRecoilValue } from "recoil";
import { listaParticipantesState } from "../atom";

export default function () {
  return useRecoilValue(listaParticipantesState);
}
