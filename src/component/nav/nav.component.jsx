import { Navbar, Nav, Col, Row, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
const Navs = () => {
    return (
        <>

            <Col bsPrefix="d-none d-md-block d-lg-block  d-xl-block">
                <Navbar bg="primary" expand="sm">
                    <div className='col-sm-8'>
                        <Navbar.Brand href="/">React and GraphQL</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <ul style={{ display: 'flex', float: 'right', listStyle: 'none', margin: '7px' }}>
                                <li>
                                    <Nav.Link href="/mens">mens</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href="/womens">womens</Nav.Link>

                                </li>
                                <li>
                                    <Nav.Link href="/sneakers">sneakers</Nav.Link>

                                </li>
                                <li>
                                    <Nav.Link href="/jackets">jackets</Nav.Link>

                                </li>
                                <li>
                                    <Nav.Link href="/hats">hats</Nav.Link>

                                </li>

                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar >
            </Col>
            <Col bsPrefix="d-block d-md-none d-lg-none d-xl-none center-item">
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
            </Col>

        </>
    )
}

export default Navs;