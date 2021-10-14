import React from 'react';
import { Link }  from "react-router-dom";

function GridCards(props) {

    return (
                <div style={{ position: 'relative'}}>
                    <Link to={`/movie/${props.movieId}`}>
                        <img style={{width: '100%', height: '720px'}} src={props.img} alt={props.movieName}/>
                    </Link>
               </div>
        );
}

export default GridCards;