import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, IMG_BASE_URL} from "../Config";
import GridCards from "./commons/GridCards";
import { Grid } from "@material-ui/core";

function TVPart() {

    const [TVs, setTVs] = useState([]);
    const [MainTVImage, setMainTVImage] = useState(null);
    const [CurrentPage, setCurrentPage]= useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=ko&page=1`;
        fetchTVs(endpoint)
    }, '');

    const fetchTVs =(endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setTVs([...TVs, ...response.results])
                setCurrentPage(response.page)
                setMainTVImage(response.results[0])
            })
    }

    const loadMoreItems =() => {
        const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=ko&page=${CurrentPage +1}`;
        fetchTVs(endpoint)
    }

        return (
            <div style = {{width :'100%', margin : '0'}}>

                <div style = {{width :'85%', margin : '1rem auto'}}>
                    <h2>Popular TV Shows</h2>
                    <hr/>
                    {/* TV List */}
                    <Grid container spacing={2}>
                        {TVs && TVs.map((TV, index) => (
                        <Grid item xs={8} sm={6} md={3} key={index}>
                        <GridCards
                                    img = {TV.poster_path ? `${IMG_BASE_URL}w500${TV.poster_path}` : null}
                                    TVId = {TV.id}
                                    TVName = {TV.original_title}
                                />
                        </Grid>
                        ))}

                    </Grid>

                </div>

                <div style = {{display :'flex', justifyContent : 'center'}}>
                    <button onClick={loadMoreItems}>Load More</button>
                </div>
            </div>
        );

}

export default TVPart;