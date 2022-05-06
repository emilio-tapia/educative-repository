const svgAll = document.querySelectorAll('.init li svg')

const activeSlide = document.querySelector('.slide.active')
const slideAll = document.querySelectorAll('.slide')
i = 0

const container = document.querySelector('.container')
const incorrectSlide = document.querySelector('.incorrect')
const correctSlide = document.querySelector('.correct')


let current = slideAll[i]
let next = slideAll[i].nextElementSibling
let prev = slideAll[i-1]
let intentos = 0

svgAll.forEach((element, idx) => {
    
        element.addEventListener('click', (e) => {
            e.preventDefault
            intentos++

            if(intentos >= 3){

                incorrectSlide.childNodes[1].innerText = `VALES VERGA`


                incorrectSlide.childNodes[5].innerText = `BROTHER`

            }
            

            if(idx === 2){
                correctPresentation()
            // setTimeout(resetPresentation, 5000)
            } else {
            incorrectPresentation()
            setTimeout(resetPresentation, 1000)
            }
            
            // if(idx == 10){
            //     return
            // }


        })

    
})

function resetPresentation(){
    i--
    container.classList.remove('incorrect')
    current.classList.add('active')
    incorrectSlide.classList.remove('active')
    correctSlide.classList.remove('active')
}

function incorrectPresentation(){
    i++;
    container.classList.add('incorrect');
    current.classList.remove('active')
    incorrectSlide.classList.add('active')

    // Mientras next is true y el class name de next NO es slide, entonces se pasa al siguiente sibling
    // while (next && next.className != 'slide'){
    //     next = next.nextElementSibling
    // }
}

function correctPresentation(){
    container.classList.add('correct');
    current.classList.remove('active')
    correctSlide.classList.add('active')


    const svgHide = document.querySelectorAll('.hide')
        svgHide.forEach(eltCorrect => {
            setTimeout(() => {
                eltCorrect.style.visibility = `hidden`
                eltCorrect.style.display = `none`
                eltCorrect.parentNode.remove()
            }, 1000)
        })

        console.log(svgHideCorrect)
}



