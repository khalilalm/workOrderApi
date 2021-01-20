import React from "react"
import "./Worker.css"

const Worker = (props) => {
  return (<div>
  
    <div className="worker-main">
      <div className="worker-wrapper">

      
     
     
      <img src={props.worker.image} alt={props.worker.name} height="40%" width="40%"
      className="profile-img"/>
        <ul>
          <ol>{props.worker.name}</ol>
          <ol>{props.worker.companyName}</ol>
          <ol>{props.worker.email}</ol>
        </ul>
      </div>
     
    </div>  
  </div>
  )
}
export default Worker