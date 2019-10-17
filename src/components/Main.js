import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Welcome from './welcome-menu/Welcome';
import Board from '../containers/gameboard/Board';
import Scoreboard from './scoreboard/Scoreboard';


const Main = () => (
     <main>
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/game' component={Board}/>
            <Route path='/scoreboard' container={Scoreboard}/>
        </Switch>
    </main> 
)

export default Main;