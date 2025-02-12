import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountIem.module.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function AccountItem() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.avatar}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/62dc4789e908f2716506a24f785aaac4~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=47912&refresh_token=de93cc4b0c3f617381b2c22e5a0b3798&x-expires=1739498400&x-signature=BIzcRIwmJrSAReJrJaPugsNmL4s%3D&idc=my2&ps=13740610&shcp=b59d6b55&shp=a5d48078&t=4d5b0474"
      ></img>
      <div className={styles.info}>
        <h4 className={styles.name}>
          <span>Dinh Van Huy</span>
          <FontAwesomeIcon className={styles['icon-check']} icon={faCircleCheck}></FontAwesomeIcon>
        </h4>
        <span className={styles.username}>huydinh</span>
      </div>
    </div>
  );
}

export default AccountItem;
