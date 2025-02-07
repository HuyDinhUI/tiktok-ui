import Sidebar from "./Sidebar";

function LayoutDefault({children}){
    return(
        <div>
            <div className="Container">
                <Sidebar/>
                <div className="Content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutDefault