// I

function equals(a,b){
    if(a == b) {
        return 'ტოლია'
    } else {
        return 'არ არის ტოლი'
    }
}

// equals(8, 8) ==> 'ტოლია'
// equals(8, '8') ==> 'ტოლია'
// equals(8, 2) ==> 'არ არის ტოლი'
// equals(8, '2') ==> 'არ არის ტოლი'

// თუ გვინდა რომ a და b ტიპითაც ერთნაირი იყოს და მაგ შემთხვევაში დააბრუნოს 'ტოლია' 
// მაშინ : ==>

function equals2(a,b){
    if(a == b && a === b) {
        return 'ტოლია'
    } else {
        return 'არ არის ტოლი'
    }
}

// equals2(8, 8) ==> 'ტოლია'
// equals2(8, '8') ==> 'არ არის ტოლი'
// equals2(8, 2) ==> 'არ არის ტოლი'
// equals2(8, '2') ==> 'არ არის ტოლი'

// II

function FtoC(fahrenheit) {
    if(typeof fahrenheit != 'number') {
        return false
    } else {
        return (fahrenheit - 32)*5/9
    }
}

// FtoC(25) ==> -3.88888889

// III

function Calculator(a, b, op){
    if(typeof a == 'number' && typeof b == 'number'){
        if(op == '+') {
            return a + b
        } else if(op == '-'){
            return a - b
        } else if(op == '*'){
            return a * b
        } else if(op == '/'){
            return a / b
        }   
    }
    return false
}

// Calculator(1, 2, '+') ==> 3
// Calculator(1, 2, '-') ==> -1
// Calculator(1, 2, '*') ==> 2
// Calculator(1, 2, '/') ==> 0.5
// Calculator('1', 2, '/') ==> false
// Calculator(1, 2, '>') ==> false



