import { useState } from "react";
import "./SearchBox.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4d11edd1b9484745cbfcd08871097e7d";

    let getWeatherInfo = async () =>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city:city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    }

    let handleCity = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
          event.preventDefault();
          setError(false);
        try{
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }  
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField  id="city" value={city} label="City name" variant="outlined" required onChange={handleCity}/><br /><br />
                  <Button variant="contained" type="Submit">Search</Button>
            </form>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
        </div>
    )
}
