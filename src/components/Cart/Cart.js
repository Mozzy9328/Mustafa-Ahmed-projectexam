import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./css/Cart.css";
import trash from "../../Images/trash.svg";

function Cart() {
	const [cartState, setCartState] = useState();
	const navigate = useNavigate();
	const getItemsFromLocalStorage = () => {
		let cartGames = localStorage.getItem("favoriteGames");
		cartGames = JSON.parse(cartGames);
		setCartState(cartGames);
	};
	const removeFromCart = (gameObject) => {
		console.log("gameObject", gameObject);
		console.log("cartState", cartState);
		let filteredcartState = cartState.filter(
			(cartStateObj) => cartStateObj.id !== gameObject.id
		);
		console.log("remove from cart called", gameObject);
		console.log("filtered cart", filteredcartState);
		localStorage.removeItem("favoriteGames");
		localStorage.setItem("favoriteGames", JSON.stringify(filteredcartState));
		setCartState(filteredcartState);
	};
	const moveToCheckOutPage = () => {
		navigate("/checkout");
	};
	useEffect(() => {
		getItemsFromLocalStorage();
	}, []);
	return (
		<>
			<h1>
				<a href="/Home" className="nav-bar1">
					Cart Page
				</a>
			</h1>
			<div className="cart-container">
				<div className="cart-child-container">
					{cartState?.length > 0 ? (
						<>
							{cartState?.map((currentGameObj, index) => {
								return (
									<div className="cart-game">
										<div className="cart-game-image">
											<img
												src={
													"http://localhost:1337" +
													currentGameObj.attributes.TitleImage.data.attributes
														.url
												}
												alt="asd"
											/>
										</div>
										<div className="cart-game-title">
											<h2>{currentGameObj.attributes.Title}</h2>
											<img
												src={trash}
												alt="heart"
												className="heartIcon22"
												onClick={() => removeFromCart(currentGameObj)}
											/>
										</div>
									</div>
								);
							})}
						</>
					) : (
						<>
							<h2>There are no items in the cart</h2>
						</>
					)}
				</div>

				<button
					className="btn-checkout"
					disabled={cartState?.length > 0 ? false : true}
					onClick={moveToCheckOutPage}
				>
					Check out !
				</button>
			</div>
		</>
	);
}

export default Cart;
