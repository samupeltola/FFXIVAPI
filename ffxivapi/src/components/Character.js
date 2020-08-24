import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Character.css'
import XIVAPI from 'xivapi-js'
const xiv = new XIVAPI()



class Character extends Component {
/*  to display character info with fetch. Character ID: 8729279
    options: https://xivapi.com/character/8729279?data=AC,FR,FC,FCM,PVP  
AC	Achievements
MIMO	Minions & Mounts
CJ	Class/Jobs data
FR	Friends List
FC	Free Company
FCM	Free Company Members
PVP	PVP Team
*/
    render() {
        return (
            <div>
            
            </div>
        );
    }
}

export default Character;