import CustomButton from "../../components/button/customButton.tsx";
import {authStorage} from "../../helper/auth/authStorage.ts";

function LogoutButton() {

    function handleLogout() {
         authStorage.deleteToken()
        window.location.href = "/auth/login"
    }
    return (
        <CustomButton
            label={"로그아웃"}
            onClick={handleLogout}
       />
    );
}

export default LogoutButton;
