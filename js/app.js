const countryCard = document.getElementById("countryCard");

window.addEventListener('load', function(event) {
    getData();
    // diferencia 'load' y 'DomContentLoaded'
});

//There are multiple ways to send a network request and get information from the server.
//fetch() method is modern and versatile, (can be polyfilled), but very well supported among the modern ones.
//let promise = fetch(url, [options])
//Without options, that is a simple GET request, downloading the contents of the url.
//We can see HTTP-status in response properties:
// status – HTTP status code, e.g. 200.
//ok – boolean, true if the HTTP status code is 200-299.

const getData = async function getData() {
  const url = "https://restcountries.eu/rest/v2/all";
  const urlLocal = "./data/api.json";
  let response = await fetch(urlLocal);//datos consumiendo api o api.json directos desde repositorio local
  if (response.ok) {
    const data = await response.json(); // read response body and parse as JSON
    showCountries(data);
    searchData(data);
    selectRegion(data);//We send data from selectRegion to have acces in custom-select.js
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
    // Prevent 'N/A' from API response
    const imgSrc = country.flag === '' | 'N/A' ? 'https://search.un.org/templates/default/images/logo.png' : country.flag;
    //Define style
    countryElement.classList.add("card");
    //Show it
    countryElement.innerHTML = `
            <div class="flag">
            <img src="${imgSrc}" alt="" />
            </div>
                <div class="card-content">
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
                    <p><a href="selection.html?paramname=${country.name}">${country.name}</a></p>
                    </div>
            `;
    countryCard.appendChild(countryElement);

    countryElement.addEventListener('click',()=>{
      selectOneCountry()
    })
  });
}



function selectOneCountry() {
   console.log('Pendiente como crear una ventana Modal o cargar selection.html');
}




