import '../../css/header/header.scss'
import { Container, Row, Col } from "reactstrap";
import Button from '../Button';
import Logo from '../../app/assets/logo/logo-gradient.png'
import { Link, useLocation } from 'react-router-dom';
import NavList from './NavList';



const Header = () => {
    if (useLocation().pathname === '/lobby/play') return null

    return (
        <>
            <Container>
                <Row className='center-content debug' style={{height: '80px', width: '100%'}}>
                    <Col className='col-2 mt-5' style={{height: '100%'}}><Link to={'/'}><img style={{width: '190px', height: '30%'}} src={Logo} alt='logo' /></Link></Col>
                    <Col className='offset-1 col-6'>
                        <NavList />
                    </Col>
                    <Col className='col-3 center-content mx-auto mt-1' style={{justifyContent: 'end'}}><Button path={'/chip-store'} target={'blank_'} name={'Top Up'} width='110px' /></Col>
                </Row>
            </Container>
        </>
    );
}

export default Header