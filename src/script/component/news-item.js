import defaultImage from '../../assets/corona.jpg';
class NewsItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set news(news) {
        this._news = news;
        this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
          <style>
            :host {
                position:relative;
                background-color: var(--secondary);
            }
            a{
                text-decoration: none;
            }
            .news {
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                height: 20rem;
                width: 20rem;
            }
            .text {
                position:absolute;
                z-index:1;
                width: 100%;
                display: flex;
                flex-direction: column;
                text-align: center;
                opacity: 1;
            }
            .title {
                font-size: 1rem;
                color: black;
                font-weight: bold;
                max-height:8rem;
                overflow:hidden;
            }
            .info {
                font-size: 0.5rem;
                color: grey;
            }
            .background {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: url(${this._news.urlToImage}),url(${defaultImage});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                opacity: .4;
                width: 100%;
                height: 100%;
            }
          </style>
          <div class="background">
          </div>
          <a class="news" href="${this._news.url}" >
            <div class="text">
                <div class="title">
                    ${this._news.title}
                </div>
                <div class="info">
                    <span class="source">
                        ${this._news.source.name}
                    </span>
                    , 
                    <span class="time">
                        ${this._news.publishedAt}
                    </span>
                </div>
            </div>
        </a>
        `;
    }
  }
  
  customElements.define("news-item", NewsItem);