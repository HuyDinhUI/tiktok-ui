import GlobalStyles from "~/component/GlobalStyles";
import Sidebar from "./Sidebar";
import Header from "../Component/Header";
import Styles from "./DefaultLayout.module.scss"

function LayoutDefault({children}){
    return(
        <div className={Styles.Wrapper}>
            <Header/>
            <div className={Styles.Container}>
                <Sidebar/>
                <div className={Styles.Content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutDefault