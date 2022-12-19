import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import './Signup.css';
import Game11 from '../../Images/Game11.jpg';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Email is invalid');
    } else {
      setError(null);
      localStorage.setItem(email, password);
      alert('Signup successful');
      console.log(email);
      console.log(password);
      navigate('/login');
    }
  };
  return (
    <div>
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
                        Please enter your email and password for Signup!
                      </p>
                      <div className="mb-3">
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="text-center">
                              Email address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
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
                              onClick={handleRegister}
                            >
                              Register
                            </Button>
                          </div>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0  text-center">
                            Already have an account ?{' '}
                            <a href="/login" className="text-secondary fw-bold">
                              Login
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
    </div>
  );
}

export default Signup;
