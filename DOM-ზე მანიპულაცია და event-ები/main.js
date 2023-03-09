// I

const btn = document.getElementById('hider')
const text = document.getElementById('text')

btn.addEventListener('click', () => {
    text.style.opacity = 0
})

// II

const structure = `<div id="card">
    <h2>Vaniko</h2>
    <a href='#'>Go To Profile</a>
    </div>
    `

// document.body.innerHTML += structure

// OR

const container = document.createElement('div')
const namePlace = document.createElement('h2')
const link = document.createElement('a')

// document.body.appendChild(container)
// container.appendChild(namePlace)
// namePlace.innerText = 'Vaniko'
// container.appendChild(link)
// link.innerText = 'Go to Profile'
// container.id = 'card'
// link.href = '#'

// OR

document.body.insertAdjacentHTML(
    'beforeend',
    structure
)

// III

const div = document.getElementById('card')

div.style.backgroundColor = 'red'