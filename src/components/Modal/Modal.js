import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./css/Modal.css";

function Modals({ show, showModal }) {
	const navigate = useNavigate();
	const handleClose = () => showModal(false);
	const handleBrowse = () => {
		localStorage.removeItem("favoriteGames");
		navigate("/");
	};
	//   const handleShow = () => showModal(true);
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Checkout </Modal.Title>
				</Modal.Header>
				<Modal.Body>Do you want to proceed with it.</Modal.Body>
				<Modal.Footer>
					<Button className="btn-checkout btn-proceed" onClick={handleClose}>
						Close
					</Button>
					<Button className="btn-checkout btn-proceed" onClick={handleBrowse}>
						Go ahead
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Modals;
