
import React from 'react';
import 'antd/dist/antd.css';
import { Card,Divider} from 'antd';
import './NewsCard.css';
import {MinusOutlined} from '@ant-design/icons';



const NewsCard = ({title ,imageurl,description,url,source})=>{
    return(
        <a href={url}>
            <Card hoverable size={'small'} cover={<img alt="" src= {imageurl} />} title={title} bordered={true} className="news-card" >
                    <h5><i><MinusOutlined />{" "+ source}</i></h5>
                    <Divider dashed={false} style={{margin:"5px"}}/>
                    <p>{description}</p>
                    
                
            </Card>
        </a>   
    );
};


export default NewsCard;