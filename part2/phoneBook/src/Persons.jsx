/* eslint-disable react/prop-types */
const Persons = ({persons, filteredList}) => {

  return (
    <div>
      {filteredList.length === 0 &&
        persons.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      {filteredList.length > 0 && (
        <p key={filteredList[0].name}>
          {filteredList[0].name} {filteredList[0].number}
        </p>
      )}
    </div>
  );
};

export default Persons;
