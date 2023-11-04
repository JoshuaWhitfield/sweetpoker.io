
const HorizontalSpacing = (props) => {
    let { width } = props;
    if (!width) width = '20px'
    return (
        <div style={{width: '10px'}}></div>
    );
}

export default HorizontalSpacing