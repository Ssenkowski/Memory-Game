import React, {Component} from 'react';
import Profile from '../components/profile/Profile';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  getUser() {
    axios.get('/api/v1/users')
    .then(response => {
      this.setState({users: response.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getUser()
  }

    render() {
        return (
          <div className="user-profiles">
            <Profile users={this.state.users} />
          </div>
      )
    };
}

export default User;