import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Cairo",
        feelslike: 24.84,
        temperature: 25.32,
        temperature_min: 22.0,
        temperature_max: 27.0,
        humidity: 78,
        weather: "Partly Cloudy",
    });
  let updatedInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
    return (
        <div style={{ textAlign: "center" }}>
            WeatherApp Component
            <SearchBox updatedInfo={updatedInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
