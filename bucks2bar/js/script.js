document.addEventListener('DOMContentLoaded', function () {
    
    // input with id "username" input
    document.getElementById('username').addEventListener('input', function () {
        var username = document.getElementById('username').value;
        var regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
        var result = regex.test(username);
        if(result){
            // set the username input to green
            document.getElementById('username').style.borderColor = 'green';
        }
        else{
            // do opposite color to above
            document.getElementById('username').style.borderColor = 'red';
        }
    });

    var myChart;

    document.getElementById('chart-tab').addEventListener('shown.bs.tab', function () {
        var incomeData = [];
        var expensesData = [];
        var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

        months.forEach(function (month) {
            var income = document.getElementById('income-' + month).value || 0;
            var expenses = document.getElementById('expenses-' + month).value || 0;
            incomeData.push(parseFloat(income));
            expensesData.push(parseFloat(expenses));
        });

        var ctx = document.getElementById('myChart').getContext('2d');

        if (myChart) {
            myChart.data.datasets[0].data = incomeData;
            myChart.data.datasets[1].data = expensesData;
            myChart.update();
        } else {
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        label: 'Income',
                        data: incomeData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }, {
                        label: 'Expenses',
                        data: expensesData,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    });

    document.getElementById('download').addEventListener('click', function () {
        var canvas = document.getElementById('myChart');
        var link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'chart.png';
        link.click();
    });
});