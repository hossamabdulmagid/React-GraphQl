import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
const Navs = () => {
    return (



        <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="/">React and GraphQL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="text-center" >
                <Nav className="mr-auto">
                    <Nav.Link href="/mens">mens</Nav.Link>
                    <Nav.Link href="/womens">womens</Nav.Link>
                    <Nav.Link href="/sneakers">sneakers</Nav.Link>
                    <Nav.Link href="/jackets">jackets</Nav.Link>
                    <Nav.Link href="/hats">hats</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navs;