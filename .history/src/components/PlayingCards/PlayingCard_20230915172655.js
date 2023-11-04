import { Col } from "reactstrap";
import { getCard } from "../../slices/PlayingCard/playingCardSlice";

const PlayingCard = (props) => {
    const { suit, value } = props
    let width = '120px'; let height = '150px'
    return (
        // <Col className='mx-auto'>
            <div style={{width: width, height: height, backgroundImage: `url(${getCard(suit, value)})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
        // </Col>
    );
}

export default PlayingCard