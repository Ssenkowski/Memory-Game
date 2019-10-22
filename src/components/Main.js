import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Welcome from './welcome-menu/Welcome';
import Board from '../containers/Board';
import Scoreboard from './scoreboard/Scoreboard';
import Profile from './profile/Profile';



const Main = () => (
     <main>
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/game' component={Board}/>
            <Route path='/scoreboard' container={Scoreboard}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
    </main> 
)

export default Main;