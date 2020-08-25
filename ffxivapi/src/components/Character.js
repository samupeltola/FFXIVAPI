import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
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

state = {
    loading: true,
    character: null
};

async componentDidMount() {
    const url = "https://xivapi.com/character/8729279?data=CJ";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.Character);
    this.setState({ Character: data.Character, loading: false })
}

    render() {
        return (
            <div>
                {this.state.loading || !this.state.Character ? (
                <div className="Character">loading...</div>
                ) : (
                    <div className="Character">
                        <div className="CharacterName"> {this.state.Character.Name} </div>
                        <img src={this.state.Character.Avatar} alt="Character Icon"/>
                        <div>Current class: { this.state.Character.ActiveClassJob.UnlockedState.Name } </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Character;