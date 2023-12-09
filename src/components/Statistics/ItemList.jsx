import css from './Statistics.module.css';
export const ItemList = ({ label, percentage }) => {
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
