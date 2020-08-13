class DashboardGraph extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set cases(cases){
        this._cases = cases;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                box-sizing: border-box;
            }
            :host {
                display: flex;
                justify-content: center;
            }
            .container {
                height:80vh;
                margin-bottom: 4rem;
                width: 90vw;
            }
        </style>
        <div class="container">
            <canvas id="canvas">

            </canvas>
        </div>
        `;
        const ctx = this.shadowDOM.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this._cases.Dates,
                datasets: [{
                    label: 'Confimed Cases',
                    backgroundColor: '#f87979',
                    borderColor : '#f87979',
                    fill: false,
                    data: this._cases.Confirmed
                },
                {
                    label: 'Deaths',
                    backgroundColor: '#9400D3',
                    borderColor : '#9400D3',
                    fill: false,
                    data: this._cases.Deaths
                },
                {
                    label: 'Recovered',
                    backgroundColor: '#7CFC00',
                    borderColor : '#7CFC00',
                    fill: false,
                    data: this._cases.Recovered
                },
                {
                    label: 'Active',
                    backgroundColor: '#ADD8E6',
                    borderColor : '#ADD8E6',
                    fill: false,
                    data: this._cases.Active
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
        });
    }
 }


 customElements.define("dashboard-graph", DashboardGraph);