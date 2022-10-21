import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro";
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
      <input
        ref={inputRef}
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={participante}
        onChange={(e) => setParticipante(e.target.value)}
      ></input>
      <button disabled={!participante}>Adicionar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </FormContainer>
  );
}

const FormContainer = styled.form``;
