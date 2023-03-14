const containerGlobal = document.getElementById('containerGlobal');

for (let i = 0; i < 30; i++) {
  let divRow = document.createElement('div');
  divRow.style = `--i:${i}`;
  divRow.innerHTML = `
            <span class="icon"
            ><ion-icon name="arrow-redo-circle-outline"></ion-icon
            ></span>
            <span class="icon"><ion-icon name="bandage-outline"></ion-icon></span>
            <span class="icon"
            ><ion-icon name="basketball-outline"></ion-icon
            ></span>
            <span class="icon"><ion-icon name="bicycle-outline"></ion-icon></span>
            <span class="icon"
            ><ion-icon name="calculator-outline"></ion-icon
            ></span>
            <span class="icon"><ion-icon name="cash-outline"></ion-icon></span>
            <span class="icon"
            ><ion-icon name="code-slash-outline"></ion-icon
            ></span>
            <span class="icon"><ion-icon name="diamond-outline"></ion-icon></span>
            <span class="icon"><ion-icon name="happy-outline"></ion-icon></span>
            <span class="icon"><ion-icon name="options-outline"></ion-icon></span>
            <span class="icon"><ion-icon name="pizza-outline"></ion-icon></span>
            <span class="icon"><ion-icon name="bug-outline"></ion-icon></span>
            <span class="icon"
            ><ion-icon name="battery-full-outline"></ion-icon
            ></span>
            <span class="icon"
            ><ion-icon name="calendar-number-outline"></ion-icon
            ></span>
            <span class="icon"
            ><ion-icon name="bar-chart-outline"></ion-icon></span>
            <span class="icon"
            ><ion-icon name="close-circle-outline"></ion-icon></span>
            <span class="icon"
            ><ion-icon name="color-filter-outline"></ion-icon></span>
            <span class="icon"
            ><ion-icon name="dice-outline"></ion-icon></span>
            `;

  divRow.classList.add('row');
  containerGlobal.appendChild(divRow);
}
