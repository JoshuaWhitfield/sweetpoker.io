import { Col } from "reactstrap";
import { getCard } from "../../slices/PlayingCard/playingCardSlice";

const PlayingCard = (props) => {
    const { suit, value } = props
    let width = '220px'; let height = '250px'
    //<div style={{width: width, height: height, backgroundImage: `url(${getCard(suit, value)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
    return (
        <Col className='mx-auto'>
            <img src={require(getCard(suit, value))} alt={`${value} of ${suit}`}/>
        </Col>
    );
}

export default PlayingCard