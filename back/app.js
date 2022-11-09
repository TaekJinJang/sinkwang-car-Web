const express = require('express');
const postRouter = require('./routes/post');
const app = express();
const db = require('./models');

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.listen(3060, () => {
  console.log('서버 실행중...');
});

app.use('/post', postRouter);

// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체 수정 (통째로 덮는게 아니면 잘 안씀)
// app.delete -> 제거
// app.patch -> 부분 수정
// app.options -> 찔러보기 (요청을 보내도 되는지 확인용?)
// app.head -> 헤더만 가져오기 (잘 안씀)
