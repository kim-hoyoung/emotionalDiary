import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// 4. "/Notfound" : 위의 세가지 페이지가 아닌 주소 입력시 해당 페이지로 이동

// Link 컴포넌트 사용해서 router 이동시 Client-side Rendering 방식으로 이동

// useNavigate : 페이지를 실제로 이동시키는 Navigate 함수를 반환하는 Hook

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/Diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/Diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
export default App;
