import {authStorage} from "./authStorage.ts";
import {redirect} from "react-router-dom";
import {RouteName} from "../../router/routeName.ts";


/**
 * 로그인 체크
 */
export class AuthCheck{
    static async authPageCheck(){
        if(!authStorage.getToken()){
            window.alert("로그인이 필요합니다.")
            return redirect(RouteName.LOGIN)
        }
        return null
    }

    static async notAuthPageCheck(){
        if(authStorage.getToken()){
            window.alert("이미 로그인이 되어있습니다.")
            return redirect(RouteName.TODO)
        }
        return null
    }


}
