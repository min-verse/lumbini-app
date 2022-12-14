import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../context/auth.context';
import { UserContext } from '../context/user.context';
import { useContext } from 'react';

function BootHeader() {

    const {setAuth} = useContext(AuthContext);
    const {setUser} = useContext(UserContext);
  
    function handleSignOut(){
      localStorage.removeItem("jwt");
      setUser({});
      setAuth(false);
    }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 navbar-colorset">
                    <Container fluid>
                        <Navbar.Brand href="#" className="navbar-brand"><Link to="/new-log" className="navbar-brand">Lumbini</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Lumbini
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link><Link to="/new-log" className="navbar-item">Write New Log</Link></Nav.Link>
                                    <Nav.Link><Link to="/all-logs" className="navbar-item">All Logs</Link></Nav.Link>
                                    <Nav.Link onClick={handleSignOut} className="navbar-item"><Link to="/login" className="navbar-item">Sign Out</Link></Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default BootHeader;