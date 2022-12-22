# ⏰alert
여러분의 일정을 등록하고 관리하세요.  

- 일정 등록, 수정, 삭제 기능
- 마감일자가 다가오면 붉은 테두리로 변함
- 마감 시간이 지난 일정은 별도 구역으로 분리
- 로그인 사용자에게만 해당 일정 노출
- JWT 토큰과 쿠키를 사용한 로그인 기능



## 👨‍👨‍👧‍👦팀원
### FE : [이원문](https://github.com/dnjsans), [이철화](https://github.com/Pablaw)
### BE : [서보성](https://github.com/teabear12), [서재석](https://github.com/suhjaesuk), [오호진](https://github.com/1Tsw0rd), [황보석](https://github.com/seok6086)

## GitHub 주소
### FE :
### BE :

## ✅Stack
### FE: 

### BE: <img src="https://img.shields.io/badge/Swagger-green?style=for-the-badge&logo=Swagger&logoColor=white"/> <img alt="Java" src ="https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white"/> <img alt="Java" src ="https://img.shields.io/badge/H2 Database-007396.svg?&style=for-the-badge&logo=Java&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F.svg?&style=for-the-badge&logo=Spring Boot&logoColor=white"> <img src="https://img.shields.io/badge/Spring Security-6DB33F.svg?&style=for-the-badge&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/JWT-000000.svg?&style=for-the-badge&logo=JSON Web Tokens&logoColor=white"> <img src="https://img.shields.io/badge/Gradle-02303A.svg?&style=for-the-badge&logo=Gradle&logoColor=white">

### Deploy: <img src="https://img.shields.io/badge/Amazon EC2-yellow?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-yellow?style=for-the-badge&logo=Amazon S3&logoColor=white">

## 📌Trouble Shooting

### 1.CORS preflight OPTIONS 메소드 문제
- SpringSecurity에서 허용한 Method : GET, POST, PATCH, DELETE
- 최초 Front와 Back 간 통신 중 이러한 SpringSecurity 정책 문제로 Front의 요청을 Block처리함
- 확인 결과 CORS preflight 통신 시, 사전에 OPTIONS 메소드 사용하여 예비통신이 먼저 진행되는데,
  OPTIONS 메소드를 SpringSecurity 정책으로 차단하여 발생한 문제였음
-  스프링 시큐리티에서 OPTIONS 메서드 허용하여 해결

-  preflight 발생 조건
  1) GET, HEAD, POST 요청이 아닌 경우
  2) Content-Type이 다음 3가지가 아닌 경우
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
  **application/json 사용하는 경우 발생
