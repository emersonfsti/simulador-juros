function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;
  }
  
  function calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const juros = parseFloat(document.getElementById("juros").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valor) || isNaN(juros)) {
      resultado.textContent = "Preencha os campos corretamente.";
      return;
    }
  
    const valorFinal = incrementarJuros(valor, juros);
    resultado.textContent = `Valor com Juros: R$ ${valorFinal.toFixed(2)}`;
  }
  