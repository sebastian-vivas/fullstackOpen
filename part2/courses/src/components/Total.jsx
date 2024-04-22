/* eslint-disable react/prop-types */
const Total = ({ course }) => {
  const { parts } = course;

  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <div>
      <p>Total of {total} exercises</p>
    </div>
  );
};

export default Total;
