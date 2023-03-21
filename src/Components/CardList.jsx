import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const CardList = ({ cards }) => {
    return (
        <React.Fragment>
            {
                cards.map((card,index) => {
                    console.log(card);
                    return (
                        <Box sx={{
                            background: "#1d1d1da3", minWidth: "200px", width: "200px", height: "300px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center",
                        }}>
                            <Link to={`/${index}`} state={{ filmdata:card }} style={{ textDecoration: "none", fontWeight: "bold", fontSize: "20px", wordWrap: "break-word", color: "whitesmoke" }}>{card.title}</Link>
                            <h5>{card.name}</h5>
                        </Box>
                    )
                })
            }
        </React.Fragment >
    )
}

export default CardList