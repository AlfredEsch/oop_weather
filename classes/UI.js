class UI {
    constructor() {
        this.description = document.querySelector("#description")
        this.temp = document.querySelector("#temp")
        this.city = document.querySelector("#location")
        this.windSpeed = document.querySelector("#windspeed")
        this.winddeg = document.querySelector('#winddeg')
        this.humidity = document.querySelector("#humidity")
    }

        drawWeather(data){
            let celcius = Math.round(parseFloat(data.main.temp)-273.15);
            let description = data.weather[0].description;
            this.description.innerHTML = description;
            this.temp.innerHTML = celcius + '&deg;';
            this.city.innerHTML = data.name;
            this.windSpeed.innerHTML = 'WindSpeed ' + data.wind.speed + " m/s";
            this.winddeg.innerHTML = 'WindDeg ' + data.wind.deg + '&deg;';
            this.humidity.innerHTML = 'Humditiy ' + data.main.humidity + "%";
    }
}
