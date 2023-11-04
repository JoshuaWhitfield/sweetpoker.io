import PlayingCard from "../PlayingCards/PlayingCard";

const River = (props) => {
    let { river } = props;
    river.deal();
    const riverArr = river.item.split(" ");
    console.log(riverArr)
    
    return (
        <>
            {
                
            }
        </>
    );
}

export default River