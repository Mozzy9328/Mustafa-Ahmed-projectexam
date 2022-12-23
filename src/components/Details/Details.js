import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./css/Details.css";
import suitHeart from "../../Images/suit-heart.svg";
import suiHeartFill from "../../Images/suit-heart-fill.svg";
import Cart from "../../Images/Cart.svg";

function Details() {
	const location = useLocation();
	const navigate = useNavigate();
	const getGame = async (id) => {
		const response = await axios.get(
			`http://localhost:1337/api/games/${id}?populate=*`
		);
		const data = response.data.data;
		console.log(data);
		setGame(data);
		setLoading(false);
		let favoriteGames = JSON.parse(
			localStorage.getItem("favoriteGames") || "[]"
		);

		let foundGame = favoriteGames.find(
			(favoriteGamesObj) => favoriteGamesObj.id === game?.id
		);
		if (foundGame) {
			setHeartState(true);
		}
		console.log("in useEffect", foundGame);
	};
	const addGameToFavorite = async (currentFavoriteGame) => {
		// const heartTempState = [...heartState];
		let favoriteGames = JSON.parse(
			localStorage.getItem("favoriteGames") || "[]"
		);
		let foundGame = favoriteGames.find(
			(favoriteGamesObj) => favoriteGamesObj.id === currentFavoriteGame.id
		);
		console.log("favoriteGames", favoriteGames);
		console.log("currentFavoriteGame", currentFavoriteGame);
		if (!foundGame) {
			favoriteGames.push(currentFavoriteGame);
			localStorage.removeItem("favoriteGames");
			localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
			setHeartState(true);
		} else {
			favoriteGames = favoriteGames.filter(
				(game) => game.id !== currentFavoriteGame.id
			);
			localStorage.removeItem("favoriteGames");
			localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
			setHeartState(false);
		}
		// heartTempState = heartTempState ? false : true;
		// setHeartState(heartTempState);
	};

	useEffect(() => {
		let startIndex = location.pathname.lastIndexOf("/");
		console.log("location.pathname", location.pathname);
		const id = location.pathname.substring(
			startIndex + 1,
			location.pathname.length
		);
		getGame(id);
	}, []);

	const [loading, setLoading] = useState(true);
	const [game, setGame] = useState();
	const [heartState, setHeartState] = useState();
	const moveToCart = () => {
		navigate("/cart");
	};

	return (
		<div>
			{loading ? (
				<>
					<Loader />
				</>
			) : (
				<div className="main-container1">
					<h1>
						<a href="/Home" className="nav-bar1">
							Details Page
						</a>
					</h1>
					<div className="logout">
						<a
							href="/"
							onClick={() => {
								localStorage.clear();
							}}
						>
							logout
						</a>
						<img
							src={Cart}
							alt="cart"
							className="cart-icon"
							onClick={moveToCart}
						/>
					</div>
					<div className="games-container1">
						<div className="game-title">
							<h2>Title: </h2>
							<h3>{game.attributes?.Title}</h3>
						</div>
						<div className="game-image1">
							<img
								className="game-image-details"
								src={
									"http://localhost:1337" +
									game.attributes.TitleImage.data.attributes.url
								}
								alt="asd"
							/>
						</div>
						<div className="game-description">
							<h4>Description</h4>
							<p>{game.attributes?.Description}</p>
						</div>
						<div className="add-to-favorite-icon">
							<img
								src={heartState ? suiHeartFill : suitHeart}
								alt="heart"
								className="heartIcon"
								onClick={(e) => addGameToFavorite(game)}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Details;
