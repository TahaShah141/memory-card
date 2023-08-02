import '../styles/popup.css';

export default function Startup({difficulties, setDifficulty}) {
    console.log(difficulties);

    return (
        <div className="startup popup">
            <div className="title-container">
                <h1 className="title">Poke-Memo</h1>
                <p className="subtext name"><span>BY </span>Taha Shah</p>
            </div>

            <p className="message">This is a game about memory and recall.<br />Click each pokemon once and never again. <br />GoodLuck !!!</p>
            
            <div className="popup-buttons">
                <button className="easy" onClick={() => {setDifficulty(difficulties[0])}}>Easy</button>
                <button className="medium" onClick={() => {setDifficulty(difficulties[1])}}>Medium</button>
                <button className="hard" onClick={() => {setDifficulty(difficulties[2])}}>Hard</button>
            </div>
        </div>
    )
}