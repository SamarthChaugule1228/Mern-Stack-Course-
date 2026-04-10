import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updatedInfo}) {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "46877a8d18b9772d7b69df0bf9ae438a";

    const [city, setCity] = useState("");

    const getWeatherInfo = async (cityName) => {
        try {
            const response = await fetch(`${URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log("Weather data:", jsonResponse);
            let result = {
                city: city,
                temperature: jsonResponse.main.temp,
                temperature_min: jsonResponse.main.temp_min,
                temperature_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log("Parsed result:", result);
            return result;
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const cityName = city.trim();
        if (!cityName) return;      // avoid empty submit
        console.log("Searching for:", cityName);
      let info =  await  getWeatherInfo(cityName);   // ✅ pass city to function
        updatedInfo(info)              // ✅ clear input after using it
    };

    return (
        <div className="searchBox">
            <h2>Search for the Weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    value={city}
                    label="City Name ..."
                    onChange={handleChange}
                    variant="outlined"
                    required
                />
                <br /><br />
                <Button
                    variant="contained"
                    style={{ marginLeft: '10px' }}
                    type="submit"
                >
                    Search
                </Button>
            </form>
        </div>
    );
}
