const formSearch = document.getElementById("formSearch");
const inputForm = document.getElementById("inputTexto");
const device = navigator.userAgent;

// function blurInput() {
//   document.getElementById("inputTexto").blur();
// }

const searchData = (data) => {
    formSearch.addEventListener("keyup", (e) => {
        e.preventDefault();
        const inputValue = inputForm.value.toLowerCase();
        //console.log(inputValue);
        // array con el fitro por busqueda inputValue
        //método filter crea una nueva array con elementos bajo un criterio dado de la array existente:
        const arrayMatchInputValue = data.filter((elements) => {
            const namesCountries = elements.name.toLowerCase();
            //console.log(namesCountries);
            if (namesCountries.indexOf(inputValue) !== -1) {
                return elements;
            }
        });

        showCountries(arrayMatchInputValue);

        if (
            device.match(/Android/i) ||
            device.match(/webOS/i) ||
            device.match(/iPhone/i) ||
            device.match(/iPod/i) ||
            device.match(/iPad/i)
        ) {
            inputForm.autocomplete = "off";
            // Evitar reload del enter en buscador
            formSearch.addEventListener("keydown", (e) => {
                let keyCode = e.key;
                //console.log(keyCode, typeof keyCode);
                if (keyCode === "Enter") {
                    // Evitamos que se ejecute eventos
                    e.preventDefault();
                }
            });
            //setTimeout(blurInput, 4000); Solución rocambolesca, I think so!
        }
    });
};