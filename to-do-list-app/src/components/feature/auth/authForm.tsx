import React from 'react';
import {AUTH_PAGE_ENUM, AUTH_PAGE_TYPE} from "../../../constant/feature/auth/constant.ts";
import "../../../css/auth/authForm.css"
import "../../../css/index.css"
import {FLEX_COLUMN_CONTAINER_CLASSNAME, FLEX_ROW_CONTAINER_CLASSNAME} from "../../../constant/css/constant.ts";
import {useNavigate} from "react-router-dom";
import CustomInput from "../../input/customInput.tsx";

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

   const navigate =  useNavigate()

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
       const result = await networkRequest(form)
        if(result) {
            navigate("/todo")
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
            <CustomInput
                label={"이메일"}
                value={form.email}
                onChange={(value) => handleSetFormValue("email",value)}
                inputType={"email"}
            />
            <CustomInput
                label={"비밀번호"}
                value={form.password}
                onChange={(value) => handleSetFormValue("password",value)}
                inputType={"password"}
            />
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
