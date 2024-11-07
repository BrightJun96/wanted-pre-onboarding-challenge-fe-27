import {createBrowserRouter} from "react-router-dom";
import Login from "../page/login/login.tsx";
import Signup from "../page/signup/signup.tsx";
import Todo from "../page/todo/todo.tsx";
import Root from "../page/root/root.tsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path: "todo",
                element:<Todo/>,
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
