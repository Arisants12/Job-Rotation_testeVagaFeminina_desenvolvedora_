const faturamentoPorEstado = {
   "SP": 67836.43,
   "RJ": 36678.66,
   "MG": 29229.88,
   "ES": 27165.48,
   "Outros": 19849.53
};

function calcularFaturamentoTotal(faturamentoPorEstado) {
   return Object.values(faturamentoPorEstado).reduce((total, faturamento) => total + faturamento, 0);
}

function calcularPercentuaisDeRepresentacao(faturamentoPorEstado, faturamentoTotal) {
   const percentuais = {};
   for (const estado in faturamentoPorEstado) {
       percentuais[estado] = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
   }
   return percentuais;
}

function exibirResultados(percentuais) {
   console.log("Percentual de representação por estado:");
   for (const estado in percentuais) {
       console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
   }
}

const totalFaturamento = calcularFaturamentoTotal(faturamentoPorEstado);

const percentuaisDeRepresentacao = calcularPercentuaisDeRepresentacao(faturamentoPorEstado, totalFaturamento);

exibirResultados(percentuaisDeRepresentacao);
