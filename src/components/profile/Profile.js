import React from 'react'

const Profile = (props) => (
  <div className="user-profile">
      console.log(props)
  {props.profile.map((profile) => 
  <div key={profile.id} className="game-profile" alt={'unflipped'}>
    <li> {profile.text} {profile.id} </li>
   </div>
   )}
</div>);

export default Profile;