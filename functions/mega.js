export default function mega(quantidade = 6, numeros = [], tentativas = 0) {
    quantidade = +quantidade;
    const limiteTentativas = 1000; // Limite de tentativas para evitar recursão infinita
  
    if (quantidade < 6 || quantidade > 60) {
      throw 'quantidade invalida';
    }
    if (numeros.length === quantidade) {
      return numeros.sort((n1, n2) => n1 - n2);
    }
  
    if (tentativas > limiteTentativas) {
      throw 'Não foi possível gerar os números em um número razoável de tentativas';
    }
  
    const numeroAleatorio = parseInt(Math.random() * 60) + 1;
    if (!numeros.includes(numeroAleatorio)) {
      return mega(quantidade, [...numeros, numeroAleatorio], tentativas + 1);
    } else {
      return mega(quantidade, numeros, tentativas + 1);
    }
  }
  