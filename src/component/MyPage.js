import { Navigate, useNavigate } from "react-router-dom";


const MyPage = () => {

    //첫번째 렌더링 과정에서는 사용할 수 없다
    // let nav = useNavigate();

    // let loginYN = false; //로그인여부
    // if(loginYN === false) {
    //     nav('/');
    // }

    //권한이 없으면 리다이렉트
    //replace = {true} 를 설정하면 기록을 남기지 않는다
    let loginYN = false;
    if(loginYN === false) {
        return <Navigate to="/"/>
    }



    return (
        <div>
            권한 있는 사람만 접근이 가능함
        </div>
    )
}

export default MyPage;