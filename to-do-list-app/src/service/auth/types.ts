// 회원가입,로그인 공통 요청 타입
export interface CommonAuthRequest{
    email: string; // 이메일
    password: string;// 비밀번호
}

// 회원가입
export interface SignupRequest extends CommonAuthRequest{

}

// 로그인
export interface LoginRequest extends CommonAuthRequest{

}
