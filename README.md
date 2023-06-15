# API list

### GET
  #### 게시물 전체 목록
  - '/'
  
  #### 특정 게시물과 게시물의 댓글 조회
  - '/post?id=' (id쿼리 값에 postId값 입력)

### POST

#### 게시물 생성 - body
- '/post/create'

#### 댓글 생성 - body
- '/comment/create'

### PATCH

#### 게시물 수정 - body
- '/post/update'

#### 댓글 수정 - body
- '/comment/update'

### DELETE

#### 게시물 삭제 - body
- '/post/delete'

#### 게시물 삭제 - body
- '/comment/delete'


# Schemas

### 게시물
```js
  postId,
  title,
  nickname,
  password,
  body,
  date
```
> postId, date 자동 생성

### 댓글
```js
  commentId,
  postId,
  nickname,
  password,
  body,
  date
```

> commentId, date 자동 생성
