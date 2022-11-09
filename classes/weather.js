class Weather{
    constructor(city) {
        this.city = city
        this.key = "b0746dd46e4f6cb4027e9e1d9611572b"
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
}


