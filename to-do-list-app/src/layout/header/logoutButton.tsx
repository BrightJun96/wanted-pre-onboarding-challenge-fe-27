import {authStorage} from "../../helper/auth/authStorage.ts";

function LogoutButton() {

    function handleLogout() {
         authStorage.deleteToken()
        window.location.href = "/auth/login"
    }
    return (
        <button
        onClick={handleLogout}
        >
            로그아웃
        </button>
    );
}

export default LogoutButton;
