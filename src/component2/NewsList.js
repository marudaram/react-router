import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";

import styled from './NewsList.module.css';

const NewsList = () => {

    //1. API 가져오기
    //c163a446f0f242c4a5be5c8ef1a6edb5

    
    //5. 라우터로 들어온은 값의 처리
    const {category} = useParams();

    //category가 없거나 undefined이면 all로 할당
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`; //
    console.log(query);
    
    
    //2. useEffect에서 화면로딩시 데이터처리
    const [data, setData] = useState();

    useEffect( () => {

        (async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c163a446f0f242c4a5be5c8ef1a6edb5`;
            console.log(url);

            let {data: {articles}} = await axios.get(url);
            setData(articles);
            setLoading(true);
        })();


    }, [query]) //6. 변화가 일어날 때마다 재실행할 변수


    //3. 데이터 로딩처리(데이터가 오기 전에 state는 undefined임)
    const [loading, setLoading] = useState(false);

    if(loading === false) {
        return <div>로딩중</div>
    }

    //4. li태그를 컴포넌트로 변경



    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1. url, urlToImage, title, author, description, publishedAt */
                    data.map( (item, index) => <NewsArticle key={index+1} item={item}/>
                )
                }
            </ul>
        </div>
    )
}

export default NewsList;