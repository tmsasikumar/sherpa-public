import logo from './logo.svg';
import './App.css';
import * as React from "react"
import configData from "./data/site-data.json"
import Header from "./header"
import MainComponent from "./main_component"
import Offerings from './offerings';
import Footer from "./footer"

function App() {
  return (
    <div className="App">
      <Header siteTitle={configData.header} />
      <main>
        <MainComponent mainData={configData.mainData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
