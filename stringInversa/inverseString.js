// Função para inverter uma string
function inverterString(string) {
   let invertedString = '';
   for (let i = string.length - 1; i >= 0; i--) {
       invertedString += string[i];
   }
   return invertedString
}

function main() {
   const readline = require('readline').createInterface({
       input: process.stdin,
       output: process.stdout
   });

   readline.question("Digite a string a ser invertida: ", (inputString) => {
       const stringInvertida = inverterString(inputString);

       console.log("String original:", inputString);
       console.log("String invertida:", stringInvertida);
       readline.close();
   });
}

main();
