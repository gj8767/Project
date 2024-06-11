let inputs = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputs.value = string;

        }
        else if(e.target.innerHTML == "DEL") {
            string = string.slice(0,-1);
            inputs.value = string;

        }

        else if (e.target.innerHTML == 'AC'){
            string ="";
            inputs.value = string;
        } 
        
        else{
            string += e.target.innerHTML;
            inputs.value = string;
        }


        
    })
})


