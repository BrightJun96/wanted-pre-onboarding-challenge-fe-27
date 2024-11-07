import {useLocation, useNavigate} from "react-router-dom";
import {authStorage} from "./authStorage.ts";

function useAuth() {
   const navigate = useNavigate()
   const location = useLocation()

   console.log("location", location.pathname)
   const loginPage = location.pathname === "/auth/login"
   const signupPage = location.pathname === "/auth/signup"
   const todoPage = location.pathname === "/todo"
   const authPage = loginPage || signupPage

   // 로그인 페이지나 회원가입 페이지에 접근했을 때 토큰이 있으면 todo 페이지로 이동
   if(authStorage.getToken()&&authPage){
         navigate("/todo")

   }

   // 토큰이 없을 때,todo페이지에 접근하려고 하면 로그인 페이지로 이동
   if(!authStorage.getToken()&&todoPage){
         navigate("/auth/login")
   }
}

export default useAuth;
