const formSearch = document.getElementById('formSearch');
const inputForm = document.getElementById('inputTexto');

const searchData = data => {
    formSearch.addEventListener('keyup',e => {
        e.preventDefault()
        const inputValue = inputForm.value.toLowerCase();
        //console.log(inputValue);

        // array con el fitro por busqueda inputValue
        //método filter crea una nueva array con elementos bajo un criterio dado de la array existente:
        const arrayMatchInputValue = data.filter( elements => {
            const namesCountries = elements.name.toLowerCase();
            //console.log(namesCountries);
            if (namesCountries.indexOf(inputValue) !== -1) {
               return elements;
            }
        })
        //console.log(arrayMatchInputValue);
        showCountries(arrayMatchInputValue);
    })
}