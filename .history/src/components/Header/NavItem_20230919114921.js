import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const NavItem = (props) => {
    const { name, path, target } = props;
    if (typeof(path) === 'string') {
        return (
            
        );
    }
    else {
        return (
            <Col className='col-1 mx-auto mt-3'><Link style={{textDecoration: 'none'}} to={path} target={target}><p className='nav-text'>{name}</p></Link></Col>
        )
    }
}

export default NavItem