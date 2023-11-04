import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { deck } = props;
    deck.river.deal()
    const riverArr = deck.river.item[:-1].split(" ");
    console.log(riverArr)
    
    return (
        <>
            {
                
            }
        </>
    );
}

export default River