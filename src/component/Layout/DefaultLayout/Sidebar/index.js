import Menu from "./Menu/Menu";
import Header from "./header/header";
import styles from "./sidebar.module.scss";
import Following from "./following/following";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ACtivityIcon,
  ExploreIconn,
  FollowingIcon,
  FriendsIcon,
  HomeIcon,
  LiveIcon,
  MessIcon,
  UploadIcon,
} from "~/component/Icons";

const SIDEBAR_ITEMS = [
  {
    icon: <HomeIcon />,
    title: "For You",
  },
  {
    icon: <ExploreIconn />,
    title: "Explore",
  },
  {
    icon: <FollowingIcon />,
    title: "Following",
  },
  {
    icon: <FriendsIcon />,
    title: "Friends",
  },
  {
    icon: <UploadIcon />,
    title: "Upload",
  },
  {
    icon: <ACtivityIcon />,
    title: "Activity",
  },
  {
    icon: <MessIcon />,
    title: "Messages",
  },
  {
    icon: <LiveIcon />,
    title: "LIVE",
  },
  {
    icon: <HomeIcon />,
    title: "For You",
  },
];

function Sidebar() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <div className={styles["container-fixed"]}>
          <Header></Header>
        </div>
        <div className={styles["container-scroll"]}>
          <Menu items={SIDEBAR_ITEMS}></Menu>
          <Following></Following>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
