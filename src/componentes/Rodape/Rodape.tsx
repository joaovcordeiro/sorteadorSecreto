import useListaParticipantes from "../../state/hook/useListaParticipantes";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSorteador } from "../../state/hook/useSorteador";

export default function Rodape() {
  const participantes = useListaParticipantes();

  const navigate = useNavigate();

  const sortear = useSorteador();

  function iniciar() {
    sortear();
    navigate("/sorteio");
  }

  return (
    <RodapeConf>
      <Button disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </Button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </RodapeConf>
  );
}

const RodapeConf = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    img {
      margin-top: 32px;
    }
  }
`;
const Button = styled.button`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #fe652b;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4b69fd;
  }

  @media screen and (max-width: 800px) {
    width: 220px;
    margin: 32px 0;
  }
`;
