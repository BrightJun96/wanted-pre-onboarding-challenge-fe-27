import {FLEX_COLUMN_CONTAINER_CLASSNAME} from "../../../constant/css/constant.ts";
import {AUTH_PAGE_ENUM, AUTH_PAGE_TYPE} from "../../../constant/feature/auth/constant.ts";
import "../../../css/auth/authForm.css"
import "../../../css/index.css"
import useAuthForm from "../../../helper/auth/useAuthForm.ts";
import AbstractForm, {AbstractButtonType} from "../../form/abstractForm.tsx";

export interface AuthFormType {
    email: string;
    password: string;
}
function AuthForm({networkRequest,pageType}:{
    networkRequest:(form:AuthFormType)=>Promise<void> // API 요청 함수
    pageType: AUTH_PAGE_TYPE // 페이지 타입
}) {

    const {form,fields}=useAuthForm()

    async function handleSubmit() {
      await networkRequest(form)
    }

    const button:AbstractButtonType[]=[{
        label: AUTH_PAGE_ENUM.SIGNUP === pageType ? "회원가입" : "로그인",
        type: "submit",
        disabled: false,
    }]


    return (
        <div className={FLEX_COLUMN_CONTAINER_CLASSNAME}>
            <h1>{pageType===AUTH_PAGE_ENUM.SIGNUP?"회원가입":"로그인"}</h1>
            <AbstractForm
                onSubmit={handleSubmit}
                className={`${FLEX_COLUMN_CONTAINER_CLASSNAME} auth-form-inner-container`}
            >
               <AbstractForm.Fields fields={fields}></AbstractForm.Fields>
                <AbstractForm.Buttons buttons={button}/>
            </AbstractForm>

        </div>
    );
}

export default AuthForm;
