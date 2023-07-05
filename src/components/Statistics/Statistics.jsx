import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={css.statList}>
      <li>
        <span className={css.label}>Good:</span>
        <span className={css.value}>{good}</span>
      </li>
      <li>
        <span className={css.label}>Neutral:</span>
        <span className={css.value}>{neutral}</span>
      </li>
      <li>
        <span className={css.label}>Bad:</span>
        <span className={css.value}>{bad}</span>
      </li>
      <li>
        <span className={css.label}>Total:</span>
        <span className={css.value}>{total}</span>
      </li>
      <li>
        <span className={css.label}>Positive feedback:</span>
        <span className={css.value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
