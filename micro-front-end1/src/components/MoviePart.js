import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL, IMG_BASE_URL} from "../Config";
import GridCards from "./commons/GridCards";
import { Grid } from "@material-ui/core";

function MoviePart() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    const [CurrentPage, setCurrentPage]= useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;
        fetchMovies(endpoint)
    }, '');

    const fetchMovies =(endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setMovies([...Movies, ...response.results])
                setCurrentPage(response.page)
                setMainMovieImage(response.results[0])
            })
    }

    const loadMoreItems =() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=${CurrentPage +1}`;
        fetchMovies(endpoint)
    }

        return (
            <div style = {{width :'100%', margin : '0'}}>

                <div style = {{width :'85%', margin : '1rem auto'}}>
                    <h2>Movies by latest</h2>
                    <hr/>
                    {/* Movie List */}
                    <Grid container spacing={2}>
                        {Movies && Movies.map((movie, index) => (
                        <Grid item xs={8} sm={6} md={3} key={index}>
                        <GridCards
                                    img = {movie.poster_path ? `${IMG_BASE_URL}w500${movie.poster_path}` : null}
                                    movieId = {movie.id}
                                    movieName = {movie.original_title}
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

export default MoviePart;