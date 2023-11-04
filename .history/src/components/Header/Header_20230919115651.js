import '../../css/header/header.scss'
import { Row, Col } from "reactstrap";
import Button from '../Button';
import Logo from '../../app/assets/logo/logo-gradient.png'
import { Link, useLocation } from 'react-router-dom';
import NavList from './NavList';



const Header = () => {
    if (useLocation().pathname === '/lobby/play') return null

    return (
        <>
            <div className='container container-fluid debug2'>
                <div className='center-content debug' style={{height: '80px', width: 'fit-content'}}>
                    <Col className='col-2'><Link to={'/'}><img style={{width: '190px', height: '30%'}} src={Logo} alt='logo' /></Link></Col>
                    <Col className='offset-2 col-6'>
                        <NavList />
                    </Col>
                    <Col className='col-3 center-content offset-1 full-height' style={{justifyContent: 'end'}}><Button path={'/chip-store'} target={'blank_'} name={'Top Up'} width='110px' /></Col>
                </div>
            </div>
        </>
    );
}

export default Header