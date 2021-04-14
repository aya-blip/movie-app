import React from 'react'
import {Card , Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'
import { Link } from 'react-router-dom';
function MovieCard({movie}) {
    return (
        <div className="list" >
            <Card className="x" style={{ width: '350px' , height:'630px' }}>
  <Card.Img  className= "cart" style={{ width: '350px' , height:'350px' }} variant="top" src={movie.Image} />
  <Card.Body>
    <Card.Title> {movie.Title} </Card.Title>
    <Card.Text>
     {movie.Description}
    </Card.Text>
    <Link to={`/Description/${movie.id}`}  ><Button variant="primary">Description</Button></Link> 
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
