import React, {Component} from 'react';
import Form from '../Form'

class createUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

    render() {
        return (
          <div className="create-user">
            <Form />
          </div>
      )
    };
}

export default createUser;