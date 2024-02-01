import Card from "../card/Card";
import './grid.css'
function Grid({numberOfCards}) {
    return (
        <div className="body">
            <div className="grid">
                {Array(numberOfCards).fill(<Card />).map((element, index) => {return <Card key={index} />})}
            </div>
        </div>
    )
}
export default Grid;