import Styles from "./Header.module.scss";
import classNames from "classnames";
import images from "~/assest/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountIem";
import Button from "~/component/Button";
import Menu from "~/component/Popper/Menu";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'English',
    children:{
      title:'Language',
      data:[
        {
          code:'en',
          title:'English'
        },
        {
          code:'vi',
          title:'Tiếng Việt'
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to:'/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Keyborad shortcuts",
  }
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  console.log(Menu);
  return (
    <header className={Styles.Wrapper}>
      <div className={Styles.inner}>
        <div className={Styles.logo}>
          <img src={images.logo} alt="tiktok"></img>
        </div>
        <Tippy
          visible={searchResult.length > 0}
          
          interactive
          render={(attrs) => (
            <div className={Styles["search-result"]} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={Styles["search-title"]}>Account</h4>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={Styles.search}>
            <input placeholder="Search acounts and videos"></input>
            <button className={Styles["close-btn"]}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={Styles.loading} icon={faSpinner} />
            <button className={Styles["search-btn"]}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={Styles.actions}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
          <Menu items={MENU_ITEMS}>
            <button className={Styles["more-btn"]}>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
