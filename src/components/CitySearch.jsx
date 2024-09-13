import React, { useMemo, useState } from "react";

const CitySearch = ({ cities }) => {
  const [searchTerm, setSearchTerm] = useState("");

  //console.log(cities);

  // Memoize the filtered list of cities
  // const filteredCities = val => {
  //   console.log(val);

  //   const city = cities.filter(city =>
  //     city.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   console.log(city);
  //   // return cities.filter(city =>
  //   //   city.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   // );
  // };

  // const filteredCities = useMemo(() => {
  //   return cities.filter(city =>
  //     city.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }, [cities, searchTerm]);

  return (
    <div>
      <input
        type="text"
        //value={searchTerm}
        placeholder="Search for a city..."
        // onChange={e => filteredCities(e.target.value)}
      />
      <ul>
        {/* {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default CitySearch;
