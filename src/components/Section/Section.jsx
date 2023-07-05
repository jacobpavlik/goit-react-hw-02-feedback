import PropTypes from 'prop-types';
import css from './Section.module.css';
// import { Statistics } from '../Statistics/Statistics';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
