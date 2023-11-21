import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
      count6: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name : {this.props.name}</h2>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
              count3: this.state.count3 + 1,
              count4: this.state.count4 + 1,
              count5: this.state.count5 + 1,
              count6: this.state.count6 + 1,
            });
          }}
        >
          Update All Count
        </button>
        <h2>Count 1: {this.state.count1}</h2>
        <h2>Count 2: {this.state.count2}</h2>
        <h2>Count 3: {this.state.count3}</h2>
        <h2>Count 4: {this.state.count4}</h2>
        <h2>Count 5: {this.state.count5}</h2>
        <h2>Count 6: {this.state.count6}</h2>
        <h3>Loaction : Rajkot</h3>
        <h4>Contact : @yashkhokhar28</h4>
      </div>
    );
  }
}

export default UserClass;
