import React, { useEffect, useState } from "react";
import "./Checkout.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Modals from "../Modal/Modal";

function Checkout() {
	const [itemsState, setItemsState] = useState();
	const [show, setShow] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [address, setAddress] = useState();
	const [cardName, setCardName] = useState();
	const [cardNumber, setCardNumber] = useState();
	const [expirationDate, setExpirationDate] = useState();
	const [cvv, setCvv] = useState();
	const [isRadio, setIsRadio] = useState();

	const getItemsFromLocalStorage = () => {
		let cartGames = localStorage.getItem("favoriteGames");
		cartGames = JSON.parse(cartGames);
		setItemsState(cartGames);
	};
	const showModal = (show) => {
		setShow(show);
	};
	useEffect(() => {
		getItemsFromLocalStorage();
	}, []);
	return (
		<>
			<div className="checkout-container">
				<h1>
					{" "}
					<a href="/Home" className="nav-bar1">
						Checkout page
					</a>
				</h1>
				<div className="checkout-form">
					<div className="checkout-form-first">
						<div className="checkout-form-billing">
							<h2 className="form-h2">Billing Address</h2>
							<InputGroup size="sm" className="mb-3">
								<InputGroup.Text id="inputGroup-sizing-sm">
									First Name
								</InputGroup.Text>
								<Form.Control
									aria-label="Small"
									aria-describedby="inputGroup-sizing-sm"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</InputGroup>
							<InputGroup size="sm" className="mb-3">
								<InputGroup.Text id="inputGroup-sizing-sm">
									Last Name
								</InputGroup.Text>
								<Form.Control
									aria-label="Small"
									aria-describedby="inputGroup-sizing-sm"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</InputGroup>
							<InputGroup size="sm" className="mb-3">
								<InputGroup.Text id="inputGroup-sizing-sm">
									Address
								</InputGroup.Text>
								<Form.Control
									aria-label="Small"
									aria-describedby="inputGroup-sizing-sm"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</InputGroup>
						</div>
						<div className="checkout-form-payment">
							<h2 className="form-h2">Payment</h2>

							<Form>
								<div key={`default-radio1`} className="mb-3 test radioButtons">
									<Form.Check
										type="radio"
										id="default-radio1"
										label="Paypal"
										checked={isRadio === 1}
										onChange={() => setIsRadio(1)}
									/>
								</div>

								<div key={`default-radio2`} className="mb-3 test radioButtons">
									<Form.Check
										type="radio"
										id="default-radio2"
										label="Debit Card"
										checked={isRadio === 2}
										onChange={() => setIsRadio(2)}
									/>
								</div>

								<div key={`default-radio3`} className="mb-3 test radioButtons">
									<Form.Check
										type="radio"
										id="default-radio3"
										label="Credit Card"
										checked={isRadio === 3}
										onChange={() => setIsRadio(3)}
									/>
								</div>
							</Form>
						</div>
						<div className="checkout-form-cardinfo">
							<h2 className="form-h2">Card details</h2>

							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className=""> </Form.Label>
									<Form.Control
										type="text"
										placeholder="Name on card"
										className="cardname-input"
										value={cardName}
										onChange={(e) => setCardName(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className=""> </Form.Label>
									<Form.Control
										type="number"
										placeholder="Card Number"
										className="cardname-input"
										value={cardNumber}
										onChange={(e) => setCardNumber(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className=""> </Form.Label>
									<Form.Control
										type="number"
										placeholder="Expiration"
										className="cardname-input"
										value={expirationDate}
										onChange={(e) => setExpirationDate(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className=""> </Form.Label>
									<Form.Control
										type="number"
										placeholder="CVV"
										className="cardname-input"
										value={cvv}
										onChange={(e) => setCvv(e.target.value)}
									/>
								</Form.Group>
							</Form>
						</div>
					</div>
					<div className="checkout-form-second">
						<h4 className="form-h4">Your Cart: {itemsState?.length} item</h4>
					</div>
				</div>
				<button
					className="btn-checkout btn-proceed"
					onClick={(e) => {
						e.preventDefault();
						if (
							!firstName ||
							!lastName ||
							!address ||
							!cardName ||
							!cardNumber ||
							!expirationDate ||
							!cvv ||
							!isRadio
						) {
							alert("Please fill all the fields");
						} else {
							showModal(true);
						}
					}}
				>
					Proceed !
				</button>
				{show ? (
					<>
						<Modals show={show} showModal={showModal} />
					</>
				) : (
					<>
						<></>
					</>
				)}
			</div>
		</>
	);
}

export default Checkout;
