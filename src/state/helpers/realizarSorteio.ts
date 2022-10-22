export function realizarSorteio(participantes: string[]) {
  const totalParticipantes = participantes.length;

  const participantesCopy = [...participantes];

  const embaralhado = participantesCopy.sort(() => Math.random() - 0.5);

  const resultado = new Map<string, string>();

  for (let index = 0; index < totalParticipantes; index++) {
    const indiceDoAmigo = index === totalParticipantes - 1 ? 0 : index + 1;
    resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);
  }

  return resultado;
}
