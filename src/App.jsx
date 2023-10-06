import React from 'react'
import './App.css'

function SearchCity(props){
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      props.setCity(event.target.elements.inputCity.value);
      event.target.reset();
    }}>
        <input type="text" placeholder="Rechercher" id="inputCity"/>
        <button type="submit">Loupe</button>
    </form>
  );
}

function DisplayCity(props){
  return(
    <b>{props.city.toUpperCase()}</b>
  );
}

function DisplayWeather(props){
  return(
    <>
    <div>{props.weather.temperature}</div>
    <div>{props.weather.condition}</div>
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
      return <div>Accrochez vous bien</div>
      break;
    case "rainy":
      return <div>Prenez un parapluie</div>
      break;
    default:
      return <div></div>
      break;
  }
}


function App() {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState("");

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude,
            longitude = position.coords.longitude;
          console.log(latitude + " " + longitude);
          if (!city){
            fetch('https://jb03dcnv74.execute-api.eu-west-1.amazonaws.com/Prod/geo?lon='+longitude+'&lat='+latitude)
            .then(response => response.json())
            .then(json => setCity(json.city))
            .catch(error => console.error(error)); 
          }
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
