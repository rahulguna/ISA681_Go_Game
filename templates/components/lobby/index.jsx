import React from 'react';
import LobbyBase from './LobbyBase.jsx'
import ReactDOM from 'react-dom'
import $ from 'jquery'

var lobby_sock = 'ws://' + 'localhost:8080' + "/lobby/"
var current_user = null

const base_url = "https://localhost/"
const url = base_url + "current-user/?format=json"

$.get(url, function(result){
    // gets the current user information from Django
    current_user = result
    render_component()
})


function render_component(){
    ReactDOM.render(<LobbyBase current_user={current_user} socket={lobby_sock}/>, document.getElementById('lobby_component'))

}

