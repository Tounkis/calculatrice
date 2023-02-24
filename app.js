//  Selection des elements 
let display1 = document.querySelector('.display-1');
let display2 = document.querySelector('.display-2');
let temp_result = document.querySelector('.temp-result');
let nombre = document.querySelectorAll('.nombre');
let operation = document.querySelectorAll('.operation');
let egal = document.querySelector('.egal');
let button_c = document.querySelector('.btn-c');
let button_ce = document.querySelector('.btn-ce');

// Verification dans la console
// console.log(button_ce);

// Declaration des variables 
let dis1Num = ''; // Pour stocker le nbr 1
let dis2NUm = ''; // Pour stocker le nbr 2
let result = null; // Pour stocker le resultat
let lastOperation = ''; // Pour stocker la dernière operation
let haveDot = false; // booleen decimal

// Boucle pour parcourir tous les nombres
nombre.forEach( number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
        }

        dis2NUm += e.target.innerText;
        display2.innerText = dis2NUm;
        // console.log(dis2NUm);
    })
})

// Boucle pour parcourir tous les operateurs 
operation.forEach( operate => {
    operate.addEventListener('click', (e) => {
        if(!dis2NUm) return;
        haveDot = false; // Booleen à faux pour le nombre 2
        const operationName = e.target.innerText;
        if(dis1Num && dis2NUm && lastOperation) {
            calculatrice();
        }else{
            result = parseFloat(dis2NUm);
        }
        netoyerVar(operationName);
        lastOperation = operationName; // Stocke l'operation en cours
    })
});

// Fonction permettant de tout nettoyer
function netoyerVar(name = '') {
    dis1Num += dis2NUm + ' ' + name + ' ';
    display1.innerText = dis1Num;
    display2.innerText = '';
    dis2NUm = '';
    temp_result.innerText = result;
}

// Fonction principale de la calculatrice
function calculatrice() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2NUm);
    }else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2NUm);
    }else if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2NUm);
    }else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2NUm);
    }else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2NUm);
    }
} 

// Fonction egalité
egal.addEventListener('click', () => {
    if(!dis1Num || !dis2NUm) {
        return;
    }
    haveDot = false;
    calculatrice();
    netoyerVar();
    display2.innerText = result;
    temp_result.innerText = '';
    dis2NUm = result;
    dis1Num = '';
})

// Fonction pour tout effacer
button_ce.addEventListener('click', () => {
    // Effacer tout le contenu des elements
    dis1Num = '';
    dis2NUm = '';
    display1.innerText = '';
    display2.innerText = '';
    result = '';
    temp_result.innerText = '';
})

// Fonction pour effacer le dernier element saisi
button_c.addEventListener('click', () => {
    display2.innerText = '';
    dis2NUm = '';
})