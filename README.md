# For-Frontend-Assignment

프론트엔드 과제를 위한 Fastify API 서버

<br />

## 실행 방법

Node 16 혹은 그 이상의 버전이 필요합니다.

```javascript
 $ yarn // install dependencies
 $ yarn dev // run server
```

### 목업 데이터 생성

(이미 `src/mock` 경로에 필요한 목업 데이터들이 생성되어 있기 때문에 따로 생성할 필요는 없습니다)

```javascript
 $ yarn mock:seed // make mock data
```

<br />

## API (Base url: `http://localhost:8080/api`)

### 1. `/contents` : 콘텐츠 리스트 불러오기(총 콘텐츠 개수 64개)

**Method** : GET

**Query** : 
```javascript
{
  imit: number, // 조회할 콘텐츠 개수 (required)
  page: number, // 조회할 콘텐츠 페이지 (required)
  orderBy: enum['createdAt', 'company'], // 조회할 콘텐츠 리스트의 순서 기준 (required)
  keyword: string // 회사 키워드 (optional)
}
```

**Return** : `orderBy === 'createdAt'` 일 때는 최신순, `orderBy === 'company'` 일 때는 회사 이름 기준 오름차순(ㄱ~ㅎ)

Request가 `http://localhost:8080/api/contents?limit=2&page=1&orderBy=createdAt&keyword=오픈` 일 경우,
```javascript
status : 200 OK

[
    {
        "id": 46,
        "createdAt": "2021-01-29T17:49:41.538Z",
        "updatedAt": "2021-01-29T17:49:41.538Z",
        "thumbnail": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/21990/1a90cb8d-39a5-4d0c-bb4b-79b4dda3cb06/오픈놀배배너-1.png",
        "title": "진로/취업/창업/청년 교육 프로그램 기획 및 운영방안 제안",
        "company": "오픈놀"
    },
    {
        "id": 21,
        "createdAt": "2020-08-09T15:04:41.192Z",
        "updatedAt": "2020-08-09T15:04:41.192Z",
        "thumbnail": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/23350/44ccf04f-0471-4ed6-bc14-f66cc1a4878e/오픈프레스미니인턴랜딩페이지-커버.png",
        "title": "우리 동네 펫돌봄 커뮤니티, 펫봄 App의 활성화를 위한 마케팅 방안 및 서비스 개선 방안",
        "company": "(주)오픈프레스"
    },
]
```

<br />

### 2. `/banners` : 배너 리스트 불러오기(총 배너 개수 15개)

**Method** : GET

**Query** : 
```javascript
{
  imit: number, // 조회할 배너 개수 (required)
}
```

**Return** :

Request가 `http://localhost:8080/api/banners?limit=2` 일 경우,
```javascript
status : 200 OK

[
    {
        "id": 1,
        "image": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/23810/e13bb4e0-a59a-445d-b1c5-b30a0297c246/miniintern1PC.png",
        "link": "https://miniintern.com/",
        "createdAt": "2019-12-06T11:22:04.984Z",
        "updatedAt": "2019-12-06T11:22:04.984Z"
    },
    {
        "id": 2,
        "image": "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/23810/e13bb4e0-a59a-445d-b1c5-b30a0297c246/miniintern1PC.png",
        "link": "https://miniintern.com/",
        "createdAt": "2019-10-04T15:17:24.471Z",
        "updatedAt": "2019-10-04T15:17:24.471Z"
    }
]
```
