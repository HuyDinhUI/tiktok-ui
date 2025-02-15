import MenuItem from "~/component/Popper/Menu/MenuItem";
import styles from "./menu.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Popper";

function Menu({ items = [] }) {
  const RenderItemMore =(data)=>{
    return data.map((item,index)=>{
      return <MenuItem key={index} data={item}></MenuItem>
    })
  }

  const RenderItems = () => {
    return items.map((item, index) => {
      console.log(item.child)
      return  item.child ? (
        <HeadlessTippy
          interactive
          placement="right"
          trigger="click"
          render={(attrs) => (
            <div className={styles["More"]} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={styles['more-title']}>
                  {item.child.title}
                </div>
                <div className={styles.content}>
                  {RenderItemMore(item.child.data)}
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <div>
            <MenuItem key={index} data={item} ></MenuItem>
          </div>
        </HeadlessTippy>
      ) : (
        <MenuItem key={index} data={item} ></MenuItem>
      );
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{RenderItems()}</div>
    </div>
  );
}

export default Menu;
