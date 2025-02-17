import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
import Button from "~/component/Button";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  console.log(items)
  const [history, setHistory] = useState([{ data: items }]);
  console.log(history)
  const current = history[history.length - 1];
  console.log(current)
  

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
      console.log(isParent)
      return <Button rightIcon={item.icon} to={item.to} className={cx('menu-items',{separate:item.separate})} key={index} onClick={()=>{
        if (isParent){
          setHistory(prev => [...prev, item.children])
        }
      }}>{item.title}</Button>
    });
  };
  return (
    <Tippy
      placement="right"
      trigger="click"
      interactive
      render={(attrs) => (
        <div className={styles.content} tabIndex="-1" {...attrs}>
          <PopperWrapper className={styles["menu-popper"]}>
            {history.length > 1 ? <Header onBack={()=>{
              setHistory(prev => prev.slice(0,prev.length - 1))
            }} title="Language"></Header>:<Header title="More"></Header>}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={()=>setHistory(prev => prev.slice(0,1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
