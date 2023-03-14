const month = document.getElementById('month')
const year = document.getElementById('year')
const day = document.getElementById('day')
const search_Btn = document.getElementById('search')
const resultText = document.getElementById('date_Result')

const date = new Date()
let errorDate = false;

let daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// SEARCH RESULT

search_Btn.addEventListener('click', (e) => {
    e.preventDefault()
        
    if(errorDate){
        resultText.innerText = `ERROR`
    } else {     

        // if(day.value.length == 1){
        //     day.value = '0' + day.value;
        // }

        

        date.setFullYear(year.value, (month.value - 1), day.value)
        date.getFullYear()

        day_string = daysList[date.getDay() - 1]
        month_string = monthList[date.getMonth()]

        day_year = date.toDateString().slice(8)

        resultText.innerText = `${day_string}, ${month_string} ${day_year}`
        resultText.style.visibility = `visible`
    }
})


// NUMBER ERROR
function addError(input){
    input.classList.add('error')
    
}

function clearError(input){
    input.classList.remove('error')
}

function checkError(input){
    input.addEventListener('keyup', (e) => {
        clearError(input)

        if(e.target.id === 'month'){
            if(e.target.value > 12){
                addError(month)
                errorDate = true
            } else {errorDate = false}
        }
 
        if(e.target.id === 'year'){
            if(e.target.value > 2022){
                addError(year)
                errorDate = true
            } else {errorDate = false}
        }

        if(e.target.id === 'day'){
            if(e.target.value > 31){
                addError(day)
                errorDate = true
            } else {errorDate = false}
        }
    })
}

checkError(month);
checkError(year);
checkError(day);

// RESET INPUTS MAX NUMBER
const inputs = document.querySelectorAll('.input')

function resetLength(input, slices){
    input.value = input.value.slice(slices)
}

inputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
        
        if (e.key === 'Tab'){
            input.focus()
        } else if (e.key === 'Backspace'){
            input.value = ''
        } else {
            if(input.value.length > 3){
                resetLength(input, 4)
            } else if(input.id !== 'year' && input.value.length + 1 > 2){
                resetLength(input, 2)
            }
        }
    })
})






// ----------------------------------------------------
// Dark Theme
const light = "styles/light.css";
const dark = "styles/dark.css";
const btnMode = document.getElementById("btn-mode");
const cssTheme = document.getElementById("theme");

btnMode.addEventListener('click', () => {


    if (cssTheme.getAttribute("href") === light) {
        cssTheme.attributes.href.value = dark;
        btnMode.innerHTML = "Light Mode 🌞";
      } else {
        cssTheme.attributes.href.value = light;
        btnMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      }
})

// revisar la fecha 1/1/1995
// mejorar los catch errors
// arreglar dark mode