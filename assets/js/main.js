// Creo una variabile dove salvo il container delle celle 
const playButton = document.querySelector(".rounded-3.p-0.px-2");

playButton.addEventListener("click", function() {
  const container = document.querySelector(".container");

  let cell_number = 100;

  for (let i = 1; i <= cell_number; i++) {
    const cell = `<div class="cell">${i}</div>`;
    container.innerHTML += cell;
  }

  const cellEl = document.querySelectorAll(".cell");

  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell);
    thisCell.addEventListener("click", function() {
        thisCell.classList.toggle("bg_blue");
        console.log(i + 1);    
    })
  }
});

// difficulty 

const testSelect = document.getElementById('difficulty');
testSelect.addEventListener('change', function(){
	
	if (this.value == 'diff_1') {
        const container = document.querySelector(".container");

        let cell_number = 100;

        for (let i = 1; i <= cell_number; i++) {
            const cell = `<div class="cell">${i}</div>`;
            container.innerHTML += cell;
        }

        const cellEl = document.querySelectorAll(".cell");

        for (let i = 0; i < cellEl.length; i++) {
            const thisCell = cellEl[i];
            console.log(thisCell);
            thisCell.addEventListener("click", function() {
            thisCell.classList.toggle("bg_blue");
            console.log(i + 1);    
        })
        }
    } else if (this.value == 'diff_2'){
        const container = document.querySelector(".container");

        let cell_number = 81;

        for (let i = 1; i <= cell_number; i++) {
            let cell = `<div class="cell_diff_2">${i}</div>`;
            container.innerHTML += cell;
        }

        const cellEl = document.querySelectorAll(".cell_diff_2");

        for (let i = 0; i < cellEl.length; i++) {
            const thisCell = cellEl[i];
            console.log(thisCell);
            thisCell.addEventListener("click", function() {
            thisCell.classList.toggle("bg_blue");
            console.log(i + 1);    
        })
        }
    } else {
        const container = document.querySelector(".container");

        let cell_number = 49;

        for (let i = 1; i <= cell_number; i++) {
            let cell = `<div class="cell_diff_3">${i}</div>`;
            container.innerHTML += cell;
        }

        const cellEl = document.querySelectorAll(".cell_diff_3");

        for (let i = 0; i < cellEl.length; i++) {
            const thisCell = cellEl[i];
            console.log(thisCell);
            thisCell.addEventListener("click", function() {
            thisCell.classList.toggle("bg_blue");
            console.log(i + 1);    
        })
        }
    }
    
})
