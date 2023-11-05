const names = document.querySelector('.name')
const email = document.querySelector('.email')
const errorName = document.querySelector('.error-name')
const errorEmail = document.querySelector('.error-email')
const stepper = document.querySelector('.stepper-update')
const button = document.querySelectorAll('.fixButton')
const list = document.querySelector('.list')

let first = ""
document.querySelector('.step1').innerHTML = 
`<style>.step1{
background-color: #652CD1;
box-shadow: 0px 0px 10px 2px  #c026d3;
outline: 1px solid grey ;}
</style>`


button.forEach(buttons => {
    buttons.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            
        } else {
            this.classList.add('active');
        }
    });
});



function validateForm(){
stepperPosition = 0

    if(names.value === ""){
        error()
    } else if (email.value === ""){
        errors()
    } else if (!isValidEmail(email.value)){
        errorFormat()
    } else{
        errorName.innerHTML = ""
        errorEmail.innerHTML = ""
        document.querySelector('.h5').textContent += names.value
        document.querySelector('.hh').textContent += email.value

        document.querySelector('.h5').style.color = 'white';
        document.querySelector('.hh').style.color = 'white';
        proceed()


    }

}
function bro(){
    if(list.textContent === "") {
        document.querySelector('.error-msgs').innerHTML = `
        please enter your topic
        <style>
        .error-msgs{
            font-size: 12px;
            color: red;
            border-radius: 5px;
            border: 1px solid red;
            padding: 10px;
            background-color: rgb(235, 6, 6, 0.2);
            margin-bottom: 5px;
            margin-top: 1px;
        }</style>`
    } else{
        document.querySelector('.error-msgs').innerHTML =  ""
        document.querySelector('.step3').innerHTML = 
`<style>.step3{
background-color: #652CD1;
box-shadow: 0px 0px 10px 2px  #c026d3;
outline: 1px solid grey ;
}
.step2{
    background-color: gray;
    box-shadow: none;
    outline: non;

}
</style>`
    proceed()
}
}

function b1(){
let newEl = document.createElement('li')
newEl.textContent = "Software development"


if(itemExist(newEl.textContent)){

    removeItem(newEl.textContent);
} else{
    list.appendChild(newEl)
}


}

function b2(){
    let newEl = document.createElement('li')
    newEl.textContent = "User Design"
    
    
    if(itemExist(newEl.textContent)){
        
        removeItem(newEl.textContent);
    } else{
        list.appendChild(newEl)
    }
    
    
    }

    function b3(){
        let newEl = document.createElement('li')
        newEl.textContent = "Graphic Design"
        
        
        if(itemExist(newEl.textContent)){
            
            removeItem(newEl.textContent);
        } else{
            list.appendChild(newEl)
        }
        
        
        }

function itemExist(text){
    const listItem = document.querySelectorAll('.list li')
    for(const item of listItem){
      if (item.textContent === text){
        return true
      }
    }
    return false
}

function removeItem(text){
 const listItem = querySelector('.list li')
 for (const item of listItem){
    if(item.textContent === text) {
        item.remove()
        break;
    }
 }
}










function proceed() {
    stepperPosition += -31.40
    addStyle()
}




function addStyle(){
stepper.style.transform = `translateX(${stepperPosition}%)`;
document.querySelector('.step2').innerHTML = `
<style>
.step2{
    background-color: #652CD1;
    box-shadow: 0px 0px 10px 2px  #c026d3;
    outline: 1px solid grey ;
}

.step1{
        background-color: gray;
        box-shadow: none;
        outline: none}
}<style>`
}






















    function isValidEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }


    function error(){

        errorName.innerHTML = `Please enter your name 
        <style>.error-name{
            font-size: 12px;
            color: red;
            border-radius: 5px;
            border: 1px solid red;
            padding: 10px;
            background-color: rgb(235, 6, 6, 0.2);
            margin-bottom: 5px;
            margin-top: 5px;
            
        }
        .error-name p{
            
            color: red;
          text-align: center;
          width: 230px;
          margin-top: 5px;
        }
        
        </style>`
        
    }

    function errors(){
        errorEmail.innerHTML = `Please enter your email
        <style>
        .error-email{
            font-size: 12px;
            color: red;
            border-radius: 5px;
            border: 1px solid red;
            padding: 10px;
            background-color: rgb(235, 6, 6, 0.2);
            margin-bottom: 5px;
            margin-top: 5px;
        }
        
        }
        
        </style>`
        errorName.innerHTML = ""

    }

    function errorFormat(){
        errorEmail.innerHTML = `Invalid email format. Please enter a valid email address.
        <style>
        .error-email{
            display: flex;
            justify-content: center;
            font-size: 12px;
            color: red;
            border-radius: 5px;
            border: 1px solid red;
            padding: 10px;
            background-color: rgb(235, 6, 6, 0.2);
            margin-bottom: 5px;
            margin-top: 5px;
        }
        
        
        </style>`
        errors.innerHTML = ""
        
    }

   