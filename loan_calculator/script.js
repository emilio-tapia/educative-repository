const amount = document.getElementById('amount')
const interest = document.getElementById('interest')
const period = document.getElementById('period')
const resultDiv = document.getElementById('result')
const btnResult = document.getElementById('btnResult')
const inputs = document.querySelectorAll('.calculator-container .option input')



inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        let a = amount.value
        let i = interest.value
        let p = period.value

        if(a !== '' && i !== '' && p !== ''){
            calculateLoan(amount.value, interest.value,  period.value)
            console.log('holo')
        }
    })
})

// btnResult.addEventListener('click', () => {

//     calculateLoan(amount.value, interest.value,  period.value)
// })

function calculateLoan(amount, interest, period){
    const loanInterest = (interest / 100) * amount;
    const loan = (+amount + loanInterest) / +period;
    resultDiv.innerText = `$${loan.toFixed(2)}`
}