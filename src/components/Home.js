import Header from "./Header";
import config from "./config.json";
import React, { useEffect, useState } from "react";
import { Row, Divider,Card,Col } from 'antd';
import Cards from "./Cards";
import "./Home.css";
import Foot from "./Foot";



const Home =  (props) =>{
    const [businessNews, setBusiness] = useState([]);
    const [sportsNews, setSports] = useState([]);
    const [techNews, setTech] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
         async function fetchData( ){
            setLoading(true);
            const businessEndPoint = config.businessEndPoint+config.apikey;
            const sportsEndPoint = config.sportsEndPoint+config.apikey;
            const techEndPoint = config.techEndPoint+config.apikey;
            const [businessData,sportsData ,techData] = await Promise.all([fetch(businessEndPoint).then(resp=>resp.json()).then(a=>a.articles),fetch(sportsEndPoint).then(resp=>resp.json()).then(a=>a.articles),fetch(techEndPoint).then(resp=>resp.json()).then(a=>a.articles)]);
            setBusiness(businessData);
            setSports(sportsData);
            setTech(techData);
            setLoading(false);
            console.log(businessData);
            console.log(sportsData);
            console.log(techData);
        };
        fetchData();
        
    },[]);

    const loadingCard = (number)=>{
        let arr = [];
        for(let i = 0;i < number; i++){
            arr.push(<Col span={6} key={i+1}><Card loading={true}></Card></Col>);
        }
        return arr;
    }
    return (
        <>
            
            <Header/>
            <div className="home-container">
                <Divider orientation="center" plain><h3>Business</h3></Divider>
                <Row className="news-box" gutter={16}>
                    {((loading)?(
                        <>
                            {loadingCard(4)}
                        </>
                    ):(<Cards newsArray={businessNews.slice(0,4)}/>))}
                    
                </Row>
                <Divider orientation="center" plain><h3>Technology</h3></Divider>
                <Row className="news-box" gutter={16}>
                    {((loading)?(
                        <>
                            {loadingCard(4)}
                        </>
                    ):(<Cards newsArray={techNews.slice(0,4)}/>))}
                </Row>
                <Divider orientation="center" plain><h3>Sports</h3></Divider>
                <Row className="news-box" gutter={16}>
                    {((loading)?(
                        <>
                            {loadingCard(4)}
                        </>
                    ):(<Cards newsArray={sportsNews.slice(0,4)}/>))}
                </Row>
            </div>
            <Foot/>
        </>
        
    );
}

export default Home;

