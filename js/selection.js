// const countryCard = document.getElementById("countryCard");

// // Captar url
// const url = new URLSearchParams(window.location.search);
// // Captar parametros url
// const paramnameUrl = url.get('paramname');
// console.log(paramnameUrl)

// Realizar petición API con parámetro
window.addEventListener('load', function(event) {
    getData();

});

const getData = async function getData() {
const countryCard = document.getElementById("countryCard");

// Captar url
const urlselection = new URLSearchParams(window.location.search);
console.log(urlselection)
// Captar parametros url
const paramnameUrl = urlselection.get('paramname');
console.log(paramnameUrl)

    const url = "https://restcountries.eu/rest/v2/name/"+paramnameUrl;
    let response = await fetch(url);
    if (response.ok) {
      const data = await response.json(); // read response body and parse as JSON
      showCountries(data);

    } else {
      alert("HTTP-error" + response.status);
    }
  }
  
  const showCountries = async function showCountries(countries) {
    countryCard.innerHTML = "";
    countries.forEach((country) => {
      //console.log(country);
      //Create <div>
      const countryElement = document.createElement("div");
      //Define style
      countryElement.classList.add("card");
      //Show it
      countryElement.innerHTML = `
              <div class="flag">
              <img src="${country.flag}" alt="" />
              </div>
                  <div class="card-content-one">
                  <h3>${country.name}</h3>
                  <p>
                          <strong>Population:</strong>
                          ${country.population}
                      </p>
                      <p class="country-region">
                          <strong>Region:</strong>
                          ${country.region}
                      </p>
                      <p>
                          <strong>Capital:</strong>
                          ${country.capital}
                      </p>

                      <p>
                          <strong>Coords:</strong>
                          ${country.latlng[0]}-${country.latlng[1]}
                      </p>

                      <p>
                          <strong>Borders:</strong>
                          ${country.borders}
                      </p>
                
                      </div>
              `;
      countryCard.appendChild(countryElement);
  
      countryElement.addEventListener('click',()=>{
          selectOneCountry()
      })
    });
  }