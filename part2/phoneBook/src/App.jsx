import { useState } from "react";
import Filter from "./Filter";
import Persons from "./Persons";
import PersonsForm from "./PersonsForm";

const App = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        persons={persons}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <h2>Add a new</h2>
      <PersonsForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} filteredList={filteredList} />
    </div>
  );
};

export default App;
