import React, {Component, useState} from "react";
import "./Assessment.css";



const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);
class Assessment extends Component {
  
  

  render() {
    const { orders } = this.state;
    console.log(orders)
    return (
      <div>
        <form >
          <input
            className="filter-search"
            placeholder="Filter by worker name..."
            value={this.state.key_word}
          /></form>
          
          <div className="content-wrapper">
          <div className="content-item">
            <h1>Work order</h1>
            <img
              className="profile-img"
              src="https://placeimg.com/640/480/any"
            ></img>
            <div className="profile-details">
              <h2>{orders.name}</h2>
              <p>company</p>
              <p>Email</p>
            </div>
          </div>

          <div className="content-item">
            {" "}
            <h1>Work order</h1>
            <img
              className="profile-img"
              src="https://placeimg.com/640/480/any"
            ></img>
            <div className="profile-details">
              <h2>First Name Last Name</h2>
              <p>company</p>
              <p>Email</p>
            </div>
          </div>

          <div className="content-item">
            {" "}
            <h1>Work order</h1>
            <img
              className="profile-img"
              src="https://placeimg.com/640/480/any"
            ></img>{" "}
            <div className="profile-details">
              <h2>First Name Last Name</h2>
              <p>company</p>
              <p>Email</p>
            </div>
          </div>

          <div className="content-item">
            {" "}
            <h1>Work order</h1>
            <img
              className="profile-img"
              src="https://placeimg.com/640/480/any"
            ></img>{" "}
            <div className="profile-details">
              <h2>First Name Last Name</h2>
              <p>company</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Assessment;
