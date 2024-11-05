import {API_URL} from "../api.instance.ts";
import {AUTH} from "../domainPath.ts";
import {LoginRequest, SignupRequest} from "./types.ts";

// 회원가입
export async function fetchSignup(signupRequest:SignupRequest){
    return fetch(`${API_URL}/${AUTH}/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupRequest),
    })
}

// 로그인
export async function fetchLogin(loginRequest:LoginRequest){
    return fetch(`${API_URL}/${AUTH}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
    })

}
