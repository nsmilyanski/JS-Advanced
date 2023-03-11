function attachEvents() {
    const inputOfTheWeather = document.getElementById("location");
    const submitButton = document.getElementById("submit").addEventListener('click', loadTheWeather);
    const forecast = document.getElementById("forecast");
    const current = document.getElementById("current");
    const threeDaysForecast = document.getElementById("upcoming");
    let codeValue = '';
    debugger;

    const weatherSymbols = {
        'Sunny':		'&#x2600;', // ☀
        'Partly sunny':	'&#x26C5;', // ⛅
        'Overcast':		'&#x2601;', // ☁
        'Rain':			'&#x2614;', // ☂
        'Degrees':	    '&#176;'   // °

    }

    async function loadTheWeather() {
        try {
            let weahterRequest = await fetch('http://localhost:3030/jsonstore/forecaster/locations')
            debugger;

            if(!weahterRequest.ok) {
                throw new Error();
            }
    
            const sityArray = await weahterRequest.json();
    
            for (const a of sityArray) {
                if(inputOfTheWeather.value === a.name) {
                    codeValue = a.code;
                    break;
                } 
            }

            let w = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${codeValue}`);

            if(!w.ok) {
                throw new Error();
            }

            forecast.style.display = 'block';

            const weatherObj = await w.json();

            createCurrentWeather(weatherObj, current);

            let upcomming = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${codeValue}`)

            if(!upcomming.ok) {
                throw new Error();
            }

            const upcommingWeatherObj = await upcomming.json();

            createUpcommingWeather(upcommingWeatherObj, threeDaysForecast)

        }catch(error) {
            forecast.textContent = 'Error';
        }
       


    }

    function createCurrentWeather(weatherObj, forecast) {

        const div = document.createElement('div');
        div.classList.add('forecasts');

        const spanSymbol = document.createElement('span');
        spanSymbol.innerHTML = weatherSymbols[weatherObj.forecast.condition];

        div.appendChild(spanSymbol);

        const span = document.createElement('span');
        span.classList.add('condition');

        const span1 = document.createElement('span');
        span1.classList.add('forecast-data')
        span1.innerHTML = weatherObj.name;
        span.appendChild(span1);

        const span2 = document.createElement('span');
        span2.classList.add('forecast-data');
        span2.innerHTML = `${weatherObj.forecast.low}&#176;/${weatherObj.forecast.high}&#176;`;
        span.appendChild(span2);

        const span3 = document.createElement('span');
        span3.classList.add('forecast-data');
        span3.innerHTML = `${weatherObj.forecast.condition}`;
        span.appendChild(span3);

        div.appendChild(span);

        forecast.appendChild(div);

    }

    function createUpcommingWeather(upcommingWeatherObj, threeDaysForecast) {
        
        for (const a of upcommingWeatherObj.forecast) {
            
            div.classList.add('forecast-info');
    
            const span = document.createElement('span');
            span.classList.add('upcoming');
    
            const span1 = document.createElement('span');
            span1.classList.add('symbol')
            span1.innerHTML = weatherSymbols[a.condition];
            span.appendChild(span1);
    
            const span2 = document.createElement('span');
            span2.classList.add('forecast-data');
            span2.innerHTML = `${a.low}&#176;/${a.high}&#176;`;
            span.appendChild(span2);
    
            const span3 = document.createElement('span');
            span3.classList.add('forecast-data');
            span3.innerHTML = `${a.condition}`;
            span.appendChild(span3);
    
            div.appendChild(span);
        }
        threeDaysForecast.appendChild(div);
       

    }


}

attachEvents();