/* eslint-disable react/prop-types */
import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts} />
    </div>
  );
};

export default Content;
