# wanted-pre-onboarding-challenge-fe-27
원티드 프리온보딩 11월 과제입니다.

## 개발 서버 시작

`yarn dev`

## API 서버 코드 레포지터리
https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api


## 화면

### 로그인(http://localhost:5173/auth/login) , 회원가입(http://localhost:5173/auth/signup)
우측 상단에 로그인,회원가입을 버튼을 눌러 이동할 수 있습니다.
회원가입과 로그인이후, 다시 회원가입이나 로그인 페이지 이동하지 않도록 막아놓았습니다. 로그인페이지나 회원가입 페이지로 다시 이동하려면 로그아웃을 해주세요.


<img width="1493" alt="image" src="https://github.com/user-attachments/assets/f9970331-cf38-4a19-b1f7-7d3f58cbb08b">



### 할일 관련 페이지(http://localhost:5173/todo)
좌측 상단 할일 버튼을 눌러 이동할 수 있습니다. 해당 페이지는 로그인을 해야 접근할 수 있습니다.

기본적으로 할일 목록이 왼편으로 레이아웃 배치됩니다.
할일 목록 중 하나를 클릭하게 되면 오른편에 상세 정보가 나타나며 수정,삭제가 가능합니다.
할일 목록 맨 위에는 할일 추가 버튼이 있으며 해당 버튼을 누르면 오른편에 할 일 작성 폼이 나타납니다.


#### 수정(http://localhost:5173/todo/~~~)
<img width="1424" alt="image" src="https://github.com/user-attachments/assets/5d485c02-1bdb-4d98-a856-d3374095f960">

#### 등록(http://localhost:5173/todo/register)
<img width="934" alt="image" src="https://github.com/user-attachments/assets/fb989b99-87ad-48a3-9991-70392f3442a7">

## 디렉터리 구조(src)
### src > page
<img width="404" alt="image" src="https://github.com/user-attachments/assets/ecab6a50-1c68-4814-a25b-32b0244a0108">

- 페이지 관련 디렉터리
<img width="250" alt="image" src="https://github.com/user-attachments/assets/42d5343d-deaf-4906-a2ec-c451e01288fc">

- API 통신 관련 디렉터리
  <img width="398" alt="image" src="https://github.com/user-attachments/assets/917bbb19-2f1f-498f-979d-0cc1947c49e9">

- UI 관련 디렉터리
  공통 컴포넌트 및 각 페이지별 컴포넌트(feature 디렉터리로 관리)를 관리합니다.
  <img width="251" alt="image" src="https://github.com/user-attachments/assets/98d5642c-5ed2-48e1-8232-a8f227cba15e">
- 상수 관련 디렉터리
  <img width="262" alt="image" src="https://github.com/user-attachments/assets/80d10f39-6076-4f4d-afb5-37f0e6b9ad94">
- css 파일 관련 디렉터리
  <img width="271" alt="image" src="https://github.com/user-attachments/assets/f016aede-8c5f-48c5-ab14-819559df22c8">
- helper 함수 관련 디렉터리
  <img width="360" alt="image" src="https://github.com/user-attachments/assets/7805407b-169d-4b0f-9e6b-40daf6f75533">
- layout 관련 디렉터리
  <img width="362" alt="image" src="https://github.com/user-attachments/assets/5860c945-f33a-4ccf-a13b-fbb7f519c79a">
- routing 관련 디렉터리
  <img width="344" alt="image" src="https://github.com/user-attachments/assets/f3febc6d-4bab-4545-9b48-5c66354d2883">




