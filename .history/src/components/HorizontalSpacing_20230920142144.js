
const HorizontalSpacing = (props) => {
    let { width } = props;
    if (!width) width = '20px'
    return (
        <div style={{width: width}}></div>
    );
}

export default HorizontalSpacing