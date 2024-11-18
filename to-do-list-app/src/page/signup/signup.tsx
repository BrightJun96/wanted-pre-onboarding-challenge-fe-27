import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {AUTH_PAGE_ENUM} from "../../constant/feature/auth/constant.ts";
import {authStorage} from "../../helper/auth/authStorage.ts";
import {authService} from "../../service/auth/api.auth.ts";

/**
 * 회원가입 페이지
 */
function Signup() {


    async function networkSignup(form:AuthFormType) {
        const response  = await authService.signup(form);

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
            pageType={AUTH_PAGE_ENUM.SIGNUP}
            networkRequest={networkSignup}/>
    );
}

export default Signup;
