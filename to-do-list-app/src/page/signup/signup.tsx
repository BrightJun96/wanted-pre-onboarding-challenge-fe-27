import AuthForm, {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {fetchSignup} from "../../service/auth/api.auth.ts";
import {authLocalStorage} from "../../helper/authStorage.ts";

function Signup() {

    async function networkSignup(form:AuthFormType) {
        const response  = await fetchSignup(form);

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
        <AuthForm networkRequest={networkSignup}/>
    );
}

export default Signup;
