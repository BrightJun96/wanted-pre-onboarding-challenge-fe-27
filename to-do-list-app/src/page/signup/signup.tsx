import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {AUTH_PAGE_ENUM} from "../../constant/feature/auth/constant.ts";
import {authService} from "../../service/auth/api.auth.ts";

/**
 * 회원가입 페이지
 */
function Signup() {


    async function networkSignup(form:AuthFormType) {
        try {
            const success = await authService.signup(form);
            if (success) {
                alert("회원가입 성공");
                window.location.href = "/todo";
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                alert(error.message);

            } else {
                console.error("An unknown error occurred");
            }
        }
    }
    return (
        <AuthForm
            pageType={AUTH_PAGE_ENUM.SIGNUP}
            networkRequest={networkSignup}/>
    );
}

export default Signup;
