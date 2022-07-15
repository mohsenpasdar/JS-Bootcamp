const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data Object
data.location = '   Tehran    '
data.location = ' Shiraz'
console.log(data);
console.log(data.location);
console.log(data._location);