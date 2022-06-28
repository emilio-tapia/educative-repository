const bill = document.getElementById('bill')
const tipPercent = document.getElementById('tipPercent')
const tipAmountDiv = document.getElementById('tipAmount')
const totalDiv = document.getElementById('total')
const containerCalc = document.getElementById('container-calculator')
const hide = document.querySelectorAll('.hide')


containerCalc.addEventListener('keyup', () => {

    
    let tipAmount = +bill.value * (+tipPercent.value / 100)
    let billTotal = +bill.value + tipAmount
    
    if(bill.value !== '' && tipPercent.value !== ''){
        
        hide.forEach(span => {
            span.style.visibility = `visible`
        })

        tipAmountDiv.innerText = +tipAmount.toFixed(2)
        totalDiv.innerText = +billTotal.toFixed(2)
    } else {

        hide.forEach(span => {
            span.style.visibility = `hidden`
        })
        tipAmountDiv.innerText = ''
        totalDiv.innerText = '' 
    }
    
})