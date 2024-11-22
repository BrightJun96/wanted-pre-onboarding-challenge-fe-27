import React from "react";
import {AuthFormType} from "../../components/feature/auth/authForm.tsx";
import {FieldType} from "../../components/form/abstractForm.tsx";

// Auth form 에 사용되는 상태값과 관련된 함수 관리
function useAuthForm() {

    const [form,setForm] = React.useState<AuthFormType>({
        email: "",
        password: ""
    })

    function handleSetFormValue(key: keyof AuthFormType, value: string) {
        setForm({
            ...form,
            [key]: value
        })
    }

    const ButtonDisabledCondition = !form.email || !form.password

    const fields :FieldType[]=[
        {
            type: "text",
            label: "이메일",
            value: form.email,
            onChange: (value: string) => handleSetFormValue("email", value)
        },
        {
            type: "password",
            label: "비밀번호",
            value: form.password,
            onChange: (value: string) => handleSetFormValue("password", value)}
    ]
    return {form,fields,ButtonDisabledCondition}
}

export default useAuthForm;
