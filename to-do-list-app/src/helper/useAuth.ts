import {useLocation, useNavigate} from "react-router-dom";
import {authStorage} from "./authStorage.ts";

function useAuth() {
   const navigate = useNavigate()
   const location = useLocation()

   // 페이지
   const loginPage = location.pathname === "/auth/login"
   const signupPage = location.pathname === "/auth/signup"
   const todoPage = location.pathname.includes("/todo")
   const authPage = loginPage || signupPage


   console.log("token : ",authStorage.getToken())


   // 로그인 페이지나 회원가입 페이지에 접근했을 때 토큰이 있으면 todo 페이지로 이동
   if(authStorage.getToken()&&authPage){
         // navigate("/todo")
      window.location.href = "/todo"


   }

   // 토큰이 없을 때,todo페이지에 접근하려고 하면 로그인 페이지로 이동
   if(!authStorage.getToken()&&todoPage){
      window.alert("로그인이 필요합니다.")

      window.location.href = "/auth/login"
         // navigate("/auth/login")
   }
}

export default useAuth;
