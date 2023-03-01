// I 

const fun = (a, b, c, ...args) => {
    let tmp = c
    let arr = []
    arr[0] = a + b
    args.forEach(o => {
        tmp *= o
    })
    arr[1] = tmp
    return arr
}

// fun(1,2, 25,4, 5); ==> [3, 500]
// fun(1,2); ==> [3, undefined]
// fun(1,2,3) ==> [3, 3]

// II

const user = {
    banks: [
        {
            name:'TBC', 
            address: { 
                city: 'Kutaisi'
            } 
        },
        {
            name: 'BOG',
            address: {
                city: 'Tbilisi'
            }
        },
        {
            name: 'BOG',
            address: {
                city: 'Tbilisi'
            }
        },
    ],
    arr: {
        type: 'array'
    }

}

const returnCity = user => {
    if (user.banks.length > 2) {
        let {banks: [,,{address:{city}}]} = user
        return city
    }
}

// returnCity(user) ==> 'Tbilisi'
// if banks[2] does not exist: returnCity(user) ==> undefined


// III

let objKeys = ''

const runOverObject = obj => {
    for( key in obj) {
        if(typeof obj[key] == 'object'){
            objKeys += `${key} `
            runOverObject(obj[key])
        } 
    }
}