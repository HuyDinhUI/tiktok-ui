import MenuItem from "~/component/Popper/Menu/MenuItem";
import styles from "./menu.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import Menu from "~/component/Popper/Menu";
import Button from "~/component/Button";

function MenuSidebar({ items = [] }) {
  const RenderItemMore = (data) => {
    return data.map((item, index) => {
      return (
       <Menu items={data}>
          <MenuItem data={item}></MenuItem>
       </Menu>
      );
    });
  };

  const RenderItems = () => {
    return items.map((item, index) => {
      console.log(item.children);
      return item.children ? (
          <Menu items={item.children}>
            <div><MenuItem key={index} data={item}></MenuItem></div>
          </Menu>
        
      ) : (
        <MenuItem key={index} data={item}></MenuItem>
      );
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {RenderItems()}
      </div>
    </div>
  );
}

export default MenuSidebar;
