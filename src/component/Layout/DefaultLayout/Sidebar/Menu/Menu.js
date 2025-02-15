import MenuItem from "~/component/Popper/Menu/MenuItem";
import styles from "./menu.module.scss";

function Menu({ items = [] }) {
  const RenderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} onClick={() => {}}></MenuItem>;
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{RenderItems()}</div>
    </div>
  );
}

export default Menu;
