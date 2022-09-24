import React from 'react'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function ShowDetails(props) {
    const {showName,summary,rating} = props
    
  return (
    <div className='showDetails'>
        <div id='divInfo' className='infoDiv'>
        <span className='infoPara'>{showName} </span>
            <details className='details'><summary >The more information is...</summary> <p>{summary}</p></details>
            {(rating) ? <span> {rating}</span> : 0}⭐
        </div>
    </div>
  )
}

export default ShowDetails