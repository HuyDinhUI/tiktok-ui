import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

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
      return <MenuItem key={index} data={item} onClick={()=>{
        if (isParent){
          setHistory(prev => [...prev, item.children])
        }
      }}></MenuItem>
    });
  };
  return (
    <Tippy
      placement="right"
      trigger="click"
      delay={[0, 700]}
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
