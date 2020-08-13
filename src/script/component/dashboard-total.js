class DashboardTotal extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set casesTotal(casesTotal)
    {
        this._casesTotal = casesTotal;
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
                display:flex;
                justify-content: space-between;
                margin-bottom:2rem;
                width: 90vw;
            }
            .total-header{
                font-weight: bold;
                font-size: 2.5rem;
                padding: 1rem;
            }
            .total-number {
                font-size: 1.5rem;
                padding: 1rem;
            }
            .total-card {
                width: 33%;
            }
            @media only screen and (max-width: 768px) {
                .total-header{
                    font-weight: bold;
                    font-size: 1.5rem;
                    padding: 0.5rem;
                }
                .total-number {
                    font-size: 1rem;
                    padding: 0.5rem;
                }
                .total-card {
                    width: 100%;
                }
            }
            .c-secondary {
                color: var(--secondary);
            }
            .bg-primary {
                background-color: var(--primary);
            }
            .bg-dead {
                background-color: var(--dead);
            }
            .bg-infect{
                background-color: var(--infect);
            }
            .bg-cure{
                background-color: var(--cure);
            }
        </style>
        <div class="container">
            <div class="total-card bg-infect c-secondary">
                <div class="total-header">
                    Total Positif
                </div>
                <div class="total-number">
                    ${this._casesTotal.Confirmed} (+${this._casesTotal.AdditionConfirmed})
                </div>
            </div>
            <div class="total-card bg-cure c-secondary">
                <div class="total-header">
                    Total Sembuh
                </div>
                <div class="total-number">
                    ${this._casesTotal.Recovered} (+${this._casesTotal.AdditionRecovered})
                </div>
            </div>
            <div class="total-card bg-dead c-secondary">
                <div class="total-header">
                    Total Meninggal
                </div>
                <div class="total-number">
                    ${this._casesTotal.Deaths} (+${this._casesTotal.AdditionDeaths})
                </div>
            </div>
        </div>
        `;
    }
 }
  
 customElements.define("dashboard-total", DashboardTotal);