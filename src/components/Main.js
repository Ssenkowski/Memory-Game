import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Welcome from './welcome-menu/Welcome';
import Board from '../containers/Board';
import Scoreboard from './scoreboard/Scoreboard';
import Profile from '../containers/User';
import createUser from './user/createUser';


const Main = () => (
     <main>
        <Switch>
            <Route exact path='/' container={Welcome}/>
            <Route path='/game' component={Board}/>
            <Route path='/scoreboard' component={Scoreboard}/>
            <Route path='/user' component={createUser}/>
            <Route path='/profile' component={Profile}/>
            
        </Switch>
    </main> 
)

export default Main;