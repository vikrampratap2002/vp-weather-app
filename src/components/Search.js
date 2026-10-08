import axios from "axios";
import React, { useState } from "react";

const Search = ({setWeatherDetails}) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
    setWeatherDetails(null);
  };

  const handleKeyDown = async (e) => {
    if (e.key !== "Enter") return;
    const option = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: search },
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "b20d47f0d4msh3982d9642dd13c8p1e58f7jsn550814414a33",
      },
    };
    try {
      const response = await axios.request(option);
      setWeatherDetails(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log("search", search);

  return (
    <div className="search-section">
      <div className="search-cantainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Search for a city"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Search;
