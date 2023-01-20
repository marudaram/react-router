import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import User from "./component/User";
import Info from "./component/Info";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Header from "./layout/Header";
import MyPage from "./component/MyPage";

function App() {

  /*
  라우터 적용방법

  1. index.js에서 브라우저라우터로 app을 감싸준다
  2. 각각의 컴포넌트를 만든다
  3. Route를 이용해서 주소별로 컴포넌트를 연결

  Link컴포넌트 - a태그를 대체한다
  - to속성에 "라우터 주소"를 적어서 이동하면 된다

  쿼리스트링 ?키=값
  - useLocation()
  - useSearchParams()

  URL파라미터
  - 라우터를 설정 /경로:값
  - useParams() 값을 받는다


  */


  return (
    <Routes>

      {/* 중첩라우터 - 헤더부분처리(Header에서 Outlet컴포넌트 표기*/}
      <Route element={<Header/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/info/:num" element={<Info/>}/>
      </Route>

      {/* 각각 다른화면이 보인다 */}
      {/* <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> */}

      {/* 중첩라우터 - 공통부분처리 (Board에 가서 Outlet) */}
      <Route path="/board" element={<Board/>}>
        <Route path=":num" element={<BoardContent/>}/>
      </Route>

      {/* navigate 컴포넌트 */}
      <Route path="/mypage" element={<MyPage/>}/>



    </Routes>
  );
}

export default App;
