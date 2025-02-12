import Styles from "./Header.module.scss";
import classNames from "classnames";
import images from "~/assest/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className={Styles.Wrapper}>
      <div className={Styles.inner}>
        <div className={Styles.logo}>
          <img src={images.logo} alt="tiktok"></img>
        </div>
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
        <div className={Styles.actions}></div>
      </div>
    </header>
  );
}

export default Header;
