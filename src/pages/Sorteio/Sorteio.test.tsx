import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import useListaParticipantes from "../../state/hook/useListaParticipantes";
import Sorteio from "./Sorteio";
import { act } from "react-dom/test-utils";

jest.mock("../../state/hook/useListaParticipantes");
jest.mock("../../state/hook/useResultadoSorteio");

describe("na pagina de sorteio", () => {
  const participantes = ["Ana", "Catarina", "João"];
  const resultado = new Map([
    ["Ana", "Catarina"],
    ["Catarina", "João"],
    ["João", "Ana"],
  ]);
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length + 1);
  });

  test("O amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, { target: { value: participantes[0] } });

    const botao = screen.getByRole("button");

    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole("alert");

    expect(amigoSecreto).toBeInTheDocument();
  });

  test("O amigo secreto some depois dos timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, { target: { value: participantes[0] } });

    const botao = screen.getByRole("button");

    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole("alert");

    expect(amigoSecreto).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    expect(amigoSecreto).not.toBeInTheDocument();
  });
});
