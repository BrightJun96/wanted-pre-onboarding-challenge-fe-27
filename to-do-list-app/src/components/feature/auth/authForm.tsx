import React from 'react';
import {AUTH_PAGE_ENUM, AUTH_PAGE_TYPE} from "../../../constant/feature/auth/constant.ts";
import "../../../constant/css/authForm.css"
import "../../../css/index.css"
import {FLEX_COLUMN_CONTAINER_CLASSNAME, FLEX_ROW_CONTAINER_CLASSNAME} from "../../../constant/css/constant.ts";

export interface AuthFormType {
    email: string;
    password: string;
}
function AuthForm({networkRequest,pageType}:{
    networkRequest:(form:AuthFormType)=>Promise<boolean|undefined> // API 요청 함수
    pageType: AUTH_PAGE_TYPE // 페이지 타입
}) {

    const [form,setForm] = React.useState<AuthFormType>({
        email: "",
        password: ""
    })

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
       const result = await networkRequest(form)
        if(result) {
            window.location.href = "/todo"
        }


    }

    function handleSetFormValue(key: keyof AuthFormType, value: string) {
        setForm({
            ...form,
            [key]: value
        })
    }
    return (
        <div className={FLEX_COLUMN_CONTAINER_CLASSNAME}>
            <h1>{pageType===AUTH_PAGE_ENUM.SIGNUP?"회원가입":"로그인"}</h1>
        <form
            className={`${FLEX_COLUMN_CONTAINER_CLASSNAME} auth-form-inner-container`}
            onSubmit={handleSubmit}

        >
            <label
            className={"input-container"}
            >
                이메일
                <input
                    type="email"
                    name={"email"}
                    value={form.email}
                    onChange={(e) => handleSetFormValue("email", e.target.value)}
                />
            </label>
            <label
                className={"input-container"}

            >
                비밀번호
                <input
                    type="password"
                    name={"password"}
                    value={form.password}
                    onChange={(e) => handleSetFormValue("password", e.target.value)}
                />
            </label>
            <div
                className={FLEX_ROW_CONTAINER_CLASSNAME}

            >
                <button
                    className={"custom-button"}
                    type="submit">{
                    AUTH_PAGE_ENUM.SIGNUP === pageType ? "회원가입" : "로그인"
                }</button>
            </div>
        </form>
        </div>
    );
}

export default AuthForm;
