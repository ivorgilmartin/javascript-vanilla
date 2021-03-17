import "./Chart.js";

const chartType = document.querySelector("#chart-type");
const context = document.querySelector('#app-chart').getContext('2d');

let chart = null;

const colors = {
    safari: '#25AEEE',
    chrome: '#FECD52',
    firefox: '#FD344B',
    edge: '#57D269',
}

const render = type => {
    if(chart){
        chart.destroy();
    }
    chart = new Chart(context, {
    type: type,
    data: {
        labels: ["Safari", "Chrome","Firefox", "Edge"],
        datasets: [{
                label: 'market %',
                data: [16.74, 64.26, 4.47, 2.11],
                backgroundColor: [colors.safari, colors.chrome,colors.firefox, colors.edge]

            }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

console.log(type);

}


chartType.addEventListener("change", event => {
    render(event.currentTarget.value);
});

render(chartType.value);