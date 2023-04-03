const input = document.querySelector('#write');
const rowsinner = document.querySelector('.rowsinner');
const form = document.querySelector('form');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    newtodo();
    input.value = "";
    
})
function newtodo() {
    let task = input.value;
    let lis = document.createElement("div");
    lis.classList.add("li");
    lis.innerHTML = ` <div class="checkbox"><i class="fa-solid fa-check"></i></div>
    <p>${task}</p>
    <button class="cross"><i class="fa-solid fa-xmark"></i></button>`;
    rowsinner.appendChild(lis);
    left();

    let crosses = document.querySelectorAll(".cross");
    crosses.forEach(item => {
        item.addEventListener("click", () => {
            item.parentNode.remove();
            left();
        })

    })
    let checkboxes = lis.querySelectorAll('.checkbox');
    checkboxes.forEach(item => {
        item.addEventListener("click", () => {
            item.parentElement.classList.toggle("check-bg");
        })
    })
}
let controls = document.querySelectorAll("span");
let lis = rowsinner.querySelectorAll(".li");
controls.forEach(span => {
    span.addEventListener("click", () => {
        if (span.innerHTML == "All") {
            let lis = rowsinner.querySelectorAll(".li");
            lis.forEach(item => {
                item.style.display = "flex";
            })


        }

        else if (span.innerHTML == "Active") {
            let lis = rowsinner.querySelectorAll('.li')
            lis.forEach(item => {
                if (item.classList.contains('check-bg')) {
                    item.style.display = "none";
                } else {
                    item.style.display = "flex";
                }
            })
        }
        else if (span.innerHTML == "Completed") {
            let lis = rowsinner.querySelectorAll('.li')
            lis.forEach(item => {
                if (item.classList.contains('check-bg')) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            })
        }

    })
})

let complete = document.querySelector('.complete');
complete.addEventListener('click', () => {
    let lis = rowsinner.querySelectorAll('.li')
    lis.forEach(item => {
        if (item.classList.contains('check-bg')) {
            item.remove();
        }

    })
    left();
})

function left() {
    let alllength = rowsinner.querySelectorAll('.li');
    let complength = rowsinner.querySelectorAll('.li check-bg');

    let remain = alllength.length - complength.length;

    let remaningitem = document.querySelector('.itemleft');
    remaningitem.innerHTML = `${remain} items left`
}

const themeIcon = document.querySelector('.theme');
themeIcon.addEventListener('click',()=>{
    document.body.classList.toggle('light')
    if(document.body.classList.contains('light')){
        themeIcon.src = './images/icons8-crescent-moon-32.png'
    }else{
        themeIcon.src = './images/icons8-sun.svg'
    }
})

