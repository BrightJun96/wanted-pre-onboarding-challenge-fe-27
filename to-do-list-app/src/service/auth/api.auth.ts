import {authStorage} from "../../helper/auth/authStorage.ts";
import {AUTH} from "../domainPath.ts";
import networkInstance from "../network.instance.ts";
import {AbstractAuthService} from "./interface.auth.ts";
import {LoginRequest, SignupRequest} from "./types.ts";

// 로그인,회원가입 추상화 인터페이스 구현한 클래스
class AuthService implements AbstractAuthService{

    constructor() {
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    async login(request: LoginRequest): Promise<boolean> {
        const response = await networkInstance(`${AUTH}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })

       return  await this.afterAuthAction(response)
    }



    async signup(request: SignupRequest): Promise<boolean> {
        const response = await  networkInstance(`${AUTH}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })
       return  await this.afterAuthAction(response)

    }

    private async afterAuthAction(response:Response): Promise<boolean> {
        const result = await response.json();
        if (!response.ok) {
            console.error(result.details);
            throw new Error(result.details);
        }
        authStorage.setToken(result.token);
        return true;
    }
}

export const authService = new AuthService();


