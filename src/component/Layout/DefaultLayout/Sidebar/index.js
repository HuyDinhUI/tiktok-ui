import Menu from "./Menu/Menu";
import Header from "./header/header";
import styles from "./sidebar.module.scss";
import Following from "./following/following";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ACtivityIcon,
  ArrowIcon,
  ExploreIconn,
  FollowingIcon,
  FriendsIcon,
  HomeIcon,
  LiveIcon,
  MessIcon,
  MoreIcon,
  UploadIcon,
} from "~/component/Icons";
import MenuSidebar from "./Menu/Menu";

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
    icon: (
      <img
        style={{ width: "24px", height: "24px", borderRadius: "50px" }}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/ff832a9b10986dd21cefbad621a3ca91.jpeg?lk3s=a5d48078&nonce=48631&refresh_token=cd4c8c083309c92a19f9b0d8dfbcf236&x-expires=1739793600&x-signature=kinZc0sQx%2BtWoEcMWkdEBUg%2FlT4%3D&shp=a5d48078&shcp=81f88b70"
      ></img>
    ),
    title: "Profile",
  },
  {
    icon: <MoreIcon />,
    title: "More",
    children: [
      {
        title: "Get Coins",
      },
      {
        title: "Create TikTok effects",
      },
      {
        title: "Business Suite",
      },
      {
        title: "Creator Tools",
        icon: <ArrowIcon />,
        separate: true
      },
      {
        title: "English",
        icon: <ArrowIcon />,
        separate: true,
        children: {
          title: "Language",
          data: [
            {
              code: "en",
              title: "English",
            },
          ],
        },
      },
      {
        title: "Dark mode",
        icon: <ArrowIcon />,
        separate: true,
      },
      {
        title: "Settings",
      },
      {
        title: "Feedback and help",
      },
      {
        title: "Log out",
      },
    ],
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
          <MenuSidebar items={SIDEBAR_ITEMS}></MenuSidebar>
          <Following></Following>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
