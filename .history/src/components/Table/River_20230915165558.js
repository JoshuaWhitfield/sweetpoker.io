import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { deck } = props;
    deck.generate()
    deck.river.deal()
    let riverArr = deck.river.item.split(" ");
    riverArr = riverArr.slice(0, riverArr.length-1)
    console.log(riverArr)
    return (
        <>
            {
                riverArr.map(
                    (card_name) => {
                        let value = card_name.split('_')[0]
                    }
                )
            }
        </>
    );
}

export default River