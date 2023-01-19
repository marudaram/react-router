import { useParams } from "react-router-dom";


const Info = () => {

    const data = {
        1: { name: "홍길동", subject: "리엑트라우터" },
        2: { name: "이순신", subject: "리엑트props" },
        3: { name: "쪼니", subject: "리엑트state" }

    }


    //useParams()

    let param = useParams();
    console.log(param); // URL주소에 값을 키로 받아준다
    console.log(param.num);

    // const obj = data[param.num];
    // console.log(obj);

    const {name, subject} = data[param.num]

    return (
        <div>
            <h3>Info화면..</h3>
            {name}님의 데이터 {subject}
        </div>
    )
}

export default Info;