import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

// eslint-disable-next-line react/prop-types
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
