import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {authStorage} from "../../helper/auth/authStorage.ts";
import {fetchLogin} from "../../service/auth/api.auth.ts";
import {AUTH_PAGE_ENUM} from "../../constant/feature/auth/constant.ts";

/**
 * 로그인 페이지
         */
function Login() {
    async function networkLogin(form:AuthFormType) {
        const response  = await fetchLogin(form);

        const result = await response.json();

        if(!response.ok){
            window.alert(result.details)
            return response.ok

        }

        if(response.ok){
            window.alert(result.message)
            authStorage.setToken(result.token)

            return response.ok
        }

    }
    return (
        <AuthForm
            pageType={AUTH_PAGE_ENUM.LOGIN}
            networkRequest={networkLogin}/>
    );
}

export default Login;
