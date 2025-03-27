# 📖 emotionalDiary 감정 일기장

<p align="center">
  <img src="https://github.com/user-attachments/assets/02e374e1-b952-4c71-b887-1698eb5f0e01" width="500"/>
</p>

- **배포 URL**: [https://emotion-diary-seven-xi.vercel.app/](https://emotion-diary-seven-xi.vercel.app/)

<br>

## 🧠 프로젝트 소개

감정을 일기로 기록하고, 감정별로 일기를 분류해 한눈에 돌아볼 수 있는 감성 다이어리 웹 애플리케이션입니다.  
React 기반 SPA 구조로 구성되어 있으며, 사용자 경험을 고려한 UI/UX 설계와 페이지 라우팅, 커스텀 훅을 활용하였습니다.
작성된 감정일기는 localStorage를 사용하여 저장하였습니다.

---

## ⚙️ 1. 개발 환경 및 기술 스택

| 항목 | 내용 |
|------|------|
| 개발 언어 | JavaScript (ES6+) |
| 프레임워크 | React 19 |
| 번들러 | Vite |
| 라우팅 | react-router-dom v7 |
| 스타일링 | CSS Modules |
| 배포 | Vercel |
| 기타 | ESLint, 커스텀 훅 사용 |

---

## 🗂️ 2. 폴더 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜emotion1.png
 ┃ ┣ 📜emotion2.png
 ┃ ┣ 📜emotion3.png
 ┃ ┣ 📜emotion4.png
 ┃ ┗ 📜emotion5.png
 ┣ 📂components
 ┃ ┣ 📜Button.css
 ┃ ┣ 📜Buttons.jsx
 ┃ ┣ 📜DiaryItem.css
 ┃ ┣ 📜DiaryItem.jsx
 ┃ ┣ 📜DiaryList.css
 ┃ ┣ 📜DiaryList.jsx
 ┃ ┣ 📜Editor.css
 ┃ ┣ 📜Editor.jsx
 ┃ ┣ 📜EmotionItem.css
 ┃ ┣ 📜EmotionItem.jsx
 ┃ ┣ 📜Header.css
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Viewer.css
 ┃ ┗ 📜Viewer.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useDiary.jsx
 ┃ ┗ 📜usePageTitle.jsx
 ┣ 📂pages
 ┃ ┣ 📜Diary.jsx
 ┃ ┣ 📜Edit.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜New.jsx
 ┃ ┗ 📜Notfound.jsx
 ┣ 📂util
 ┃ ┣ 📜constants.js
 ┃ ┣ 📜get-emotion-image.js
 ┃ ┗ 📜get-stringed-date.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

---

## 📄 3. 페이지별 기능

| 페이지 | 파일 | 설명 |
|--------|------|------|
| 홈 (Home) | `Home.jsx` | 일기 목록을 일자 순으로 보여주며, 새로운 일기 작성으로 이동 가능 |
| 새 일기 작성 (New) | `New.jsx` | 날짜, 감정 선택, 내용 입력 후 저장 가능 |
| 일기 수정 (Edit) | `Edit.jsx` | 기존 일기 내용을 수정할 수 있음 |
| 일기 상세 (Diary) | `Diary.jsx` | 특정 일기 내용을 상세히 확인 |
| 404 페이지 | `Notfound.jsx` | 존재하지 않는 경로 접근 시 안내 페이지 |

---

### 🏠 홈 페이지 (`Home.jsx`)

- 저장된 일기 데이터를 `localStorage`에서 불러와 렌더링
- 일기 클릭 시 상세 페이지로 이동 (`Diary.jsx`)
- 오른쪽 아래 버튼을 통해 새 일기 작성 가능

| 홈 화면 |
|----------|
|![home](https://github.com/user-attachments/assets/02e374e1-b952-4c71-b887-1698eb5f0e01)|

---

### 📝 새 일기 작성 페이지 (`New.jsx`)

- 감정 선택, 날짜 선택, 일기 내용 입력 후 저장
- 저장 시 `localStorage`에 저장되고 홈으로 이동
- `usePageTitle` 훅을 사용해 제목 자동 설정

| 새 일기 작성 |
|---------------|
|![new](https://github.com/user-attachments/assets/ccb2b794-6706-45c1-855c-e7a054eda69b)|

---

### ✏️ 일기 수정 페이지 (`Edit.jsx`)


- 기존 일기 데이터를 불러와 수정 가능
- 저장 시 기존 일기 데이터 덮어쓰기
- 수정 시에도 감정, 날짜, 텍스트 모두 수정 가능

| 일기 수정 |
|------------|
|![edit](https://github.com/user-attachments/assets/14b82ac8-9282-436c-9166-44558daf11b5)|

---

### 📖 일기 상세 페이지 (`Diary.jsx`)

- 선택된 일기의 ID를 기반으로 `localStorage`에서 데이터 조회
- 감정 이미지, 일자, 본문 출력
- 존재하지 않는 ID 접근 시 `Notfound.jsx`로 이동

| 상세 페이지 |
|--------------|
|![diary](https://github.com/user-attachments/assets/700ac3ca-7c8e-44a1-98ed-2f4479abddac)|

---

### 🚫 404 페이지 (`Notfound.jsx`)

- 존재하지 않는 경로 접근 시 안내 문구 출력
- 홈으로 이동할 수 있게 alert 호출

---

## 🔗 기타

- 커스텀 훅을 통해 `document.title` 변경 등 공통 로직 추출
- 정적 emotion 이미지 리소스를 활용한 감정 UI 제공
- 컴포넌트 별로 CSS 파일 분리하여 유지 보수를 용이하게 함
  

---

## 🧩 4. 커스텀 훅 설명

### 🪝 `useDiary(id)`

특정 일기 ID에 해당하는 데이터를 가져오는 커스텀 훅입니다.  
존재하지 않는 ID일 경우, 경고창을 띄운 뒤 홈(`/`)으로 리다이렉트 처리합니다.

**사용 위치 예시**:
- `Diary.jsx`
- `Edit.jsx`

**동작 설명**:
- `DiaryStateContext`에서 전역 일기 목록을 받아옵니다.
- 전달받은 `id`를 기준으로 일치하는 일기를 탐색합니다.
- 해당 일기가 없으면 `alert` 및 `navigate("/")`
- 있으면 해당 데이터를 상태로 설정하여 리턴합니다.

```jsx
const diary = useDiary(id);
```

---

### 🪝 `usePageTitle(title)`

페이지 진입 시 브라우저 탭의 `title`을 설정하는 커스텀 훅입니다.

**사용 위치 예시**:
- 모든 주요 페이지 (`Home.jsx`, `New.jsx`, `Diary.jsx` 등)

**동작 설명**:
- 마운트 시점에 `document.title`을 전달받은 값으로 변경합니다.
- `title` 값이 바뀔 경우, 자동으로 반영됩니다.

```jsx
usePageTitle("감정일기 - 상세 보기");
```

**효과**:
- UX 향상
- 페이지 진입 시 사용자에게 명확한 위치 인식 제공
- SEO(검색 최적화)에도 도움

---

## 📚 Reference

이 프로젝트는 이정환님의 한입 리액트 강의를 기반으로 제작되었습니다.  
해당 강의는 아래 링크를 브라우저에 복사하여 접근하실 수 있습니다.

👉 https://inf.run/FiFhg
