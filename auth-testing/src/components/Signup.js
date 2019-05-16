import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <h2> Sign Up </h2>
          <form>
            <div className="form-group">
              <label for= "firstName">First Name: </label>
              <input type="text" className="form-control-sm" id="firstName" placeholder="First Name"/>
            </div>
            <div className="form-group">
              <label for= "lastName">Lase Name: </label>
              <input type="text" className="form-control-sm" id="lastName" placeholder="Last Name"/>
            </div>
            <div className="form-group">
              <label for= "email">Email: </label>
              <input type="text" className="form-control-sm" id="email" placeholder="email@email.com"/>
            </div>
          </form>
      </div>
    )
  }
}

export default Signup;
