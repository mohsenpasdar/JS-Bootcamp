const getPuzzle = async (wordCount) => {
    const response =  await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to fetch the data')
    }
}

const getCountry = (countryCode) => {
    return fetch('https://restcountries.com/v3.1/all', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the country data')
        }
    }).then((data) => {
        return data.find(country => country.cca2 === countryCode)
    })
}
const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=48d1a33b27d208', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error('unable to fetch the IP data')
        }
    })
}