import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa
          iste similique sit commodi sequi voluptatibus delectus eum voluptates
          suscipit, architecto excepturi a voluptatem dicta minima maiores optio
          quaerat unde.
        </p>
      </div>
      <div className="bottom">
        {loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
