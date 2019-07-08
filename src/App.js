import React, {Component } from 'react';
import './App.css';

class App extends Component{
    
    constructor(){
        super();
        this.state = {
            board : Array(9).fill(null),
            player : "X",
            winner : null
        }
    }
    
    checkWinner( ) {
        let winLines = [
            ["0","1","2"],["3","4","5"],["6","7","8"],
            ["0","3","6"],["1","4","7"],["2","5","8"],
            ["0","4","8"],["2","4","6"]
        ];

        for (let index = 0; index < winLines.length; index++ ) {
            const [a, b, c] = winLines[index];
            let board = this.state.board;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                let wonBy = ( this.state.player == "O" ) ? "X" : "O";
                alert( wonBy +" won");
                this.setState({
                    winner: wonBy
                })
            }
        }
    }
    handleClick( index ){
        let newBoard = this.state.board;
        if ( newBoard[index] == null && !this.state.winner) {
            let newPlayer = ( this.state.player === "X" ) ? "O" : "X";
            newBoard[index] = newPlayer;
            this.setState( { player : newPlayer } );
            this.setState( { board : newBoard  } );
            this.checkWinner( );    
        }
        
    }

    render() {
        const Board = this.state.board.map( (box, index) => <div onClick={ (e) => this.handleClick( index ) }className="box" key={index}>{box}</div> )
        return (
            <div className="App">
                <h3 className="text-center">Tic Tac Toe</h3>
                <div className="main-box">
                    {Board}
                </div>
            </div>
        );
    }
}

export default App;
