import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import GameCard from "./GameCard"
import './styles/components.css'





const GamesGrid = (props) => {
    const [searchText, setSearchText] = useState("")
    function searchHandler(e){
        console.log(e.target.value)
        useState(e.target.value)
    }

    console.log(props)
    return (
        <>
            <Grid container className='grid' spacing={5} justifyContent="center" alignItems="center">
                <TextField
                    label="Search"
                    className="searchBar"
                    variant="outlined"
                    InputProps={{
                        style: { color: "white", width: '90vw'},
                      }}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                />
                {props.games.filter((game)=>{
                    return game.title.includes(searchText)
                }).map((game, index) => (
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  key={index} xs={12} sm={6} md={4} lg={4} >
                        <GameCard game={game} />
                    </Grid>
                ))}
            </Grid>

        </>
    )
}


export default GamesGrid





