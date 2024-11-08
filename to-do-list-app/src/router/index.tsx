import {createBrowserRouter, redirect} from "react-router-dom";
import Login from "../page/login/login.tsx";
import Signup from "../page/signup/signup.tsx";
import Todo from "../page/todo/todo.tsx";
import Root from "../page/root/root.tsx";
import TodoDetails from "../page/todo/details/todoDetails.tsx";
import TodoRegister from "../page/todo/register/todoRegister.tsx";
import {authStorage} from "../helper/auth/authStorage.ts";
import {AuthCheck, authCheck} from "../helper/auth/authCheck.ts";
import {RouteName} from "./routeName.ts";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,

        children:[
            {
                path: "todo",
                element:<Todo/>,
                loader: AuthCheck.authPageCheck,
                children:[
                    {
                        path: ":id",
                        element:<TodoDetails/>
                    },
                    {
                        path: "register",
                        element:<TodoRegister/>
                    }
                ]
            },
            {
                path:"auth",
                loader: AuthCheck.notAuthPageCheck,
                children:[
                    {
                        path:"login",
                        element:<Login/>,

                    },
                    {
                        path:"signup",
                        element:<Signup/>
                    }
                ]
            }
        ]
    }

]);


export default router;
