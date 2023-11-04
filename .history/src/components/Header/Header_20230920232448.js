import '../../css/header/header.scss'
import { Col } from "reactstrap";
import Button from '../Styling/Button';
import Logo from '../../app/assets/logo/logo-gradient.png'
import { Link, useLocation } from 'react-router-dom';
import NavList from './NavList';



const Header = () => {
    if (useLocation().pathname === '/lobby/play') return null

    return (
        <div className='flex jcc aic' style={{width: '100%'}}>
            <div className='container container-fluid'>
                <div className='center-content' style={{height: '80px', width: 'fit-content'}}>
                    <Col className='col-2'><Link to={'/'}><img style={{width: '190px', height: '30%'}} src={Logo} alt='logo' /></Link></Col>
                    <Col className='offset-2 col-6'>
                        <NavList />
                    </Col>
                    <Col className='col-3 center-content offset-2 full-height' style={{justifyContent: 'end'}}><Button path={'/chip-store'} target={'blank_'} name={'Top Up'} width='110px' /></Col>
                </div>
            </div>
        </div>
    );
}

export default Header