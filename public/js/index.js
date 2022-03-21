let transactions = [];
let myChart;
const {populateTotal, populateTable} = require('./table.js')
const {populateChart} = require('./chart.js')
const {sendTransaction} = require('./transaction.js')

fetch("/api/transaction")
  .then(response => {
    console.log(JSON.stringify(response))
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;
  })

  populateTotal();
  populateTable();
  populateChart();
  

document.querySelector("#add-btn").onclick = function() {
  sendTransaction(true);
};

document.querySelector("#sub-btn").onclick = function() {
  sendTransaction(false);
};
