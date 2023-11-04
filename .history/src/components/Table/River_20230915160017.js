import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { deck } = props;
    const river = deck.river.deal();
    console.log(deck.river.item)
    return (
        <>
 
        </>
    );
}

export default River