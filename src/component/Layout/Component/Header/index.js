import Styles from "./Header.module.scss";
import classNames from "classnames";
import images from "~/assest/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountIem";
import Button from "~/component/Button";
import Menu from "~/component/Popper/Menu";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Keyborad shortcuts",
  },
];

const currentuser = true;

const usermenu = [
  {
    icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
    title: "View user",
    to: "/hoa"
  },
  {
    icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
    title: "Get coins",
    to: "/"
  },
  {
    icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
    title: "Settings",
    to: "/"
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
    title: "Log out",
    to: "/",
    separate:true
  }
]

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  console.log(Menu);
  return (
    <header className={Styles.Wrapper}>
      <div className={Styles.inner}>
        <div className={Styles.logo}>
          <img src={images.logo} alt="tiktok"></img>
        </div>
        <HeadlessTippy
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
        </HeadlessTippy>
        <div className={Styles.actions}>
          {currentuser ? (
            <>
             <Tippy content="Upload video">
                <button className={Styles['actions-btn']}>
                  <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                </button>
             </Tippy>
              {/* <button className={Styles['actions-btn']}>
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
              </button> */}
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentuser ? usermenu : MENU_ITEMS}>
            {currentuser ? (
              <img className={Styles['user-avatar']} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/62dc4789e908f2716506a24f785aaac4~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=47912&refresh_token=de93cc4b0c3f617381b2c22e5a0b3798&x-expires=1739498400&x-signature=BIzcRIwmJrSAReJrJaPugsNmL4s%3D&idc=my2&ps=13740610&shcp=b59d6b55&shp=a5d48078&t=4d5b0474"></img>
            ) : (
              <button className={Styles["more-btn"]}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
