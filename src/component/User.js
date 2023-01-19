import { useLocation, useSearchParams } from "react-router-dom";


const User = () => {

    //쿼리스트링으로 넘어오는 값을 받기
    //1. useLocation Hook
    
    // const location = useLocation();
    // console.log(location); //객체안에 쿼리스트링 값을 분해해서 사용 -> 다소 불편함

    //2. useSearchParams Hook
    //배열반환 [값을 조회하거나 수정하는 get set, 쿼리스트링을 업데이트하는 객체]
    const [obj, setObj] = useSearchParams();
    // console.log(obj);
    // console.log(setObj);
    
    let id = obj.get("id"); //request.getParameter("id") 와 동일
    let age = obj.get("age");

    // console.log(id, age);

    //쿼리스트링 강제로 변경하기
    const handleClick = () => {
        let num = parseInt(age) + 1; //age값에 1더함
        setObj({id: "변경", age: num})
    }

    return (
        <div>
        <h3>User화면..</h3>

        쿼리스트링으로 넘어온 id: {id}<br/>
        쿼리스트링으로 넘어온 age: {age}<br/>

        <button onClick={handleClick}>쿼리스트링 강제수정</button>

        </div>
    )
}

export default User;