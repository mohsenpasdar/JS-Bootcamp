const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('unable to fetch the data')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            country = data.find(country => country.cca2 === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('Unable to fetch the data')
        }
    })
    
    request.open('GET', 'https://restcountries.com/v3.1/all')
    request.send()
})