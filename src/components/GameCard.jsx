import React from "react";
import { Card, CardMedia, CardActionArea, CardContent, CardActions, Typography, Button } from "@mui/material";
import './styles/components.css'


const GameCard = (props) => {
    return (
        <Card className="vertical-content" style={{ width: '300px', height: '300px', backgroundColor: '#27292B', color: '#AAB6BF' }}>
            <CardMedia
                component="img"
                height="140"
                image={props.game.thumbnail}
                alt={props.game.title + "'s thumbnail"}
            />
            <CardContent>
                <Typography sx={{ fontSize: 17 }} style={{color: '#DEDE1B'}} gutterBottom>
                    {props.game.title}
                </Typography>
                <Typography variant="h7" component="div">
                    {props.game.short_description}
                </Typography>
            </CardContent>
        </Card>
    )
}


export default GameCard 