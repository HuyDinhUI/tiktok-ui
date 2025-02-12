import Styles from "./Header.module.scss";
import classNames from "classnames";
import images from "~/assest/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountIem";
import Button from "~/component/Button";

function Header() {
  const [searchResult, setSearchResult] = useState([]);

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
                  <h4 className={Styles['search-title']}>Account</h4>
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
          <Button text >Upload</Button>
          <Button primary >Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
