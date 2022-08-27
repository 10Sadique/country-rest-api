const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries)
    const countriesContainer = document.getElementById('countries-container')

    countries.forEach(country => {

        const countryDiv = document.createElement('div')
        countryDiv.innerHTML = `
            <div class="p-3 h-full bg-zinc-700 rounded-lg shadow-lg">
                <div class="mb-4 shadow-lg">
                    <img class="w-full rounded-lg" src="${country.flags.png}" />
                </div>

                <div>
                    <h3 class="font-bold text-xl mb-3">${country.name.common}</h3>
                    <p><span class="font-semibold">Official Name: </span>${country.name.official}</p>
                    <p><span class="font-semibold">Capital: </span>${country.capital ? country.capital[0] : 'NO CAPITAL'}</p>
                    <p><span class="font-semibold">Region: </span>${country.region}</p>
                </div>
            </div>
        `
        countriesContainer.appendChild(countryDiv)
    })
}