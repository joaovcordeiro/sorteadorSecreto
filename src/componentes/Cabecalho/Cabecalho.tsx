import styled from "styled-components";

export default function Cabecalho() {
  return (
    <CabecalhoContainer>
      <Logo role="img" aria-label="Logo do Sorteador"></Logo>
      <LogoImg
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      ></LogoImg>
    </CabecalhoContainer>
  );
}

const CabecalhoContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  @media (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  background-image: url("imagens/logo.png");
  width: 351px;
  height: 117px;

  @media (max-width: 800px) {
    background-image: url("imagens/logo-pequeno.png");
    width: 235px;
    height: 199px;
  }
`;

const LogoImg = styled.img`
  z-index: 1;
`;
