import Button from "~/component/Button";
import styles from "./Menu.module.scss";

function MenuItem({ key, data , onClick }) {
  return (
    <Button to={data.to} className={styles["menu-items"]} onClick={onClick} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
