import Button from "~/component/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountIem";

const cx = classNames.bind(styles);

function MenuItem({ key, data, onClick,rightIcon,leftIcon }) {
  
  return (
    <Button
      to={data.to}
      className={cx("menu-items", { separate: data.separate })}
      onClick={onClick}
      leftIcon={data.icon}
      
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
