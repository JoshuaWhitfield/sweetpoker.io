import PokerTableImage from '../../app/assets/play-room/poker-table.png'
//import { pokerTable } from '../../poker-engine/table-engine';
import { determine_hand, river, pocket } from '../../poker-engine/poker-engine';
import River from './River';
// import East from './East';
// import Player from "../PlayConsole/Player";

const Table = (props) => {
    const { width, height } = props;
    //const table = new pokerTable(9)
    //console.log(table.sides)

    return (
        <>
            <div className='center-content' style={{width: width, height: height, backgroundImage: `url(${PokerTableImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                {/* {<East table={() => {return table}}/>} */}
                <River river={river}/>
            </div>
        </>
    );
}

export default Table