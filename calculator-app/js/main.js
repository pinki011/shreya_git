let string = "";
let buttons = document.querySelectorAll('.button');
(buttons) .forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
       else if(e.target.innerHTML == 'RESET'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = (string.slice(0,string.length-1));
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

let themes = document.querySelector('.calculator-main');
let themes1 = document.querySelector('.num1');
let themes2 = document.querySelector('.num2');
let themes3 = document.querySelector('.num3');
themes2.addEventListener('click',()=>{
    themes.classList.add('theme2')
})
themes3.addEventListener('click',()=>{
    themes.classList.add('theme3')
})
themes1.addEventListener('click',()=>{
    themes.classList.remove('theme2')
    themes.classList.remove('theme3')
})
themes2.addEventListener('click',()=>{
    themes.classList.remove('theme1')
    themes.classList.remove('theme3')
})

