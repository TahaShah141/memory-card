
export default function Gameover({startOver, playAgain}) {

    return (
        <div className="gameover popup">
            <div className="title-container">
                <h1 className="title">Game Over</h1>
                <p className="subtext name"><span>You </span>Lost</p>
            </div>

            <p className="message">It seems like you chose the same pokemon twice.</p>
            
            <div className="popup-buttons">
                <button className="start-over" onClick={() => {startOver()}}>Start Over</button>
                <button className="play-again" onClick={() => {playAgain()}}>Play Again</button>
            </div>
        </div>
    )
}