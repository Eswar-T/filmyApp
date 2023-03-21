import '../App.css';
import React, { Suspense, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { Box } from '@mui/material';
import CardList from '../Components/CardList';

function FilmDetail() {
    const location = useLocation();
    const content = location.state.filmdata;
    const [characters, setCharacters] = useState([]);

    const arr = [];
    function characterNames(names) {
        fetch(names)
            .then(async response => {
                const fetchCast = await response.json();
                setCharacters(oldState => ([...oldState, { ...fetchCast }]))
            })
            .catch(error => console.log(error, "error"))
    }

    useEffect(() => {
        const charactersContent = content.characters;
        {
            charactersContent.map((names, index) => (

                <div key={index}>{characterNames(names)}</div>
            ))
        }
    }, [])

    return (
        <div style={{padding:"0.5rem"}}>
            <Box sx={{ color: "whitesmoke", display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
                <h1>{content.title}</h1>
                <h2 style={{ fontWeight: "400", margin: "0" }}>Director : {content.director}</h2>
                <h2 style={{ fontWeight: "400", margin: "0" }}>Producer : {content.producer}</h2>
                <p style={{ textAlign: "left" }}>{content.opening_crawl}</p>
                <div>ReleaseDate : {content.release_date}</div>
            </Box>
            <h4 style={{ textAlign:"left",color:"whitesmoke" }}>Characters :</h4>
            <Box style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"10px",justifyContent:"center",margin:"2rem",color:"whitesmoke"}}>
                <CardList cards={characters} />
            </Box>

        </div >
    );
}

export default FilmDetail;
