import css from './Statistics.module.css';

export const Statistics = ({ title = false, stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stats_list}>
        {stats.map(({ label, percentage, id }) => {
          return <ItemList key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};

const ItemList = ({ label, percentage }) => {
  return (
    <li
      className={css.item_list}
      style={{ backgroundColor: generateRandomColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
