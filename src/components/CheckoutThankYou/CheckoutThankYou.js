import React from "react";
import "./css/CheckoutThankYou.css";

function CheckoutThankYou() {
	return (
		<>
			<div className="thankyou-container">
				<h1>Thank you for choosing us!</h1>
				<button>
					<a href="/home">Take me home</a>
				</button>
			</div>
		</>
	);
}

export default CheckoutThankYou;
