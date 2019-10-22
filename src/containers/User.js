import React, {Component} from 'react';
import Profile from '../components/profile/Profile';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: []
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
        <Profile /*onClick={flipPiece}*/ users={this.state.users} />
        /*Pass prop notaMatch or match! to <Piece/>.  if notaMatch
        reset piece to isFlipped: false else  add points to scoreboard 
          */
        /* Need to replicate <Piece/> to make a 5x5 game board
        with the different retrieved this.state.text results 
        from Piece.js get request generated when the play button
        is clicked.  They should be evenly spaced throughout the
        visible window */
      )
    };
}

export default User;