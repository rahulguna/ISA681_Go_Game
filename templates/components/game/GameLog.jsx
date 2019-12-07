import React, {Component, PropTypes} from 'react'

const paddingBottom = {
    'padding-bottom':'15px',
};
const scrollrable = {
    'max-height': '288px',
    'position': 'relative',
    'z-index': '10',
    'overflow-y': 'scroll',
};

class GameLog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            log_entries: props.log_entries,
            chat_text: null
        }

        this.sayIt = this.sayIt.bind(this)

    }
    
    componentWillReceiveProps(newProps){
        this.setState({
            log_entries: newProps.log_entries
            })
    }


    renderLogEntry(entry){
        let log_sender = "System"
        if (entry.player != null){
            log_sender = entry.player.username
            
        }
        return <li key={entry.id} className="list-group-item">
                 <span className="badge pull-left player-badge ">
                        {log_sender}
                </span>
                        &nbsp;&nbsp;<span>{entry.text}</span>
                </li>  
    }

    renderLog(){
        
        if (this.state.log_entries){
          return this.state.log_entries.map(function(entry){
            return this.renderLogEntry(entry)
           }.bind(this))      
        }
        
        
    }



    sayIt(){
        // submit the chat text
        let chat_text = this.refs.log_chat.value
        // send the chat text to the server
        this.props.sendSocketMessage({action: "chat_text_entered", 
                                      text: chat_text, 
                                      game_id: this.props.game_id })
    }
    

    render () {
        return (
            <div>
                <h3>Log</h3>
                <div className="input-group" style={paddingBottom}>
                        <input ref="log_chat" type="text" className="form-control" placeholder="Type to chat..."/>
                        <span className="input-group-btn">
                            <button onClick={this.sayIt} className="btn btn-default" type="button">Say It</button>
                        </span>
                </div>
                <div style={scrollrable}>
                    <ul className="list-group">
                        { this.renderLog() }
                    </ul>
                </div>
            </div>
        )
    }
}

GameLog.propTypes = {
    log_entries: PropTypes.array,
    sendSocketMessage: PropTypes.func
}

export default GameLog