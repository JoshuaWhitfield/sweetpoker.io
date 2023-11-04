import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const NavItem = (props) => {
    const { name, path, target } = props;
    if (typeof(path) === 'string') {
        return (
            <Col className='col-1 mx-auto mt-3'><Link className='styled-link' to={path} target={target}><p className='nav-text'>{name}</p></Link></Col>
        );
    }
    else {
        return (
            <Col className='col-1 mx-auto mt-3'><Link className='styled-link' onClick={path} target={target}><p className='nav-text'>{name}</p></Link></Col>
        )
    }
}

export default NavItem