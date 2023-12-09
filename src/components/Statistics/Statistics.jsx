import css from './Statistics.module.css';
import { ItemList } from './ItemList';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stats_list}>
        {stats.map(({ label, percentage, id }) => {
          return <ItemList key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};
