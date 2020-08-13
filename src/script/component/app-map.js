import leaflet_css from "leaflet_css";
import latlong from "constant/latlong.js";
import mapbox from "constant/mapbox.js";

class AppMap extends HTMLElement {
 
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
            @import
            * {
                box-sizing: border-box;
            }
            :host {
                display: flex; 
                flex-direction: column;
                align-items: center;
                height: 100vh;
                background-color: var(--primary);
            }
            ${leaflet_css.toString()}
        </style>
        `;
        const appTitleElement = document.createElement("app-title");
        appTitleElement.title = "Map";
        appTitleElement.color = "secondary";
        this.shadowDOM.appendChild(appTitleElement);


        const leafletElement = document.createElement("div");
        leafletElement.style.cssText = "height:85%;width:90%;"
        this.shadowDOM.appendChild(leafletElement);

        let mymap = L.map(leafletElement).setView([0.7893, 113.9213], 6);
        L.tileLayer(`${mapbox.link}${mapbox.accessToken}`, {
            attribution: mapbox.attribution,
            maxZoom: 18,
            id: mapbox.id,
            tileSize: 512,
            zoomOffset: -1,
            accessToken: mapbox.accessToken
        }).addTo(mymap);
        
        result.data.forEach(function(caseProvince){
            let caseLatLong = latlong.find(ll => ll.name == caseProvince.provinsi);

            if(caseLatLong !== undefined)
            {
                let covidArea = L.circle([caseLatLong.lat, caseLatLong.long], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: caseProvince.kasusPosi
                }).addTo(mymap);
                covidArea.bindPopup(`${caseProvince.provinsi} infected : ${caseProvince.kasusPosi}`);
            }
        })
    }

    fetchData() {
        fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
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
  
 customElements.define("app-map", AppMap);