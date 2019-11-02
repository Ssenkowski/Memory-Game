import React, {Component} from 'react';
import API from "../utils/API"
 
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
            firstname: this.state.firstName, 
            lastname: this.state.lastName, 
            username: this.state.userName
        };
        
        // fetch('https://localhost:3001/user', {
        //     method: 'POST',
        //     headers: {

        //     },
        //     mode: "cors",
        //     body: JSON.stringify(user)
        // }).then(response => console.log(response))
        // .catch(error => console.log(error))

            
         API.post(`/users`,  {user, headers:'Access-Control-Allow-Origin'})
             .then(response => {
                 console.log(response);
                 console.log(response.data);
             }).catch((err) => { console.log('Axios error:', err);})
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