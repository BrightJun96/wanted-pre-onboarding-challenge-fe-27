import {createBrowserRouter} from "react-router-dom";
import Login from "../page/login/login.tsx";
import Signup from "../page/signup/signup.tsx";
import Todo from "../page/todo/todo.tsx";

const router = createBrowserRouter([
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
]);


export default router;
