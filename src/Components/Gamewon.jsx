
export default function Gamewon({startOver, playAgain}) {

    return (
        <div className="gamewon popup">
            <div className="title-container">
                <h1 className="title">Congrats !</h1>
                <p className="subtext name"><span>You </span>Won</p>
            </div>

            <p className="message">Outstanding memory!<br />You caught all the Pokemon.</p>
            
            <div className="popup-buttons">
                <button className="start-over" onClick={() => {startOver()}}>Start Over</button>
                <button className="play-again" onClick={() => {playAgain()}}>Play Again</button>
            </div>
        </div>
    )
}