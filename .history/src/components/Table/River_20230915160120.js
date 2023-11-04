import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { deck } = props;
    deck.river.deal();
    const river = deck.river.item;
    console.log(river)
    return (
        <>
            {
                
            }
        </>
    );
}

export default River