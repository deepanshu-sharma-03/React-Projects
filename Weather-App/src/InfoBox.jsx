import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    
   let HOT_URL="https://images.unsplash.com/photo-1572339152406-cd1dcaa388aa?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3Ds";
   let RAINY_URL="https://images.unsplash.com/photo-1704883038327-e9cd4c164455?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
return (
    <div className='InfoBox'>
        <div className='cardContainer'>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <div className='information'>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city}</b>  {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p className='displayInfo'>Tempature : {info.temp}&deg;C</p>
         <p className='displayInfo'>Humidity : {info.humidity}&deg;C</p>
         <p className='displayInfo'>Max Temp : {info.tempMax}&deg;C</p>
         <p className='displayInfo'>Min Temp : {info.tempMin}&deg;C</p>
         <p className='displayInfo'>The weather can be described as <i>{info.weather}</i> and feels like :{info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      </div>
    </Card>
    </div>
    </div>
)

}