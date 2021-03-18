const convert = require('csvtojson');
const fs = require('fs');

//Neste desafio pude aprender a importância, e existencia, do CSV
//Aprendi a trancrever o arquivo para JSON de duas maneiras;
//Pesquisei a existencia de diversas bibliotecas node.js
//Encontrei uma forma especifica para essa conversão;



convert().fromFile('input.csv').then(input => {
    const entrada = JSON.stringify(input);
    fs.writeFile('output.json', entrada, (err) => {
        if(err) {
            throw err;
        }
    })
    console.log("JSON convertido com sucesso");
});

//Gabriella Garcia Silva de Sousa