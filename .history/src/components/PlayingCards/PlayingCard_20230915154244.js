

const PlayingCard = (props) => {
    const { suit, value } = props
    let width = '120px'; let height = '150px'
    return (
        <div style={{width: width, height: height, backgroundImage: 'url( '+ `../../app/assets/playing-cards/${value}_of_${suit}` +' )', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
    );
}

export default PlayingCard