import useListaParticipantes from "../../state/hook/useListaParticipantes";
import { useState } from "react";
import { useResultadoSorteio } from "state/hook/useResultadoSorteio";
import styled from "styled-components";

export default function Sorteio() {
  const participantes = useListaParticipantes();

  const resultado = useResultadoSorteio();

  const [participanteDaVez, setParticipanteDaVez] = useState<string>("");
  const [amigoSecreto, setAmigoSecreto] = useState<string>("");

  function sortear(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  }

  return (
    <SorteioContainer>
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDavez"
          id="participanteDavez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(e) => setParticipanteDaVez(e.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map((participante) => (
            <option key={participante} value={participante}>
              {participante}
            </option>
          ))}
        </select>
        <SortearButton>Sortear</SortearButton>
      </form>
      {amigoSecreto && <Resultado role="alert">{amigoSecreto}</Resultado>}
      <Footer>
        <AviaoImg
          src="/imagens/aviao.png"
          alt="Um desenho de um avião de papel"
        />
      </Footer>
    </SorteioContainer>
  );
}

const SorteioContainer = styled.section`
  select {
    border-radius: 45px;
    height: 82px;
    width: 70%;
    box-sizing: border-box;
    padding: 0 32px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: 0px 2px 0px 1px #000000;

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  select:focus {
    outline: none;
  }

  p {
    font-size: 20px;
    font-weight: 200;
    margin: 32px 0;
  }
`;

const Footer = styled.footer`
  margin: 64px 0;
`;

const SortearButton = styled.button`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #fe652b;
  color: #fff;
  cursor: pointer;
  margin: 16px 0;

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

const AviaoImg = styled.img``;

const Resultado = styled.p`
  color: #fe652bfc;
  font-size: 25px;
`;
