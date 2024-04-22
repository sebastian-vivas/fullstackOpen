/* eslint-disable react/prop-types */
const StatisticsLine = ({ counter, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  );
};

export default StatisticsLine;
