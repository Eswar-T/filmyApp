import '../App.css';
import React, { useEffect, useState } from 'react';
// import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';
import CardList from '../Components/CardList';

// import { useDispatch, useSelector } from "react-redux";
// import { getData } from '../redux/Actions';


function FilmList() {
  const [data, setData] = useState([]);
  // const dispatch = useDispatch();
  // const jsonData = useSelector((state)=>state.getDataReducer);
  // console.log(jsonData,"json");
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(async response => {
        const jsonData = await response.json();
        setData(jsonData.results)
        console.log(jsonData, "response")
      })
      .catch(error => console.log(error, "error"))
    // dispatch(getData());
  }, [])

  return (
    <Box sx={{ background: "", width: "90vw", height: "90vh", display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "0.5rem", gap: "10px " }}>
      <CardList cards={data} />
      {/* {
        data.map((films, index) => (
          <NavLink key={index} to={`/${index}`} state={{ filmdata: films }}>{films.title}</NavLink>
        ))
      } */}
    </Box>
  );
}

export default FilmList;
