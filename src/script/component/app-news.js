import './news-item.js';
 
class AppNews extends HTMLElement {
 
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
        :host {
            width: 100%;
            height: 25vh;
            overflow: hidden;
        }
        .carousel {
            width: 100%;
            display: flex;
            flex-shrink: 0;
            overflow: hidden;
            align-items: center;
        }
        .container{
            background-color: var(--primary);
            padding-bottom: 3rem;
        }
       </style>
       `;
        const containerElement = document.createElement("div");
        containerElement.classList.add("container");

        const appTitleElement = document.createElement("app-title");
        appTitleElement.title = "News";
        appTitleElement.color = "secondary";
        containerElement.appendChild(appTitleElement);

        const carrouselElement = document.createElement("div");
        carrouselElement.classList.add("carousel");
        result.forEach(news => {
           const newsItemElement = document.createElement("news-item");
           newsItemElement.news = news
           carrouselElement.appendChild(newsItemElement);
        });
        containerElement.appendChild(carrouselElement);

        this.shadowDOM.appendChild(containerElement);
   }


   fetchData() {
        fetch(`http://newsapi.org/v2/top-headlines?country=us&q=corona&apiKey=db7338ea2a76464f9fd250acc552d966`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            this.render(responseJson.articles);
        })
        .catch(error => {
            console.log(error);
        });
   }
}
 
customElements.define("app-news", AppNews);