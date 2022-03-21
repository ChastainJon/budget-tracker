let transactions = []

async function populateTotal() {
    await fetch("/api/transaction")
        .then(response => {
            return response.json();
        })
        .then(data => {
            // save db data on global variable
            console.log(data)
            transactions = data;
        });
    
    console.log(transactions)

    // reduce transaction amounts to a single total value
    let total = transactions.reduce((total, t) => {
        return total + parseInt(t.value);
    }, 0);

    let totalEl = document.querySelector("#total");
    totalEl.textContent = total;
}

async function populateTable() {
    await fetch("/api/transaction")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // save db data on global variable
        transactions = data;
    });
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
    
    console.log(transactions)
    transactions.forEach(transaction => {
      // create and populate a table row
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
      `;
  
      tbody.appendChild(tr);
    });
}

module.exports = { populateTable, populateTotal}
