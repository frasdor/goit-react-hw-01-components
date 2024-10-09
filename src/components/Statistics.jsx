import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
        {/* Jeśli przekazano tytuł, renderujemy nagłówek */}
        {title && <h2 className={styles.title}>{title}</h2>}
  
        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }; 
    
  // PropTypes - typowanie propsów
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