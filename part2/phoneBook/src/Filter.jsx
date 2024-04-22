/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ persons, filteredList, setFilteredList }) => {
  const [searchName, setSearchName] = useState("");

  const handleFindNameChange = (event) => {
    setSearchName(event.target.value);
    persons.find((e) => {
      if (e.name === event.target.value) {
        setFilteredList(
          filteredList.concat([{ name: `${e.name}`, number: `${e.number}` }])
        );
      }
    });
    if (searchName.length <= 1) {
      setFilteredList([]);
    }
  };

  return (
    <>
      <p>filter list with:</p>
      <input value={searchName} onChange={handleFindNameChange} />
    </>
  );
};

export default Filter;
