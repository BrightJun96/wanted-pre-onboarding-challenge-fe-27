import "../../css/header/header.css"
import AuthButton from "./authButton.tsx";
import {authStorage} from "../../helper/auth/authStorage.ts";
import LogoutButton from "./logoutButton.tsx";

function Header() {
    return (<nav>
            <ul
            className={"header-container"}
            >
                <li>
                    <a href="/todo">할일</a>
                </li>
                {/*
                token이 있으면 로그아웃 버튼을 보여주고, token이 없으면 로그인, 회원가입 버튼을 보여준다.
                */}
                <li>
                    {authStorage.getToken()?<LogoutButton/>:<AuthButton/>}
                </li>
            </ul>
        </nav>
    );
}

export default Header;
