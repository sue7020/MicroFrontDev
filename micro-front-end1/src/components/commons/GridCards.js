import React from 'react';
import {Col} from 'antd';


function GridCards(props) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style ={{position : 'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style = {{width : '90%', height : '320px'}} src = {props.img} alt = {props.movieName}/>
                    </a>
                </div>
            </Col>
        );
}

export default GridCards;