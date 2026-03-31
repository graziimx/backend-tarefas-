//--Dados do Pedido--

let nomeCliente ="Gustavo vai voltar";
let tipoCliente= "premium";

let nomeProduto = "Teclado Mecânico";
let precoProduto = 1400.00;
let estoque = 10;
let quantidadePedido = 5;
 
//Tem estoque suficiente?
let estoqueOK = quantidadePedido <= estoque;
if (!estoqueOK) {
console.log("Pedido RECUSADO estoque insuficiente")
}