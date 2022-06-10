import Header from "./Header";
import config from "./config.json";
import React, { useEffect, useState } from "react";
import { Row, Divider,Card,Col } from 'antd';
import Cards from "./Cards";
import "./Cards.css"
import "./Home.css";
import Foot from "./Foot";
const Sports = (props)=>{
    const [sportsNews,setNews] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        async function fetchData( ){
            setLoading(true);
           const sportsEndPoint = config.sportsEndPoint+config.apikey;
           const sportsData = await fetch(sportsEndPoint).then(resp=>resp.json()).then(a=>a.articles);
           setNews(sportsData);
           setLoading(false);
       };
       fetchData();
       
   },[]);
   const loadingCard = (number)=>{
        let arr = [];
        for(let i = 0;i < number; i++){
            arr.push(<Col span={6}  key={i+1} className="cards"><Card loading={true}></Card></Col>);
        }
        return arr;
    }  

   return(
        <>
            <Header/>
            <div className="home-container">
                <Divider orientation="center" plain><h3>Sports</h3></Divider>
                <Row className="news-box" gutter={16}>
                    {((loading)?(<> {loadingCard(20)}</>):(<Cards newsArray={sportsNews}/>))}
                </Row>
            </div>
            <Foot/>
        </>
   );
}

export default Sports;