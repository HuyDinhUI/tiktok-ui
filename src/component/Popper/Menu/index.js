import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

function Menu({children,items = []}) {

    const renderItems = () =>{
        return items.map((item,index) =>(
            <MenuItem key={index} data={item}> </MenuItem>
        ))
    }
  return (
    <Tippy
      placement="bottom-end"
      delay={[0,700]}
      interactive
      render={(attrs) => (
        <div className={styles.content} tabIndex="-1" {...attrs}>
          <PopperWrapper className={styles['menu-popper']}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
    
  );
}

export default Menu;
