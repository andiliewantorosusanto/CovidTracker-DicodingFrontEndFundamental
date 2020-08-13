import backgroundimg from '../../assets/home.png';
class AppHome extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                height: 100vh;
                background-image: url('./${backgroundimg}');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            }
            .align-center {
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                height: 100%;
            }
            .btn-primary {
                transition: 0.3s;
                color:var(--secondary);
                background-color: var(--primary);
                border-style: solid;
                border-color: var(--primary);
                cursor: pointer;
            }
            .btn-primary:hover {
                border-style: solid;
                border-color: var(--primary);
                color: var(--primary);
                background-color: var(--secondary);
            }
            .btn-primary:focus {
                outline: none;
            }
            .btn {
                font-size: 1.5rem;
                padding: 10px;
                border-radius: 5px;
                text-decoration:none;
                margin-left: 5px;
            }
            .home-container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .home-text-indonesia{
                font-size: 6vw;
                font-weight: bold;
                color:var(--secondary);
            }
            .home-text-covid{
                font-size: 6vw;
                font-weight: bold;
                color: var(--primary);
            }
            .home-text-punchline{
                font-size: 6vw;
                font-weight: bold;
                color: var(--secondary);
            }
            .btn-container{
                display: flex;
                justify-content: flex-end;
                align-items: start;
                padding-top: 0.5vw;
            }
            @media only screen and (max-width: 768px) {
                .home-container {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .btn-container{
                    justify-content: center;
                    margin-bottom:1rem;
                }
                .home-text-indonesia{
                    margin-top:1rem;
                    display: flex;
                    justify-content: center;
                }
                .home-text-covid{
                    margin-top:1rem;
                    display: flex;
                    justify-content: center;
                    color: var(--secondary);
                }
                .home-text-punchline{
                    margin-bottom:1rem;
                    display: flex;
                    justify-content: center;
                    color: var(--primary);
                }
            }
        </style>
        <div class="align-center">
            <div class="home-container">
                <div>
                    <div class="home-text-indonesia">
                        Indonesia
                    </div>
                    <div class="home-text-covid">
                        Covid Tracker
                    </div>
                </div>
                <div>
                    <div class="home-text-punchline">
                        #STAY<span>HOME</span>
                    </div>
                    <div class="btn-container">
                        <a href="#news" class="btn btn-primary">
                            News
                        </a>
                        <a href="#dashboard" class="btn btn-primary">
                            Dashboard
                        </a>
                        <a href="#map" class="btn btn-primary">
                            Map
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
        `;
    }
 }
  
 customElements.define("app-home", AppHome);