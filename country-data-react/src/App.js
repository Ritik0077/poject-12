import React, { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import Country from "./components/Countries/Country";
import axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://restcountries.eu/rest/v2/region/asia`
      );
      setItems(result.data);
      setIsLoading(false);
      // console.log(result.data);
    };
    fetchData();
  }, [isLoading]);
  // console.log(items);

  const clickHandler = () => {
    setIsLoading(true);
  };

  return (
    <div className="container">
      <Header />
      <div className="btn">
        <button onClick={clickHandler}>Refresh</button>
      </div>
      <Country items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
