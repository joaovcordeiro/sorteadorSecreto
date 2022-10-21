import { fireEvent, render, screen, act } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

//Jest

describe("o comportamento do Formulario.tsx", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    expect(input).toBeInTheDocument();

    expect(botao).toBeDisabled();
  });

  test("adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "João" } });

    fireEvent.click(botao);

    expect(input).toHaveFocus();

    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "João" } });

    fireEvent.click(botao);

    fireEvent.change(input, { target: { value: "João" } });

    fireEvent.click(botao);

    const mensagemErro = screen.getByRole("alert");

    expect(mensagemErro.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });

  test("a mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "João" } });

    fireEvent.click(botao);

    fireEvent.change(input, { target: { value: "João" } });

    fireEvent.click(botao);

    let mensagemErro = screen.queryByRole("alert");

    expect(mensagemErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemErro = screen.queryByRole("alert");

    expect(mensagemErro).toBeNull();
  });
});
