import {LoginRequest, SignupRequest} from "./types.ts";

// 로그인 서비스 인터페이스
export interface AbstractLoginService<TLoginRequest>{
    login(request:TLoginRequest): Promise<Response>
}

// 회원가입 서비스 인터페이스
export interface AbstractSignupService<TSignupRequest>{
    signup(request:TSignupRequest): Promise<Response>
}

// 로그인,회원가입 서비스 인터페이스 구현한 인터페이스
export interface AbstractAuthService extends AbstractLoginService<LoginRequest>,AbstractSignupService<SignupRequest>{}
