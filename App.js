import "./styles.css"
// https://www.youtube.com/watch?v=DgRrrOt0Vr8
// lav ny app: 
// number 1 kinda doesn't work. create folder manually
// 0. open terminal eller kosol. cmd eller ctrl+æ. cd stiTilDetStedDuVilHaveAppenTilAtLigge
// 1. lav ny folder -> cmd: expo init AwesomeAppName (kan også gøres fra terminalen, ctrl + æ) ((if error, npm install -g expo-cli))
// 2. cd awesomeappname
// 3. code .  (starter appen i vs code studio)
//
// ctrl + shift + y console
// npm start for at starte programmet
// w web
// ctrl + c for at lukke lortet
// ()=>console.log("printThisWhenPressed") is method

// How to clone repository from GitHub:
// 1. Create a folder
// 2. In terminal: (ctrl + æ) cd path/to/your/directory
// 3. In terminal: git clone ""insert github clone repository URL here""
// 4. In terminal: code repository
// 5. File -> Open folder (ctrl + k)

function App() {
    return (
        <div className="calculator-grid">
            <div classname="output">
                <div className="previous-operand">123,234 *</div>
                <div className="current-operand">123,234</div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>%</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className="span-two">0</button>
        </div>
    )
}

export defualt App