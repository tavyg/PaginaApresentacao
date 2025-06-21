let botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
  let msg = document.querySelector("#mensagem");
  msg.textContent = "Seja muito bem vindo!";
  msg.style.display = "block";
});
