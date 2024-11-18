import {AUTH} from "../domainPath.ts";
import networkInstance from "../network.instance.ts";
import {AbstractAuthService} from "./interface.auth.ts";
import {LoginRequest, SignupRequest} from "./types.ts";

// 로그인,회원가입 추상화 인터페이스 구현한 클래스
class AuthService implements AbstractAuthService{
    async login(request: LoginRequest): Promise<Response> {
        return networkInstance(`${AUTH}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })
    }
    async signup(request: SignupRequest): Promise<Response> {
        return networkInstance(`${AUTH}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })
    }
}

export const authService = new AuthService();


