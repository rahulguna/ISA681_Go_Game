import React from 'react'

const paddingbottom = {
  'padding-bottom':'20px',
};
const marginTop = {
  'margin-top':'5px',
};

class PastGames extends React.Component {
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
            return game.winner !== null
        }, this);
        
        
        if (player_removed.length > 0) {
            return player_removed.map(function (game) {
                    return <li key={game.id} className="list-group-item" style={paddingbottom}>
                        <span className="badge pull-left" style={marginTop}>{game.id}</span>&nbsp; &nbsp;
                        <span>{game.creator.username} vs {game.opponent.username}</span>
                        <a className="btn btn-sm btn-primary pull-right" href={"/game/"+game.id+"/"}>View</a>
                    </li>
            }, this)

        } else {
            return ("No Past Games")
        }
    }

    render() {
        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span>Past Games</span>
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

PastGames.defaultProps = {

};

PastGames.propTypes = {
    game_list: React.PropTypes.array,
    player: React.PropTypes.object

};


export default PastGames
