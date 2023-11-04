import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const NavItem = (props) => {
    const { name, path, target } = props;
    if (typeof(path) === 'string') {
        return (
            <Col className='col-1 mx-auto mt-3 nav-text'><Link style={{textDecoration: 'none'}} to={path} target={target}><p>{name}</p></Link></Col>
        );
    }
    else {
        return (
            <Col className='col-1 mx-auto mt-3 nav-text'><Link style={{textDecoration: 'none'}} onClick={path} target={target}><p>{name}</p></Link></Col>
        )
    }
}

export default NavItem