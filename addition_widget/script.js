const check_Btn = document.getElementById('check')
const numberA = document.getElementById('numberA')
const numberB = document.getElementById('numberB')
const answerInput = document.getElementById('answer')
const score = document.getElementById('score')

let valueA, valueB;
let i = 0

// VALUE DATA INIT
valueA = Math.floor(Math.random() * 100)
valueB = Math.floor(Math.random() * 50)
numberA.innerText = valueA
numberB.innerText = valueB
check_Btn.disabled = true

// ADD FUNCTION
function add(a, b){
    return x = a + b
}

add(valueA,valueB)

// GET SCORE 
 function getScore(i){
    score.innerText = `Score: ${i}`
 }

getScore(i)


// EVENT LISTENER CHECK VALUE

answerInput.addEventListener('keyup', (e) => {
    // console.log(answerInput.value)
    if(x == answerInput.value){
        check_Btn.disabled = false
        document.body.classList.add('sucess')
        document.body.classList.remove('error')
    } else if(x !== answerInput.value && answerInput.value.length >= 2){
        document.body.classList.add('error')
        document.body.classList.remove('sucess')
    } else {
        check_Btn.disabled = true
        document.body.classList.remove('sucess')
        document.body.classList.remove('error')
    }
})

// EVENT LISTENER CHECK VALUE
check_Btn.addEventListener('click', () => {
    
    answerInput.value = '';
    check_Btn.disabled = true
    document.body.classList.remove('sucess')
    
    valueA = Math.floor(Math.random() * 100)
    valueB = Math.floor(Math.random() * 50)
    numberA.innerText = valueA
    numberB.innerText = valueB

    i++;
    getScore(i);
    add(valueA, valueB)
})

