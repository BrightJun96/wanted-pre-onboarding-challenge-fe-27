import networkInstance from "../network.instance.ts";
import {AUTH} from "../domainPath.ts";
import {LoginRequest, SignupRequest} from "./types.ts";

// 회원가입
export async function fetchSignup(signupRequest:SignupRequest){
    return networkInstance(`${AUTH}/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupRequest),
    })
}

// 로그인
export async function fetchLogin(loginRequest:LoginRequest){
    return networkInstance(`${AUTH}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
    })

}
