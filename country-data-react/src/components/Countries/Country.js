import React from "react";
import Loading from "../UI/Loading";
import CountryItem from "./CountryItem";

function Country(props) {
  // you can also do it like ({ items, isLoading }) by using destructing
  return props.isLoading ? (
    <h1><Loading /></h1>
  ) : (
    <section className="cards">
      {props.items.map((item) => (
          <CountryItem item={item} key={item.name} />
      ))}
    </section>
  );
}

export default Country;
