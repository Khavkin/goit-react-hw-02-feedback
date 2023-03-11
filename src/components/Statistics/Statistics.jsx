import PropTypes from 'prop-types';
import { StatList, StatListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatListItem>
        <span>Good:</span>
        {good}
      </StatListItem>
      <StatListItem>
        <span>Neutral:</span>
        {neutral}
      </StatListItem>
      <StatListItem>
        <span>Bad:</span>
        {bad}
      </StatListItem>
      <StatListItem>
        <span>Total:</span>
        {total}
      </StatListItem>
      <StatListItem>
        <span>PositivePercentage:</span>
        {positivePercentage}%
      </StatListItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
