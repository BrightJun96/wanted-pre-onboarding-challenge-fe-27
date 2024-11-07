import React from 'react';
import useAuth from "../../helper/useAuth.ts";

function Root() {
    // 인증 처리
    useAuth()

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/todo">할일</a>
                    </li>
                    <>
                    <li>
                        <a href="/auth/login">로그인</a>
                    </li>
                    <li>
                        <a href="/auth/signup">회원가입</a>
                    </li>
                    </>
                </ul>
            </nav>
        </div>
    );
}

export default Root;
