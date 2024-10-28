# Github User Search

## 기능 설명

### 유저 검색 페이지

- 유저 이름 검색 input → 검색한 유저의 이름이 포함된 리스트 반환
- 검색 중 Skeleton UI로 검색 중 표현
- 검색 결과가 20개 이상일 시 무한 스크롤 UI로 Loading Indicator 역할
- 리스트의 하트 버튼 클릭 시 북마크 저장 기능 → 북마크에 추가된 유저는 빨간색 하트 아이콘, 추가가 안된 유저는 비어있는 하트 아이콘
- 리스트의 유저 이름 클릭시 유저 깃허브 페이지로 이동(새 창)
- 리스트의 Followers, Organizations, Subscriptions Check button 클릭 시 해당 데이터 조회

<br />

### 북마크 페이지

- 유저 검색 페이지에서 추가한 북마크 유저 리스트
- 추가한 북마크 유저 해제 기능

<br />

## 추가기능

- querystring 사용해 필터 검색어 저장(검색 후 새로고침 시 검색어 저장)

<br />

## 로컬 환경 프로젝트 실행 방법

1. npm install
2. npm run dev
3. http://localhost:3000/ 접속
