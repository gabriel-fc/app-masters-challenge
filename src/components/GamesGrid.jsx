import React from "react";
import { Grid } from "@mui/material";
import GameCard from "./GameCard"




const GamesGrid = (props) => {

    console.log(props)
    return (
        <>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                {props.games.map((game, index) => (
                    <Grid item sx={{display: 'flex', justifyContent: 'center'}} key={index} xs={12} sm={6} md={4} lg={4} >
                        <GameCard game = {game}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}


export default GamesGrid





