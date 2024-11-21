import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {AUTH_PAGE_ENUM} from "../../constant/feature/auth/constant.ts";
import {executeNetworkRequest, handleNetworkError, handleNetworkSuccess} from "../../helper/networkUtils.ts";
import {authService} from "../../service/auth/api.auth.ts";

/**
 * 로그인 페이지
         */
function Login() {
    async function networkLogin(form:AuthFormType) {
    return executeNetworkRequest<AuthFormType,boolean>({
        requestFunction: authService.login,
        requestParams: form,
        onSuccess:() => handleNetworkSuccess({alertMessage:"로그인 성공",redirectUrl:"/todo"}),
        onError: handleNetworkError,
    })


    }
    return (
        <AuthForm
            pageType={AUTH_PAGE_ENUM.LOGIN}
            networkRequest={networkLogin}/>
    );
}

export default Login;
