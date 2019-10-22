import React, {Component} from 'react';
import  axios from 'axios';
 
class Form extends Component {
    constructor(){
        super();
    this.state = {
    firstName: "",
    lastName: "",
    userName: ""
  }}

    onChangeFirstName = event  => {
        this.setState({ 
            firstName: event.target.value,
            lastName: event.target.value,
            userName: event.target.value 
        })
    }

    onChangeLastName = event  => {
        this.setState({ 
            lastName: event.target.value,
        })
    }

    onChangeUserName = event  => {
        this.setState({ 
            userName: event.target.value 
        })
    }

    onSubmit = event => {
        event.preventDefault();

        const user = { 
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            userName: this.state.userName
        };

        axios.post('/api/v1/users',  {user})
            .then(response => {
                console.log(response);
                console.log(response.data);
            }) 
        }

  render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <input type="text" name="firstName" onChange={this.onChangeFirstName} />
                <input type="text" name="lastName" onChange={this.onChangeLastName} />
                <input type="text" name="userName" onChange={this.onChangeUserName} />
                <button type="submit" value="Submit">Create</button>
            </form>
      </div>
    )
  }
}
  

 
export default Form;