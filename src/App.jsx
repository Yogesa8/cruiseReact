import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Header from "./component/Header";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-select.min.css";
import CruiseForm from "./component/CruiseForm";
import TopCruise from "./Places/TopCruise";
import PopularDestination from "./Places/PopularDestination";
import PopularPlace from "./Places/popularPlace";
import Demo from "./Demo";
import BestPlace from "./Places/BestPlace";

const App = () => {
  return (
    <div>
      {/* <Header />
      <PrimeReactProvider>
        <CruiseForm />
      </PrimeReactProvider>

      <TopCruise />
      <PopularDestination />
      <PopularPlace /> */}
      <BestPlace/>
    </div>
  );
};

export default App;
