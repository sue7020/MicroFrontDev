import React from 'react';

function GridCards(props) {
        return (
                <div style={{ position: 'relative'}}>
                   <a href={`/movie/${props.movieId}`}>
                       <img style={{width: '100%', height: '720px'}} src={props.img} alt={props.movieName}/>
                   </a>
               </div>
            //    ss
        );
}

export default GridCards;