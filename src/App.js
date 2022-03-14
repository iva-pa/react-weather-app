import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Search />
      <br />
      <CurrentWeather />
      <br />
      <br />
      <HourlyForecast />
      <br />
      <br />
      <DailyForecast />
    </div>
  );
}

export default App;
