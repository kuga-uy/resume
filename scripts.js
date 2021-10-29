const greetingText = document.querySelector('#variable-greetings');
const currentDate = new Date();

const hours = currentDate.getHours();

const greetingsFunction = () =>{
    
        if ( hours <= 12 ) {
            greetingText.textContent = "Good Morning! ";
        } else if ( hours > 12 && hours < 18 ) {
            greetingText.textContent = "Good Afternoon! ";
        } else if (hours > 18 && hours < 20) {
            greetingText.textContent = "Good Evening! ";
        } else if ( hours > 20 ) {
            greetingText.textContent = "Good Night! ";
        }
            
    }      
       

window.addEventListener('DOMContentLoaded', greetingsFunction());