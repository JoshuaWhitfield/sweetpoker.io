import { Col } from "reactstrap";

const PlayingCard = (props) => {
    const { suit, value } = props
    let width = '120px'; let height = '150px'
    return (
        <Col className='mx-auto'>
            <div style={{width: width, height: height, backgroundImage: 'url( '+ `../../app/assets/playing-cards/${value}_of_${suit}` +' )', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
        </Col>
    );
}

export default PlayingCard