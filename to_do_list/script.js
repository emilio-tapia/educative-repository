
const btnAdd = document.getElementById('btnAdd')
const input = document.getElementById('input')
let tasksArr = []
let id = 0

getDatafromStorage()


// EVENT LISTENER SUBMIT BTN
btnAdd.addEventListener('click', (e) => {
  if(input.value !== ''){
    pushTaskArray(input.value)
    appendElement(input.value) 
    input.value = '' //RESET VALUE


  } else {
    input.placeholder = `Write something, don't be shy.`
  }
})

// ARRAY TASK TO LOCALSTORAGE
function pushTaskArray(value){
        tasksArr.push(value)
      setTaskData(tasksArr)
}


// APPEND NOTE TO DOM
function appendElement(value){

  // DOM ELEMENTS + APPEND
  const sectionTask = document.getElementById('sectionTask')
  const containerTask = document.createElement('div')
  containerTask.classList.add('container-task')
  containerTask.classList.add('glass')
  id++
  containerTask.id = id
  containerTask.innerHTML = `
      <p id="task" class="task">${value}</p>
      <button id="btnDelete" class="btn-delete glass">Delete</button>
  `
  sectionTask.appendChild(containerTask)
  activateDelete()
  
}

activateDelete() //ACTIVATE DELETE

// DELETE FUNCTION
function activateDelete(){

  
  const btn_delete = document.querySelectorAll('.container-task button') // GET BTN DELETE DATA

  btn_delete.forEach(btn => { 
    btn.addEventListener('click', (e) => { //FOR EACH DELETE GIVE CLICK LISTENER

      //Animation CSS
      closeAnimation = e.target.parentNode.classList.add('close')
      closeText = e.path[1].childNodes[1].classList.add('close')
      closeButton = e.target.classList.add('close')
      

      // REMOVE PARENT DOM
      setTimeout(() => {
        e.target.parentNode.remove()

      // REMOVE DATA FROM LOCAL

      let innerTxt = e.path[1].childNodes[1].innerText; // INNER TEXT DIV TASK
      if(tasksArr[0] && tasksArr[0]!= ''){
        tasksArr = arrayRemove(tasksArr, innerTxt);
        setTaskData(tasksArr)
      }  
      
      if(tasksArr.length == 0){
        removeTaskData(innerTxt)
        tasksArr = []

      }

      if(sectionTask.childNodes.length == 0){
        removeTaskData(innerTxt)
        tasksArr = []
      }

      }, 1000);


    })
  })
}






function arrayRemove(arr, value) { 
    
  return arr.filter((ele) => { 
      return ele !== value; 
  });
}


// LOCAL STORAGE

  // SAVE TO-DO DATA LOCAL STORAHE
    function setTaskData(task){
      JSON.stringify(localStorage.setItem(`task`, task))
    }

  // REMOVE TO-DO DATA LOCAL STORAHE
    function removeTaskData(task){
      localStorage.removeItem(`task`, task)
    }



  // GET TO-DO DATA FROM LOCAL STORAGE
    function getDatafromStorage(){

      // console.log(id.length)
      storage_task = localStorage.getItem(`task`)
          if (storage_task !== null){
            tasksArr = []
            tasksArr = storage_task.split(',');
            tasksArr.forEach(task => {
          appendElement(task)
        })
      }
    }










// ----------------------------------------------------
// Dark Theme
const light = "styles/light.css";
const dark = "styles/dark.css";
const btnMode = document.getElementById("btn-mode");
const cssTheme = document.getElementById("theme");

// btnMode.addEventListener('click', () => {


//     if (cssTheme.getAttribute("href") === light) {
//         cssTheme.attributes.href.value = dark;
//         btnMode.innerHTML = "Light Mode 🌞";
//       } else {
//         cssTheme.attributes.href.value = light;
//         btnMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
//       }
// })

