import {authStorage} from "./authStorage.ts";
import {redirect} from "react-router-dom";


/**
 * 로그인 체크
 */
export async function authCheck({redirectUrlAfterPassAuth,redirectUrlAfterNotPassAuth }:{
    redirectUrlAfterPassAuth:string,
    redirectUrlAfterNotPassAuth:string
}) {

    if(!authStorage.getToken()){
        window.alert("로그인이 필요합니다.")
        return redirect(redirectUrlAfterNotPassAuth)
    }else{
        return redirect(redirectUrlAfterPassAuth)
    }
}
