import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { deck } = props;
    deck.river.deal()
    const riverArr = deck.river.item.split(" ").slice(-1);
    console.log(riverArr)
    
    return (
        <>
            {
                
            }
        </>
    );
}

export default River