import Button from "~/component/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuItem({ key, data , onClick }) {
  
  return (
    <Button to={data.to} className={cx('menu-items',{separate:data.separate})} onClick={onClick} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
