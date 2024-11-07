import {createBrowserRouter} from "react-router-dom";
import Login from "../page/login/login.tsx";
import Signup from "../page/signup/signup.tsx";
import Todo from "../page/todo/todo.tsx";
import Root from "../page/root/root.tsx";
import TodoDetails from "../page/todo/details/todoDetails.tsx";
import TodoRegister from "../page/todo/register/todoRegister.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path: "todo",
                element:<Todo/>,
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
                children:[
                    {
                        path:"login",
                        element:<Login/>
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
