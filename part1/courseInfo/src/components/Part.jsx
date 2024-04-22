/* eslint-disable react/prop-types */
const Part = (props) => {
  const partsMap = props.parts;
  return (
    <div>
      {partsMap.map((part) => (
        <p key={part.name}>{part.name + " " + part.exercises}</p>
      ))}
    </div>
  );
};

export default Part;
