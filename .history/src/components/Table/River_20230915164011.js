import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { deck } = props;
    deck.generate()
    deck.river.deal()
    let riverArr = deck.river.item.split(" ");
    riverArr = riverArr.slice(0, riverArr.length-1)
    console.log(riverArr)
    if (riverArr.length > 5) riverArr = riverArr.slice(0, 4)
    return (
        <>
            {
                
            }
        </>
    );
}

export default River