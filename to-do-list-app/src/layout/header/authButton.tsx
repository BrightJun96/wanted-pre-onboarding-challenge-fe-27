// import "../../css/header/header.css"

function AuthButton() {
    return (
        <div
            className={"auth-button-container"}
        >
                        <span>
                            <a href="/auth/login">로그인</a>
                        </span>
            <span>
                            <a href="/auth/signup">회원가입</a>
                        </span>
        </div>
    );
}

export default AuthButton;
