import { Fragment, useEffect, useState } from "react";


const App = () => {

    /*
     Ajax를 이용해서 외부데이터 가져오기
     1. Promise = fetch() 
     */

     const [raw, setRaw] = useState();

     const handleClick = () => {
         fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
          .then( response => response.json())
          .then( data => setRaw(data))
     }

    //  console.log(raw); //undefined


     //화면이 mount된 이후 데이터 가져오기 - useEffect()
     const [data, setData] = useState();

     useEffect(()=> {
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
          .then( response => response.json())
          .then( data => setData(data))
     }, []) //한번만 실행


    return (
        <Fragment>

            <button onClick={handleClick}>데이터 가져오기</button>

            {
                raw === undefined ?
                <div>
                    "데이터준비중"
                </div>
                :
                <div>
                    아이디: {raw.userId}<br/>
                    PW: {raw.userPw}<br/>
                    이름: {raw.userName}<br/>
                </div>
            }        

            <h3>mount이후 데이터 가져오기</h3>
            {
                data && <div>
                아이디: {data.userId}
                비밀번호: {data.userPw}
                이름: {data.userName}
                </div>
            }



        </Fragment>
    )
}


export default App;