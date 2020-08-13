class AppDashboard extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.fetchData();
    }
  
    render(result) {
        
        this.shadowDOM.innerHTML = `
        <style>
            * {
                box-sizing: border-box;
            }
            :host {
                display: block; 
                background-color: #f8f8f8;
            }
        </style>
        
        `;
        //#region  app-title
        const appTitleElement = document.createElement("app-title");
        appTitleElement.title = "Dashboard";
        this.shadowDOM.appendChild(appTitleElement);
        //#endregion
        
        //#region dashboard-total
        const dashboardTotalElement = document.createElement("dashboard-total");
        const lastCase = result[result.length-1];
        const dayBeforeCase = result[result.length-2];

        const casesTotal = {
            Confirmed : lastCase.Confirmed,
            Deaths : lastCase.Deaths,
            Recovered : lastCase.Recovered,
            AdditionConfirmed : lastCase.Confirmed - dayBeforeCase.Confirmed,
            AdditionDeaths : lastCase.Deaths - dayBeforeCase.Deaths,
            AdditionRecovered : lastCase.Recovered - dayBeforeCase.Recovered
        };

        dashboardTotalElement.casesTotal = casesTotal;
        this.shadowDOM.appendChild(dashboardTotalElement);
        //#endregion

        //#region dashboard-graph
        const dashboardGraphElement = document.createElement("dashboard-graph");

        const cases = {
            Dates : result.map( ({Date}) => Date.substring(0,10)),
            Confirmed : result.map( ({Confirmed}) => Confirmed),
            Deaths : result.map( ({Deaths}) => Deaths),
            Recovered : result.map( ({Recovered}) => Recovered),
            Active : result.map( ({Active}) => Active)
        }
        dashboardGraphElement.cases = cases;
        this.shadowDOM.appendChild(dashboardGraphElement);
        //#endregion
    }

    fetchData() {
        fetch(`https://api.covid19api.com/total/dayone/country/indonesia`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                this.render(responseJson);
            })
            .catch(error => {
                console.log(error);
            });
    }
 }
  
 customElements.define("app-dashboard", AppDashboard);