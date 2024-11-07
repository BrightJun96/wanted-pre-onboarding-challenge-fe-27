import useAuth from "../../helper/auth/useAuth.ts";
import Header from "../../layout/header/header.tsx";
import {Outlet} from "react-router-dom";

function Root() {
    // 인증 처리
    useAuth()

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Root;
