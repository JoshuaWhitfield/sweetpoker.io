import PlayingCard from '../PlayingCards/PlayingCard'
import { Row } from "reactstrap";

const River = (props) => {
    let { riverArr } = props;
    console.log(riverArr)
    return (
        <Row>
            {
                riverArr.map(
                    (card_name) => {
                        let value = card_name.split('_')[0]
                        let suit = card_name.split('_')[1]
                        return (
                            <PlayingCard suit={suit} value={value} />
                        );
                    }
                )
            }
        </Row>
    );
}

export default River