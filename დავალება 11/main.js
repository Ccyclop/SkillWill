// I
function foo(){
    console.log('KI')
}

function boo(){
    console.error('ESEC KI')
}

const pipe = () => {
    return (...funcs) => {
        funcs.forEach(o => {
            o
        })
    }
}

const idk = pipe(foo)
idk(foo(),boo())

// II

const createCard = (id, title, body) => {
    let tmp = `<div class="card" style="top: ${id}rem; rotate: ${id}deg">
    <h2>${title}</h2>
    <p>${body}</p>
  </div>`

    document.body.innerHTML += tmp
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => data.forEach(o => {
        createCard(o.id, o.title, o.body)
    }))
    .catch(err => console.error(err))

// III

const user = {
    name: 'Tegi',
    age: 18,
}

function deepCopy(obj) {
    let prom = new Promise((resolve, reject) => {
        if(typeof(obj) != 'object') reject('Given Argument Is Not An Object')
        else resolve(JSON.parse(JSON.stringify(obj)))
    })

    return prom
}





