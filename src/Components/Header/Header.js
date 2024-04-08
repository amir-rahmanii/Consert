import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="xxl" bg="white">
                <Navbar.Brand><Link to='/' className='linkheaderBrand'>ایران کنسرت</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/allProduct' className='linkheader'> همه برنامه ها</Link>
                        <Link to='/productPopTehran' className='linkheader'> کنسرت های پاپ تهران</Link>
                        <Link to='/celebrationMusicFajr' className='linkheader'>جشنواره موسیقی فجر </Link>
                        <Link to='/consertSonati' className='linkheader'> کنسرت های سنتی</Link>
                        <Link to='/productPopCities' className='linkheader'>کنسرت های شهرستان ها </Link>
                    </Nav>
                    {/* <Nav> */}
                    {/* <Link className='linkheader' to='/peigiryBuy'>پیگیری خرید </Link> */}
                    {/* </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
