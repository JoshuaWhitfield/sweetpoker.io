import PokerTableImage from '../../app/assets/play-room/poker-table.png'
import { deck } from '../../poker-engine/poker-engine';
import River from './River';
import PlayingCard from '../PlayingCards/PlayingCard';

const Table = (props) => {
    const { width, height } = props;
    //const table = new pokerTable(9)
    //console.log(table.sides)

    return (
        <>
            <PlayingCard suit='spades' value='K'/>
            {/* <div className='center-content' style={{width: width, height: height, backgroundImage: `url(${PokerTableImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <River deck={deck}/>
                
            </div> */}
        </>
    );
}

export default Table