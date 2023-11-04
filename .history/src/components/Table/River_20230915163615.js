import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { deck } = props;
    deck.river.deal()
    let riverArr = deck.river.item.split(" ");
    riverArr = riverArr.slice(0, riverArr.length-2)
    console.log(riverArr)
    
    return (
        <>
            {
                
            }
        </>
    );
}

export default River