// 1. Lista de imagens e legendas que serão exibidas.
const fotos = [
    { arquivo: "imagens/foto1.jpg", legenda: "Singapura" },
    { arquivo: "imagens/foto2.jpg", legenda: "Paddock" },
    { arquivo: "imagens/foto3.jpg", legenda: "Preparação do carro" },
    { arquivo: "imagens/foto4.jpg", legenda: "Max Verstappen" },
    { arquivo: "imagens/foto5.jpg", legenda: "Treino Livre" },
    { arquivo: "imagens/foto6.jpg", legenda: "Classificação" },
    { arquivo: "imagens/foto7.jpg", legenda: "Largada" },
    { arquivo: "imagens/foto8.jpg", legenda: "Verstappen Lidera a corrida" },
    { arquivo: "imagens/foto9.jpg", legenda: "Pit Stop" },
    { arquivo: "imagens/foto10.jpg", legenda: "Verstappen recebe a bandeirada" },
    { arquivo: "imagens/foto11.jpg", legenda: "E ganha no GP de Singapura" },
  ];
  
  // 2. Guarda a posição da foto que está sendo exibida.
  let indiceAtual = 0;
  
  // 3. Guarda o identificador do temporizador automático.
  let temporizador = null;
  
  // 4. Busca os elementos HTML pelos seus IDs.
  const imagem = document.getElementById("foto-principal");
  const legenda = document.getElementById("legenda");
  const contador = document.getElementById("contador");
  
  const botaoAnterior = document.getElementById("anterior");
  const botaoProxima = document.getElementById("proxima");
  const botaoIniciar = document.getElementById("iniciar");
  const botaoPausar = document.getElementById("pausar");
  
  // 5. Atualiza imagem, legenda e contador na tela.
  function mostrarFoto() {
    imagem.src = fotos[indiceAtual].arquivo;
    imagem.alt = fotos[indiceAtual].legenda;
    legenda.textContent = fotos[indiceAtual].legenda;
    contador.textContent =
      `Foto ${indiceAtual + 1} de ${fotos.length}`;
  }
  
  // 6. Avança uma posição. Se chegar ao final, volta ao início.
  function proximaFoto() {
    indiceAtual = (indiceAtual + 1) % fotos.length;
    mostrarFoto();
  }
  
  // 7. Volta uma posição. Se estiver no início, vai para a última.
  function fotoAnterior() {
    indiceAtual =
      (indiceAtual - 1 + fotos.length) % fotos.length;
    mostrarFoto();
  }
  
  // 8. Registra o que deve acontecer quando os botões forem clicados.
  botaoProxima.addEventListener("click", proximaFoto);
  botaoAnterior.addEventListener("click", fotoAnterior);
  
  // 9. Inicia a troca automática de imagens.
  function iniciarApresentacao() {
    // Evita criar vários temporizadores ao clicar repetidamente.
    if (temporizador !== null) {
      return;
    }
  
    temporizador = setInterval(proximaFoto, 2500);
  }
  
  // 10. Interrompe a troca automática.
  function pausarApresentacao() {
    clearInterval(temporizador);
    temporizador = null;
  }