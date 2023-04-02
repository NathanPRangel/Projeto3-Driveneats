let precoPrato, precoBebida, precoSobremesa;
let valorTotal;
let nomePrato, nomeBebida, nomeSobremesa;

let funcionarBotao = false;

function selecaoPratos(produtoSelecionado) {
  let selecionadoPrato = document.querySelector(".pratos .picked");

  if (selecionadoPrato !== null) {
    selecionadoPrato.classList.remove("picked");
  }

  produtoSelecionado.classList.add("picked");
  corBotaoConfirmar();

  let selectNomePrato = document.querySelector(".pratos .picked h2");
  nomePrato = selectNomePrato.innerHTML;

  let selectPrecoPrato = document.querySelector(".pratos .picked p");
  precoPrato = selectPrecoPrato.innerHTML;

  let textoProduto1 = document.querySelector(
    ".carrinho-de-compras .pratos-preco .prato"
  );
  textoProduto1.innerHTML = nomePrato;

  let precoProduto1 = document.querySelector(
    ".carrinho-de-compras .pratos-preco .preco-prato"
  );
  precoProduto1.innerHTML = precoPrato;
}

function selecaoBebidas(produtoSelecionado) {
  let selecionadoBebida = document.querySelector(".bebidas .picked");

  if (selecionadoBebida !== null) {
    selecionadoBebida.classList.remove("picked");
  }

  produtoSelecionado.classList.add("picked");
  corBotaoConfirmar();

  let selectNomeBebida = document.querySelector(".bebidas .picked h2");
  nomeBebida = selectNomeBebida.innerHTML;

  let selectPrecoBebida = document.querySelector(".bebidas .picked p");
  precoBebida = selectPrecoBebida.innerHTML;

  let textoProduto2 = document.querySelector(
    ".carrinho-de-compras .pratos-preco .bebida"
  );
  textoProduto2.innerHTML = nomeBebida;

  let precoProduto2 = document.querySelector(
    ".carrinho-de-compras .pratos-preco .preco-bebida"
  );
  precoProduto2.innerHTML = precoBebida;
}

function selecaoSobremesas(produtoSelecionado) {
  let selecionadoSobremesa = document.querySelector(".sobremesas .picked");

  if (selecionadoSobremesa !== null) {
    selecionadoSobremesa.classList.remove("picked");
  }

  produtoSelecionado.classList.add("picked");
  corBotaoConfirmar();

  let selectNomeSobremesa = document.querySelector(".sobremesas .picked h2");
  nomeSobremesa = selectNomeSobremesa.innerHTML;

  let selectPrecoSobremesa = document.querySelector(".sobremesas .picked p");
  precoSobremesa = selectPrecoSobremesa.innerHTML;

  let textoProduto3 = document.querySelector(
    ".carrinho-de-compras .pratos-preco .sobremesa"
  );
  textoProduto3.innerHTML = nomeSobremesa;

  let precoProduto3 = document.querySelector(
    ".carrinho-de-compras .pratos-preco .preco-sobremesa"
  );
  precoProduto3.innerHTML = precoSobremesa;
}

function corBotaoConfirmar() {
  const selecionadoPrato = document.querySelector(".pratos .picked");
  const selecionadoBebida = document.querySelector(".bebidas .picked");
  const selecionadoSobremesa = document.querySelector(".sobremesas .picked");

  const botaoConfirmacao = document.querySelector(".footer .caixa-confirmacao");
  const textoConfirmacao = document.querySelector(
    ".footer .caixa-confirmacao p"
  );

  if (
    selecionadoPrato !== null &&
    selecionadoBebida !== null &&
    selecionadoSobremesa !== null
  ) {
    botaoConfirmacao.classList.add("confirmar");
    textoConfirmacao.innerHTML = "Fechar pedido";
    funcionarBotao = true;
  }
}

function fecharPedido() {
  if (funcionarBotao === true) {
    const telaConfirmacao = document.querySelector(".fundo-opaco");
    telaConfirmacao.classList.remove("off");
  }
  precoTotal();
}

function cancelarPedido() {
  const botaoCancelar = document.querySelector(".fundo-opaco");
  botaoCancelar.classList.add("off");
}

function precoTotal() {
  console.log(precoPrato);
  console.log(precoBebida);
  console.log(precoSobremesa);

  let valor1 = parseFloat(precoPrato.replace("R$", "").replace(",", "."));
  let valor2 = parseFloat(precoBebida.replace("R$", "").replace(",", "."));
  let valor3 = parseFloat(precoSobremesa.replace("R$", "").replace(",", "."));

  valorTotal = valor1 + valor2 + valor3;

  let totalTexto = document.querySelector(
    ".carrinho-de-compras .total .preco-total"
  );
  totalTexto.innerHTML = "R$" + valorTotal.toFixed(2);
}

function mensagemWhatsapp() {
  let minhaString = encodeURIComponent(
    `Olá, gostaria de fazer o pedido:\n-Prato: ${nomePrato} \n-Bebida: ${nomeBebida} \n-Sobremesa: ${nomeSobremesa}\n Total: ${valorTotal.toFixed(
      2
    )}`
  );

  window.open(`https://wa.me/5527997519659?text=${minhaString}`);
}
