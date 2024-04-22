/* eslint-disable react/prop-types */
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ goodCounter, neutralCounter, badCounter }) => {
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" counter={goodCounter} />
          <StatisticsLine text="neutral" counter={neutralCounter} />
          <StatisticsLine text="bad" counter={badCounter} />
          <StatisticsLine
            text="all"
            counter={goodCounter + badCounter + neutralCounter}
          />
          <StatisticsLine
            text="average"
            counter={(goodCounter + neutralCounter + badCounter) / 3}
          />
          <StatisticsLine
            text="positive"
            counter={
              (goodCounter / (goodCounter + neutralCounter + badCounter)) *
                100 +
              "%"
            }
          />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
