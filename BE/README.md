# alert!

## ๐จโ๐จโ๐งโ๐ฆํ์

- [์๋ณด์ฑ](https://github.com/teabear12)
- [์์ฌ์](https://github.com/suhjaesuk)
- [์คํธ์ง](https://github.com/1Tsw0rd)
- [ํฉ๋ณด์](https://github.com/seok6086)

## โ์ฃผ์ ๊ธฐ๋ฅ

1. **์ผ์ ๋ฑ๋ก, ์กฐํ, ์์ , ์ญ์ **
2. **์๊ฐ ๋ณ ์ผ์  ์์ ์ด๋ฏธ์ง ๋ณํ**

## Stack
### BE
<img src="https://img.shields.io/badge/Swagger-green?style=for-the-badge&logo=Swagger&logoColor=white"/> <img alt="Java" src ="https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F.svg?&style=for-the-badge&logo=Spring Boot&logoColor=white"> <img src="https://img.shields.io/badge/Spring Security-6DB33F.svg?&style=for-the-badge&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/JWT-000000.svg?&style=for-the-badge&logo=JSON Web Tokens&logoColor=white"> <img src="https://img.shields.io/badge/Gradle-02303A.svg?&style=for-the-badge&logo=Gradle&logoColor=white">

### Deploy
<img src="https://img.shields.io/badge/Amazon EC2-yellow?style=for-the-badge&logo=Amazon EC2&logoColor=white">

## Trouble Shooting
**CORS preflight OPTIONS ๋ฉ์๋ ๋ฌธ์ **
- SpringSecurity์์ ํ์ฉํ Method : GET, POST, PATCH, DELETE
- ์ต์ด Front์ Back ๊ฐ ํต์  ์ค ์ด๋ฌํ SpringSecurity ์ ์ฑ ๋ฌธ์ ๋ก Front์ ์์ฒญ์ Block์ฒ๋ฆฌํจ
- ํ์ธ ๊ฒฐ๊ณผ CORS preflight ํต์  ์, ์ฌ์ ์ OPTIONS ๋ฉ์๋ ์ฌ์ฉํ์ฌ ์๋นํต์ ์ด ๋จผ์  ์งํ๋๋๋ฐ,
  OPTIONS ๋ฉ์๋๋ฅผ SpringSecurity ์ ์ฑ์ผ๋ก ์ฐจ๋จํ์ฌ ๋ฐ์ํ ๋ฌธ์ ์์
-  ์คํ๋ง ์ํ๋ฆฌํฐ์์ OPTIONS ๋ฉ์๋ ํ์ฉํ์ฌ ํด๊ฒฐ

-  preflight ๋ฐ์ ์กฐ๊ฑด
  1) GET, HEAD, POST ์์ฒญ์ด ์๋ ๊ฒฝ์ฐ
  2) Content-Type์ด ๋ค์ 3๊ฐ์ง๊ฐ ์๋ ๊ฒฝ์ฐ
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
  **application/json ์ฌ์ฉํ๋ ๊ฒฝ์ฐ ๋ฐ์

