const valorConta = 100
const percentualGorjeta = 15

const valorGorjeta = valorConta * (percentualGorjeta / 100)

const valorTotal = valorConta + valorGorjeta

console.log(`Valor da conta R$${valorConta}, gorjeta (${percentualGorjeta}%): R$${valorGorjeta}, total a pagar: R$${valorTotal}`);
