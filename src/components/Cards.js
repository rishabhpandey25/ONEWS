import { Col } from 'antd';
import NewsCard from "./NewsCard";
import React from "react";
import './Cards.css'
const Cards = ({newsArray}) =>{
    return (
        <>
            {newsArray.map((news,index)=>(
                <Col span={6} key={index} className="cards">
                    <NewsCard title={news.title} imageurl={news.urlToImage} description = {news.description} url={news.url} source={news.source.name}>
                    </NewsCard>
                </Col>
            ))}
        </>
    )
}

export default Cards;