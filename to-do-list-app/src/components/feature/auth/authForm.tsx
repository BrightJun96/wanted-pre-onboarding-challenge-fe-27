import React from 'react';



export interface AuthFormType {
    email: string;
    password: string;
}
function AuthForm({networkRequest}:{
    networkRequest:(form:AuthFormType)=>Promise<void>
}) {

    const [form,setForm] = React.useState<AuthFormType>({
        email: "",
        password: ""
    })

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await networkRequest(form)


    }

    function handleSetFormValue(key: keyof AuthFormType, value: string) {
        setForm({
            ...form,
            [key]: value
        })
    }
    return (<form
            onSubmit={handleSubmit}

        >
            <label>
                Email
                <input
                    type="email"
                    name={"email"}
                    value={form.email}
                    onChange={(e) => handleSetFormValue("email", e.target.value)}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name={"password"}
                    value={form.password}
                    onChange={(e) => handleSetFormValue("password", e.target.value)}
                />
            </label>
            <button type="submit">Sign up</button>
        </form>
    );
}

export default AuthForm;
