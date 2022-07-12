const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getPuzzleSync = () => {
    const request = new XMLHttpRequest()
    
    request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
    request.send()

    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        return(data.puzzle)
    } else if (request.readyState === 4) {
        throw new Error('things did not go well')
    }
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