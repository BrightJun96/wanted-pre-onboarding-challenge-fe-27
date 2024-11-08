import {useLocation} from "react-router-dom";
import {authStorage} from "./authStorage.ts";

/**
 * @todo protected route에 진입한뒤, redirect를 해주는데 이를 토큰확인후,해당 protected router에 진입못하도록 막기
 * react-router-dom > loader를 활용해보자.
 */
function useAuth() {
   const location = useLocation()

   // 페이지
   const loginPage = location.pathname === "/auth/login"
   const signupPage = location.pathname === "/auth/signup"
   const todoPage = location.pathname.includes("/todo")
   const authPage = loginPage || signupPage




   // 로그인 페이지나 회원가입 페이지에 접근했을 때 토큰이 있으면 todo 페이지로 이동
   if(authStorage.getToken()&&authPage){
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
