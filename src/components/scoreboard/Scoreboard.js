import React, {Component} from 'react';
import axios from 'axios';
import Button from '../welcome-menu/Button'

class Scoreboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      scoreboard: []
    }
  }

//   getUser() {
//     axios.get('/api/v1/users')
//     .then(response => {
//       this.setState({users: response.data})
//     })
//     .catch(error => console.log(error))
//   }

//   componentDidMount() {
//     this.getUser()
//   }

    render() {
        return (
        <Button />
      )
    };
}

export default Scoreboard;
