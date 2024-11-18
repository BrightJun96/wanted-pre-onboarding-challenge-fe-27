import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {AUTH_PAGE_ENUM} from "../../constant/feature/auth/constant.ts";
import {authService} from "../../service/auth/api.auth.ts";

/**
 * 로그인 페이지
         */
function Login() {
    async function networkLogin(form:AuthFormType) {
        try {
            const success = await authService.login(form);
            if (success) {
                alert("로그인 성공");
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
            pageType={AUTH_PAGE_ENUM.LOGIN}
            networkRequest={networkLogin}/>
    );
}

export default Login;
