import { Col } from "reactstrap";
import { getCard } from "../../slices/PlayingCard/playingCardSlice";

const PlayingCard = (props) => {
    const { suit, value } = props
    let width = '220px'; let height = '250px'
    return (
        <Col className='mx-auto'>
            <img src={getCard(suit, value)} alt={`${value} of ${suit}`}/>
            <div style={{width: width, height: height, backgroundImage: `url(${getCard(suit, value)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
        </Col>
    );
}

export default PlayingCard