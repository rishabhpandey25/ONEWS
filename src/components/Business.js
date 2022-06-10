import Header from "./Header";
import config from "./config.json";
import React, { useEffect, useState } from "react";
import { Row, Divider,Card,Col } from 'antd';
import Cards from "./Cards";
import "./Home.css";
import "./Cards.css"
import Foot from "./Foot";
const Business = (props)=>{
    const [businessNews,setNews] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        async function fetchData( ){
            setLoading(true);
           const businessEndPoint = config.businessEndPoint+config.apikey;
           const businessData = await fetch(businessEndPoint).then(resp=>resp.json()).then(a=>a.articles);
           setNews(businessData);
           setLoading(false);
       };
       fetchData();
       
   },[]);

   const loadingCard = (number)=>{
        let arr = [];
        for(let i = 0;i < number; i++){
            arr.push(<Col span={6} key={i+1} className="cards"><Card loading={true}></Card></Col>);
        }
        return arr;
    }   

   return(
        <>
            <Header/>
            <div className="home-container">
                <Divider orientation="center" plain><h3>Business</h3></Divider>
                <Row className="news-box" gutter={16}>
                    {((loading)?(<> {loadingCard(20)}</>):(<Cards newsArray={businessNews}/>))}
                </Row>
            </div>
            <Foot/>
        </>
   );
}

export default Business;