import React from 'react'

const paddingbottom = {
  'padding-bottom':'20px',
};
const marginTop = {
  'margin-top':'5px',
};
const backgroundColor = {
    'background':'#4a4949',
};
const bordorColor = {
    'border-color': '#4a4949',
};

class AvailableGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game_list: this.props.game_list
        }

     this.renderGameList = this.renderGameList.bind(this);

    }

    componentWillReceiveProps(newProp) {
        this.setState({ game_list: newProp.game_list })
    }

    renderGameList() {
        // clear out games owned by this player
        let player_removed = this.props.game_list.filter(function(game) {
            return game.creator.id !== this.props.player.id
        }, this);
        
        
        if (player_removed.length > 0) {
            return player_removed.map(function (game) {
                    return <li key={game.id} className="list-group-item" style={paddingbottom}>
                        <span className="badge pull-left" style={marginTop}>{game.id}</span>&nbsp; &nbsp;
                        <span>{game.creator.username} vs???</span>
                        <a className="btn btn-sm btn-primary pull-right" style={backgroundColor} href={"/game/"+game.id+"/"}>Join</a>
                    </li>
            }, this)

        } else {
            return ("No Available Games")
        }
    }

    render() {
        return (
            <div>
                <div className="panel panel-primary" style={bordorColor}>
                    <div className="panel-heading" style={backgroundColor}>
                        <span>Available Games</span>
                    </div>
                    <div className="panel-body">
                        <div>
                            <ul className="list-group games-list">
                                {this.renderGameList() }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

AvailableGames.defaultProps = {

};

AvailableGames.propTypes = {
    game_list: React.PropTypes.array,
    player: React.PropTypes.object

};


export default AvailableGames

