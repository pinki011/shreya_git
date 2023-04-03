const nav=document.querySelector(".navigation");
const burger =document.querySelector(".burger");
burger.addEventListener("click",()=>{
    nav.classList.toggle("active");
burger.classList.toggle("active");
})
const form=document.querySelector("form");
const allinput=document.querySelectorAll("input");

form.addEventListener('submit' , e =>{    
e.preventDefault();
allinput.forEach((input) => {
    if(!input.value){
         input.parentElement.classList.add('active');
        }
    else{
        input.parentElement.classList.remove('active');
        if(input.type=='email'){  
            if(isValidEmail(input.value)){
                input.parentElement.classList.remove('active');
            }
          else{
            input.parentElement.classList.add('active');
        }
    }
    }
})})
function isValidEmail(email) { 
        
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)
    
    return regex.test(email)
}