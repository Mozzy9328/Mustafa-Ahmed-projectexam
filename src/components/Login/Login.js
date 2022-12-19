import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Game11 from "../../Images/Game11.jpg";
import "./Login.css";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const isValidEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		if (!isValidEmail(email)) {
			setError("Email is invalid");
		} else {
			setError(null);
			let retrivedPassword = localStorage.getItem(email);
			if (!retrivedPassword) {
				alert("User doesn't exists");
			} else if (password === retrivedPassword) {
				alert("Login successful");
				console.log(email);
				console.log(password);
				navigate("/home");
			} else {
				alert("Password didn't matched try again!");
			}
		}
	};
	return (
		<div className="container">
			<div className="loginform">
				<Container bg="light">
					<Row className="vh-100 d-flex justify-content-flex-end align-items-center">
						<Col md={10} lg={6} xs={12}>
							<div className="border border-3 border-secondary"></div>
							<Card className="shadow">
								<Card.Body>
									<div className="mb-3 mt-md-4">
										<h2 className="fw-bold mb-2 text-uppercase ">
											Bits & Bots
										</h2>
										<p className=" mb-5">
											Please enter your login and password!
										</p>
										<div className="mb-3">
											<Form>
												<Form.Group className="mb-3" controlId="formBasicEmail">
													<Form.Label className="text-center">
														Email address
													</Form.Label>
													<Form.Control
														type="email"
														placeholder="Enter email"
														onChange={(e) => setEmail(e.target.value)}
													/>
													{error && <h2 style={{ color: "red" }}>{error}</h2>}
												</Form.Group>

												<Form.Group
													className="mb-3"
													controlId="formBasicPassword"
												>
													<Form.Label>Password</Form.Label>
													<Form.Control
														type="password"
														placeholder="Password"
														onChange={(e) => setPassword(e.target.value)}
													/>
												</Form.Group>
												<div className="d-grid">
													<Button
														variant="secondary"
														type="submit"
														onClick={handleLogin}
													>
														Login
													</Button>
												</div>
											</Form>
											<div className="mt-3">
												<p className="mb-0  text-center">
													Don't have an account?{" "}
													<a href="/signup" className="text-secondary fw-bold">
														Sign Up
													</a>
												</p>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="posterImage">
				<img src={Game11} alt="asda" />
			</div>
		</div>
	);
}

export default Login;
