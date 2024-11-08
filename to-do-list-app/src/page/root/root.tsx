import {Outlet} from "react-router-dom";
import Header from "../../layout/header/header.tsx";

function Root() {


    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Root;
