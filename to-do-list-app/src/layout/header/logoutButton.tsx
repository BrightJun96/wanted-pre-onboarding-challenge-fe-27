import {authStorage} from "../../helper/authStorage.ts";

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