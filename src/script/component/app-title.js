class AppTitle extends HTMLElement {
 
    constructor() {
        super();
        this._color = "primary";
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set color(color)
    {
        this._color = color;
        this.render();
    }
    set title(title)
    {
        this._title = title;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                box-sizing: border-box;
            }
            :host {
                margin-bottom:1vh !important;
                display: flex;
                color: var(--${this._color});
                justify-content: center;
                align-items: center;
                font-size: 3rem;
            }
            .container {
                margin-top:0.5rem;
                margin-bottom:0.5rem;
                width: 90vw;
            }
            .title {
                width:100%;
                text-align:center;
                font-weight:bold;
            }
        </style>
        <div class="container">
            <div class="title">
                ${this._title}
            </div>
        </div>
        `;
    }
 }
  
 customElements.define("app-title", AppTitle);