import { useState } from 'react';
import './App.css';
import axios from 'axios';
import ShowTemp from './ShowTemp';

function App() {
  const [city,setcity] = useState("") 
  const [data,setData] = useState({
    description: "",
    temp: 0,
    temp_max:0,
    temp_min :0,
    humidity :0,
    sunrise:0,
    sunset:0,
    country: "",
  })         

const handleClick = () =>{
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbdc1caf8a4bf485172fbb50f9c19f98`)
          .then((response)=> {
            setData({
              description: response.data.weather[0].description,
              temp: response.data.main.temp,
              temp_max:response.data.main.temp_max,
              temp_min :response.data.main.temp_min,
              humidity :response.data.main.humidity,
              sunrise:response.data.sys.sunrise,
              sunset:response.data.sys.sunset,
              country:response.data.sys.country,
            })
          })
  }
  return (
       <>
          <div className='container text-center my-2'>
             <h1>Weather App Using ReactJS</h1>
              <input type="text" className='from-control' value={city} onChange={(e)=>{
                setcity(e.target.value);
              }}/>
              <button className='btn btn-primary mx-2' type='submit'  onClick={handleClick}>Get Temp</button>
            
          </div>
          <ShowTemp text = {data}></ShowTemp>
       </>
  );
}

export default App;
