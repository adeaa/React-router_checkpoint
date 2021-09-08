import React from 'react';
import {useHistory} from 'react-router-dom'
const MovieCard = ({title, description, posterURL, rating}) => {
    let history = useHistory()
    const styles ={
        card :{
            display:"flex",
            flexDirection:"row",
            border:"1px bold black",
            cursor:"pointer",

        },
        image:{
            width:"20vw",
            height:"30vw"
        },
        info:{
            padding:"10px 20px"
        }
    }


    return ( 
        <div className="card m-1" style={styles.card} onClick={()=>history.push(`/title/${title}`)}>
            <img src={posterURL} style={styles.image} alt={title} />
            <div className="info" style={styles.info}>
                <h2>{title}</h2>
                <h5>⭐{rating}</h5>
                <p>{description}</p>
            </div>
        </div>
    
     );
}
 
export default MovieCard;