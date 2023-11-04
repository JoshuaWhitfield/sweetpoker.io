import PokerTableImage from '../../app/assets/play-room/poker-table.png'
import { deck } from '../../poker-engine/poker-engine';
import River from './River';


const Table = (props) => {
    const { width, height } = props;
    //const table = new pokerTable(9)
    //console.log(table.sides)

    return (
        <>
            <div className='center-content' style={{width: width, height: height, backgroundImage: `url(${PokerTableImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                {/* {<East table={() => {return table}}/>} */}
                <River deck={deck}/>
            </div>
        </>
    );
}

export default Table