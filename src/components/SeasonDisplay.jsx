import React from 'react';
import '../App.css';




const getSeason = (lat, month) => {

    if( month > 2 && month < 9) {
      return  lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter': 'summer'
    }
}

const SeasonDisplay = props => {

const season = getSeason(props.lat, new Date().getMonth())
const seasonText = season === 'winter'? "Get a Jacket its chilly" : "Lets hit the beach its Summer time"
// const icon = season === 'winter'? 'snowflakes': 'sun'

    return (
    <div className= 'container'>
        <h1>
            {seasonText}   
         </h1>
    </div>
    )
}



// class SeasonDisplay  extends React.Component {
//     state = '';

    
//         render(){

//         const season = getSeason(this.props.lat, new Date().getMonth())
    
//        return  <div>{this.props.lat} </div>
//     }
// }

export default SeasonDisplay