import images from "~/assest/img";
import styles from "./header.module.scss";
import Button from "~/component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usermenu } from "~/component/Layout/Component/Header";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountIem";
import { SearchIcon } from "~/component/Icons";
const data = usermenu;

function Header() {
  const className = styles["search-btn"];
  return (
    <header className={styles.inner}>
      <div className={styles.logo}>
        <a href="/">
          <img src={images.logo}></img>
        </a>
      </div>
      <HeadlessTippy
      interactive
      placement="right"
       trigger="click"
        render={(attrs) => (
          <div className={styles["search-result"]} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={styles["search-title"]}>Account</h4>
              <AccountItem></AccountItem>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={styles.search}>
          <Button
            className={className}
            leftIcon={
              <SearchIcon/>
            }
          >
            Search
          </Button>
        </div>
      </HeadlessTippy>
    </header>
  );
}

export default Header;
