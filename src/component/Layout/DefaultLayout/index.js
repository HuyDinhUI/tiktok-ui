import GlobalStyles from "~/component/GlobalStyles";
import Sidebar from "./Sidebar";

function LayoutDefault({children}){
    return(
        <div>
            <div className="DivBodyContainer">
                <Sidebar/>
                <div className="Content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutDefault