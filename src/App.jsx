import React from 'react'
import './App.css'

function SearchCity(props){
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      props.setCity(event.target.elements.inputCity.value);
      event.target.reset();
      }}>
      <button type="submit"><IconMagnifyingGlass /></button>
      <input type="text" placeholder="Rechercher" id="inputCity"/>
    </form>
  );
}

function DisplayCity(props){
  return(
    <div><b>{props.city.toUpperCase()}</b></div>
  );
}

function DisplayWeather(props){
  return(
    <>
    <div><b>{props.weather.temperature}°C</b></div>
    <div>{props.weather.condition}</div>
    {props.weather.condition==="sunny" && <IconSun />}
    {props.weather.condition==="cloudy" && <IconCloud />}
    {props.weather.condition==="stormy" && <IconStorm />}
    {props.weather.condition==="windy" && <IconWind />}
    {props.weather.condition==="rainy" && <IconCloudRainHeavy />}
    </>
  );
}

function DisplayHint(props){
  switch (props.weather.condition) {
    case "sunny":
      return <div>Prenez des lunettes de soleil</div>
      break;
    case "cloudy":
      return <div>Sortez la tête des nuages</div>
      break;
    case "windy":
      return <div>Pensez à bien vous couvrir</div>
      break;
    case "stormy":
      return <div>Accrochez-vous bien</div>
      break;
    case "rainy":
      return <div>Prenez un parapluie</div>
      break;
    default:
      return <div></div>
      break;
  }
}

function IconMagnifyingGlass(props) {
  return (
  <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-.691 3.516a4.5 4.5 0 11.707-.707l2.838 2.837a.5.5 0 01-.708.708L9.31 10.016z"
      clipRule="evenodd"
    />
  </svg>
  );
}

function IconSun(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />
    </svg>
  );
}

function IconCloud(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z" />
    </svg>
  );
}

function IconCloudRainHeavy(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4.176 11.032a.5.5 0 01.292.643l-1.5 4a.5.5 0 11-.936-.35l1.5-4a.5.5 0 01.644-.293zm3 0a.5.5 0 01.292.643l-1.5 4a.5.5 0 11-.936-.35l1.5-4a.5.5 0 01.644-.293zm3 0a.5.5 0 01.292.643l-1.5 4a.5.5 0 11-.936-.35l1.5-4a.5.5 0 01.644-.293zm3 0a.5.5 0 01.292.643l-1.5 4a.5.5 0 01-.936-.35l1.5-4a.5.5 0 01.644-.293zm.229-7.005a5.001 5.001 0 00-9.499-1.004A3.5 3.5 0 103.5 10H13a3 3 0 00.405-5.973zM8.5 1a4 4 0 013.976 3.555.5.5 0 00.5.445H13a2 2 0 010 4H3.5a2.5 2.5 0 11.605-4.926.5.5 0 00.596-.329A4.002 4.002 0 018.5 1z" />
    </svg>
  );
}

function IconWind(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12.5 2A2.5 2.5 0 0010 4.5a.5.5 0 01-1 0A3.5 3.5 0 1112.5 8H.5a.5.5 0 010-1h12a2.5 2.5 0 000-5zm-7 1a1 1 0 00-1 1 .5.5 0 01-1 0 2 2 0 112 2h-5a.5.5 0 010-1h5a1 1 0 000-2zM0 9.5A.5.5 0 01.5 9h10.042a3 3 0 11-3 3 .5.5 0 011 0 2 2 0 102-2H.5a.5.5 0 01-.5-.5z" />
    </svg>
  );
}

function IconStorm(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
      <path d="M19 12 A7 7 0 0 1 12 19 A7 7 0 0 1 5 12 A7 7 0 0 1 19 12 z" />
      <path d="M5.369 14.236C3.53 10.307 3.808 6.62 4.665 3M18.63 9.76c1.837 3.928 1.561 7.615.703 11.236" />
    </svg>
  );
}


function App() {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState("");

  React.useEffect(() => {
    if (navigator.geolocation && !city) {
      navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude,
          longitude = position.coords.longitude;
        console.log(latitude + " " + longitude);
        fetch('https://jb03dcnv74.execute-api.eu-west-1.amazonaws.com/Prod/geo?lon='+longitude+'&lat='+latitude)
          .then(response => response.json())
          .then(json => setCity(json.city))
          .catch(error => console.error(error)); 
      },
      (err) => console.log(err)
      ); 
    }
  },[])

   
  React.useEffect(() => {
    if (city){
      fetch('https://jb03dcnv74.execute-api.eu-west-1.amazonaws.com/Prod/weather/'+city)
      .then(response => response.json())
      .then(json => setWeather({temperature:json.temperature ,condition:json.condition}))
      .catch(error => console.error(error));  
    }  
  }, [city]);

  return (
    <>
    <SearchCity setCity={setCity}/>
    <br/>
    <DisplayCity city={city}/>
    <hr />
    <DisplayWeather weather={weather}/>
    <hr />
    <DisplayHint weather={weather}/>
    </>
  );
}

export default App
