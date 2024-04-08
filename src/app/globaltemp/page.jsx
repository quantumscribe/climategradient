import GraphTemperature from "./graphtemparature";
import Real from "./real";

const GlobalTemperaturepage = () => {
    return (
      <div>
        <h1>GlobalTemperature</h1>
        <div><GraphTemperature/></div>
        <div><Real/></div>
      </div>
    );
  }
  
  export default GlobalTemperaturepage;