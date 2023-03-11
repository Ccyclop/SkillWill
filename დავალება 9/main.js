// I

const modalBtn = document.querySelector('#modalBtn')
const modal = document.querySelector('#myModal')
const closeBtn = document.querySelector('.close')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.onclick = (event) => {
    if(event.target == modal){
        modal.style.display = 'none';
    }
}

// II

const colorInp = document.querySelector('#colors');
const colorsBtn = document.querySelector('#submitColor');
const availableColors = ['red', 'blue', 'green', 'black', 'white'];


colorsBtn.addEventListener('click', () => {
    if( !availableColors.includes(colorInp.value.toLowerCase())){
        alert("Wrong Color. Please Choose From: Red, Blue, Green, Black, White");
    } else {
        availableColors.forEach(o => {
            if(o == colorInp.value.toLowerCase()){
                document.body.style.backgroundColor = o
            }
        })
    }
})

// III

const numsInp = document.querySelector('#nums');
const numsBtn = document.querySelector('#average');

numsBtn.addEventListener('click', () => {
    let average = 0
    numsInp.value.split(':').map(o => parseInt(o)).forEach(item => {
        average += item
    })
    average /= 2

    modal.style.display = 'block';
    modal.querySelector('p').innerText = average
})