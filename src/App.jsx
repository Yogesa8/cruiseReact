import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Header from "./component/Header";
import "../css/style.css";
import "../css/topPlace.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-select.min.css";
import CruiseForm from "./component/CruiseForm";
import TopCruise from "./Places/TopCruise";
import PopularDestination from "./Places/PopularDestination";
import PopularPlace from "./Places/popularPlace";
import BestPlace from "./Places/BestPlace";
import Footer from "./component/Footer";
import Demo from "./component/Demo";

const App = () => {
  return (
    // <Demo />
    <div>
      <Header />
      <PrimeReactProvider>
        <CruiseForm />
      </PrimeReactProvider>
      <TopCruise />
      <PopularDestination />
      <PopularPlace />
      <BestPlace />
      <Footer />
    </div>
  );
};

export default App;
