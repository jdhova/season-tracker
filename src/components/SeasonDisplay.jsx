import React from 'react';




const getSeason = (lat, month) => {

    if( month > 2 && month < 9) {
      return  lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter': 'summer'
    }
}

const SeasonDisplay = props => {

const season = getSeason(props.lat, new Date().getMonth())

console.log(season)

    return <div>Season Display</div>
}



// class SeasonDisplay  extends React.Component {
//     state = '';

    
//         render(){

//         const season = getSeason(this.props.lat, new Date().getMonth())
    
//        return  <div>{this.props.lat} </div>
//     }
// }

export default SeasonDisplay