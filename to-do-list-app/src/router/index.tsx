import {createBrowserRouter} from "react-router-dom";
import {AuthCheck} from "../helper/auth/authCheck.ts";
import Login from "../page/login/login.tsx";
import Root from "../page/root/root.tsx";
import Signup from "../page/signup/signup.tsx";
import TodoDetails from "../page/todo/details/todoDetails.tsx";
import TodoRegister from "../page/todo/register/todoRegister.tsx";
import Todo from "../page/todo/todo.tsx";


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
