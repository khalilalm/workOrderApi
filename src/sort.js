import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
class Sort extends React.Component {
state = {
    sorted: false
  }
handleToggle = () => {
    if (this.state.sorted) {
      this.props.sort("asc")
    } else {
      this.props.sort("desc")
    }
    this.setState({sorted: !this.state.sorted})
}
render() {
    return (
    <div>
  <div class="switch">
    <label>
      Off
      <input type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>

  <div class="switch">
    <label>
      Off
      <input disabled type="checkbox">
      <span class="lever"></span>
      On
    </label>
  </div>
    </div>
   
    )
  }
}
export default Sort;   
      {/* // <div className="sort">
      // <div className="sortText">Earliest    Latest</div>
      //   <input
      //     checked={this.state.sorted}
      //     onChange={this.handleToggle}
      //     className="react-switch-checkbox"
      //     id={`react-switch-new`}
      //     type="checkbox"
          
      //   /><span className="slider"></span>
      //   <label
      //     style={{ background: this.state.sorted && '#06D6A0' }}
      //     className="react-switch-label"
      //     htmlFor={`react-switch-new`}
      //   >
      //     <span className={`react-switch-button`} />
      //   </label>
      // </div> */}