
const greetingsFunction = () =>{
    const greetingText = document.querySelector('#variable-greetings');
    const currentDate = new Date();
    const hours = currentDate.getHours();
        if ( hours < 12 ) {
            greetingText.textContent = "Good Morning! ";
        } else if ( hours >= 12 && hours < 18 ) {
            greetingText.textContent = "Good Afternoon! ";
        } else if (hours > 18 && hours < 20) {
            greetingText.textContent = "Good Evening! ";
        } else if ( hours > 20 ) {
            greetingText.textContent = "Good Night! ";
        }       
    }      
    

const makeRequest = async () => { 
    const url = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';
    try {
        const data =  await fetch(url)
        .then( res => res.json() )
        
        getData(data);
    } catch (error) {
            console.log(`this is the error: ${error}`); 
        }
    }

    const getData = (data) => {
        const nextDay = 2;
        const toDay = 0;
        const today = data.properties.periods[toDay];
        const tomorrow = data.properties.periods[nextDay];
        const shortForecastToday = today.shortForecast;
        const shortForecastTomorrow = tomorrow.shortForecast;

        showData(shortForecastToday, shortForecastTomorrow);
    }
    
    const showData = (shortForecastToday, shortForecastTomorrow) => {
        const weatherForecastToday = document.querySelector('.weather-forecast');
        const weatherForecastTomorrow = document.querySelector('.weather-tomorrow-forecast')
        weatherForecastToday.textContent = shortForecastToday;
        weatherForecastTomorrow.textContent = shortForecastTomorrow;
    }

window.addEventListener('DOMContentLoaded', greetingsFunction(), makeRequest() );