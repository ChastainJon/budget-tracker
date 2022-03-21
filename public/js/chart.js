let myChart
let transactions = []

async function populateChart() {
    await fetch("/api/transaction")
        .then(response => {
        return response.json();
        })
        .then(data => {
        // save db data on global variable
        transactions = data;
        });
    // copy array and reverse it
    let reversed = transactions.slice().reverse();
    let sum = 0;
  
    // create date labels for chart
    let labels = reversed.map(t => {
      let date = new Date(t.date);
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    });
  
    // create incremental values for chart
    let data = reversed.map(t => {
      sum += parseInt(t.value);
      return sum;
    });
  
    // remove old chart if it exists
    if (myChart) {
      myChart.destroy();
    }
  
    let ctx = document.getElementById("myChart").getContext("2d");
  
    myChart = new Chart(ctx, {
      type: 'line',
        data: {
          labels,
          datasets: [{
              label: "Total Over Time",
              fill: true,
              backgroundColor: "#6666ff",
              data
          }]
      }
    });
  }

module.exports = {populateChart}