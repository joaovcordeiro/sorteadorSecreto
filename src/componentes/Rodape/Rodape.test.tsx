import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import useListaParticipantes from "../../state/hook/useListaParticipantes";

jest.mock("../../state/hook/useListaParticipantes");

const mockNavigate = jest.fn();

const mockSorteio = jest.fn();

jest.mock("../../state/hook/useSorteador", () => ({
  useSorteador: () => mockSorteio,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("onde não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("a brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();
  });
});

describe("onde existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "João",
    ]);
  });
  test("a brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).not.toBeDisabled();
  });

  test("a brincadeira foi inciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
