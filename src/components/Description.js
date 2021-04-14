import React,{useEffect,useState} from 'react'
import './card.css'
import {Button}from 'react-bootstrap'
const Description = (props) => {
    const [Movie, setMovie] = useState(null)
    const GoBack=()=>{
        props.history.goBack();
    }

    useEffect(() => {setMovie(props.movies.filter(el=>el.id==props.match.params.id) [0])}
    )
    
    return (
        <div className="card1">
            {Movie && <p> {Movie.Description} </p>}
            <Button style={{marginLeft:'390px'}}onClick={GoBack}>Go Back</Button>
        </div>
    )
}

export default Description

