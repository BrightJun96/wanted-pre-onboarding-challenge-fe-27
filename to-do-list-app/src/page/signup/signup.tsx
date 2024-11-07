import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {fetchSignup} from "../../service/auth/api.auth.ts";
import {authLocalStorage} from "../../helper/authStorage.ts";
import {AUTH_PAGE_ENUM} from "../../constant/feature/auth/constant.ts";

function Signup() {

    async function networkSignup(form:AuthFormType) {
        const response  = await fetchSignup(form);

        const result = await response.json();

        if(!response.ok){
            window.alert(result.details)
            return response.ok

        }

        if(response.ok){
            window.alert(result.message)
            authLocalStorage.setToken(result.token)
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