# intellij 사용법
- ctrl + alt + l : 코드 정리
- rsf : snippet

# logic
1. login
   - login 정보를 웹 페이지 전체에 동기화
       - useEffect in app.js로 유저를 상기시킨다.
2. logout
    - logout 시에 다른 페이지에서도 동기화
      - useEffect in app.js

# deploy
- firebase deploy
  - Firebase 프로젝트에 배포
  - 주기적 update 필요
    
# Caution
- redux를 이용하여 삭제에서의 오류를 바꿔야한다
- firebase configure 파일을 작성해줘야한다
- stripe.js를 사용하기 위해 firebase spark요금제를 Blaze요금제로 변경해야만한다
  - 구글 결제 프로필설정 중 카드 번호 오류때문에 중단