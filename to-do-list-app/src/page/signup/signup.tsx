import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {AUTH_PAGE_ENUM} from "../../constant/feature/auth/constant.ts";
import {executeNetworkRequest, handleNetworkError, handleNetworkSuccess} from "../../helper/networkUtils.ts";
import {authService} from "../../service/auth/api.auth.ts";

/**
 * 회원가입 페이지
 */
function Signup() {


    async function networkSignup(form:AuthFormType) {
        return executeNetworkRequest<AuthFormType,boolean>({
            requestFunction: authService.signup,
            requestParams: form,
            onSuccess: ()=>handleNetworkSuccess({alertMessage:"회원가입 성공",redirectUrl:"/todo"}),
            onError: handleNetworkError
        })
    }
    return (
        <AuthForm
            pageType={AUTH_PAGE_ENUM.SIGNUP}
            networkRequest={networkSignup}/>
    );
}

export default Signup;
