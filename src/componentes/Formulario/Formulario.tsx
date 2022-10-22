import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro";
import styled from "styled-components";

export default function Formulario() {
  const [participante, setParticipante] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionar = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    adicionar(participante);
    setParticipante("");
    inputRef.current?.focus();
  }

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <GroupedInput>
        <input
          ref={inputRef}
          type="text"
          placeholder="Insira os nomes dos participantes"
          value={participante}
          onChange={(e) => setParticipante(e.target.value)}
        ></input>
        <button disabled={!participante}>Adicionar</button>
      </GroupedInput>
      {mensagemDeErro && <Erro role="alert">{mensagemDeErro}</Erro>}
    </FormContainer>
  );
}

const FormContainer = styled.form``;
const GroupedInput = styled.div`
  margin-bottom: 32px;

  input {
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    height: 82px;
    width: 70%;
    box-sizing: border-box;
    padding-left: 32px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: 0px 2px 0px 1px #000000;

    @media screen and (max-width: 800px) {
      display: block;
      width: 100%;
      border-radius: 45px;
      box-shadow: 0px 2px 0px 1px #000000;
      margin-bottom: 18px;
    }
  }

  input:focus {
    outline: none;
  }

  button {
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    height: 82px;
    width: 30%;
    box-sizing: border-box;
    border: 2px solid black;
    font-size: 20px;
    color: #000000;
    box-shadow: 2px 2px 0px 1px #000000;
    cursor: pointer;
    background-color: #c4c4c4;

    @media screen and (max-width: 800px) {
      display: block;
      margin-top: 16px;
      margin: 0 auto;
      width: 220px;
      border-radius: 45px;
    }
  }
  button:hover {
    opacity: 0.8;
  }
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Erro = styled.p`
  color: #842029;
  background-color: #f8d7da;
  padding: 16px;
  border: 1px solid #f5c2c7;
  border-radius: 8px;

  @media screen and (max-width: 800px) {
    margin: 48px 0;
  }
`;
