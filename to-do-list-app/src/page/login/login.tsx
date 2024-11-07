import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {authLocalStorage} from "../../helper/authStorage.ts";
import {fetchLogin} from "../../service/auth/api.auth.ts";

function Login() {
    async function networkLogin(form:AuthFormType) {
        const response  = await fetchLogin(form);

        const result = await response.json();

        if(!response.ok){
            window.alert(result.details)
            return;

        }

        if(response.ok){
            window.alert(result.message)
            authLocalStorage.setToken(result.token)
            return;
        }

    }
    return (
        <AuthForm networkRequest={networkLogin}/>
    );
}

export default Login;
