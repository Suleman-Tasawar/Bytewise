import {useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Weather from "./components/weather";
import Weekly from "./components/Weekly"
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid=275efdec7d437a2b1bbb205e12f07b22&cnt = 5 
function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null)

  useEffect(() => {
   const  getWeather = async() => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=275efdec7d437a2b1bbb205e12f07b22&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          setCityName("")
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        getWeather();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [cityName]);

  useEffect(()=>{
    const getWeeklyWeather = async() =>{
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=275efdec7d437a2b1bbb205e12f07b22&cnt = 5 `
      )
      .then(response=>response.json())
      .then(data=>{
        setWeeklyWeather(data.list)
        console.log(weeklyWeather)
      })
    }
    
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        getWeeklyWeather()
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  },[cityName])

  const weeklyForcast = weeklyWeather?.map(forcast=>(
    <Weekly 
    image={forcast.weather.weather[0].icon}
    temperature={forcast.weather.main.temp}
    description={forcast.weather.weather[0].description}
    />
  ))
  return (
    <>
      <div className="px-5">
        <h1 className="text-5xl text-gray-950 font-bold font-serif">
          Try searching for weather{" "}
        </h1>
      </div>
      <div className="mt-10">
        <input
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="outline-none w-[200px] h-11 rounded-md text-gray-900"
          type="text"
          name="weather"
          placeholder="Enter your city name"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
      {weather ? (
        <Weather
          image={weather.weather[0].icon}
          temperature={weather.main.temp}
          feels_like = {weather.main.feels_like}
          main={weather.weather[0].main}
          humidity = {weather.main.humidity}
          description={weather.weather[0].description}
        />
      ) : null}
      </div>
      {weeklyWeather? weeklyForcast :null}
    </>
  );
}

export default App;
