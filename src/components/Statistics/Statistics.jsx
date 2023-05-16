import React from 'react'
import PropTypes from "prop-types";
import css from './Statistics.module.css';

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}      

 <ul className={css.statList}>
              {stats.map(s => (
                  <li className={css.item} key={s.id} style={{backgroundColor: randomHexColor()}}>
                      <span className={css.label}>{s.label}</span>
                      <span className={css.percentage}>{s.percentage}%</span>
                  </li>
              ))}
  </ul>
</section>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
         id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistics