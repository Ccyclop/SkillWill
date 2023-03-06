// I

const replace = (str, valueToReplace, valueToReplaceWith) => {
    let splitStr = str.split(' ')
    splitStr.forEach(o => {
        if(o == valueToReplace){
            splitStr[splitStr.indexOf(o)] = valueToReplaceWith
        }
    })
    return splitStr.join(' ')
}

// replace('gamarjoba, chemi kompaniis saxelia swift', 'swift', 'skillwill'); => 'gamarjoba, chemi kompaniis saxelia skillwill'

// II

const toUpper = str => str.split(' ').map(o => o.replace(o[0], o[0].toUpperCase())).join(' ')

// toUpper('gamarjoba, chemi kompaniis saxelia skillwill'); => 'Gamarjoba, Chemi Kompaniis Saxelia Skillwill'

// III

const userArr = [
    {name: 'Lasha', age: 36},
    {name: 'Tegi', age: 17},
    {name: 'Maia', age: 39},
    {name: 'Nina', age: 10}
]

const compareAge = (a,b) => {
    return a.age - b.age
}

const sortByAge = arr => arr.sort(compareAge)

// sortByAge(userArr) => [{"name": "Nina","age": 10}, {"name": "Tegi","age": 17}, {"name": "Lasha","age": 36}, {"name": "Maia","age": 39}]
