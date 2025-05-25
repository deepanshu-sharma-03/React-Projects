import InfoBox from './InfoBox.jsx';
import SearchBox from './SearchBox.jsx';
import {useState} from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
         city:"Delhi",
        humidity:55,
        temp:26.5,
        tempMax:27,
        tempMin:23,
        weather:"Dusty",
        feelsLike:34,
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"black"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}