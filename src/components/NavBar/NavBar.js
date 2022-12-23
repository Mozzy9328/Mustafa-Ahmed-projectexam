import React from "react";
// import { Container } from "react-bootstrap";
import "./css/NavBar.css";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavBar() {
	return (
		<div className="fix-height">
			<Navbar className="navbar">
				<div className="navbar-container">
					<Navbar.Brand href="/">Bits & Bots</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/signup">Signup</Nav.Link>
					</Nav>
				</div>
			</Navbar>
		</div>
	);
}

export default NavBar;
