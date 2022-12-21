import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./Home.css";
import suitHeart from "../../Images/suit-heart.svg";
import suiHeartFill from "../../Images/suit-heart-fill.svg";
import Cart from "../../Images/Cart.svg";

function Home() {
	const getGenres = async () => {
		const response = await axios.get(
			"http://localhost:1337/api/generes?populate=*"
		);
		const data = response.data.data;
		setGenresList(data);
		console.log(data);
		setLoading(false);
	};
	const getGames = async () => {
		console.log(currentGenere);
		const response = await axios.get(
			`http://localhost:1337/api/games?genere=${currentGenere}&populate=*`
		);
		let data = response.data.data;
		let heartTempState = [];
		for (let i = 0; i < data.length; i++) {
			heartTempState.push(false);
		}
		let favoriteGames = JSON.parse(
			localStorage.getItem("favoriteGames") || "[]"
		);
		for (let i = 0; i < data?.length; i++) {
			if (
				favoriteGames.find(
					(favoriteGameObj) => favoriteGameObj.id === data[i].id
				)
			) {
				heartTempState[i] = true;
			}
		}
		setHeartState(heartTempState);
		console.log("games", data);
		setOriginalGames(data);
		data = data.filter(
			(dataObj) => dataObj.attributes.GenereType === currentGenere
		);
		setCurrentGames(data);
	};
	const addGameToFavorite = async (index, currentFavoriteGame) => {
		console.log(index);
		const heartTempState = [...heartState];
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
		} else {
			favoriteGames = favoriteGames.filter(
				(game) => game.id !== currentFavoriteGame.id
			);
			localStorage.removeItem("favoriteGames");
			localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
		}
		heartTempState[index] = heartTempState[index] ? false : true;
		setHeartState(heartTempState);
	};
	const setTheCurrentGenre = (selectedGenre) => {
		console.log(selectedGenre.attributes.Name);
		setCurrentGenere(selectedGenre.attributes.Name);
	};
	const moveToNextComponent = (currentGameObj) => {
		navigate(`/Details/${currentGameObj.id}`);
	};
	const moveToCart = () => {
		navigate("/cart");
	};
	const [loading, setLoading] = useState(true);
	const [genresList, setGenresList] = useState();
	const [currentGenere, setCurrentGenere] = useState("Shooter Games");
	const [currentGames, setCurrentGames] = useState();
	const [heartState, setHeartState] = useState();
	const [originalGames, setOriginalGames] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		getGenres();
		getGames();
		console.log("useEffect1");
	}, []);
	useEffect(() => {
		console.log("useEffect2");
		let data = originalGames;
		data = data?.filter(
			(dataObj) => dataObj.attributes.GenereType === currentGenere
		);

		let favoriteGames = JSON.parse(
			localStorage.getItem("favoriteGames") || "[]"
		);
		let heartTempState = [];
		if (favoriteGames) {
			for (let i = 0; i < data?.length; i++) {
				heartTempState.push(false);
			}
			for (let i = 0; i < data?.length; i++) {
				if (
					favoriteGames.find(
						(favoriteGameObj) => favoriteGameObj.id === data[i].id
					)
				) {
					heartTempState[i] = true;
				}
			}
		}
		setCurrentGames(data);
		setHeartState(heartTempState);
		console.log("currentGames", currentGames);
		console.log("currentGenere", currentGenere);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentGenere]);

	useEffect(() => {
		const favoriteGames = localStorage.getItem("favoriteGames") || "[]";
		console.log("favoriteGames from localStorage", favoriteGames);
	}, []);
	return (
		<>
			<div className="main-container">
				{loading ? (
					<>
						<Loader />
					</>
				) : (
					<>
						<nav>
							{genresList?.map((genresListObj) => {
								return (
									<li
										key={genresListObj.id}
										onClick={() => setTheCurrentGenre(genresListObj)}
									>
										<p>{genresListObj.attributes.Name}</p>
									</li>
								);
							})}
						</nav>
						<div className="logout">
							<a
								href="/"
								onClick={() => {
									localStorage.clear();
								}}
							>
								Logout
							</a>
							<img
								src={Cart}
								alt="cart"
								className="cart-icon"
								onClick={moveToCart}
							/>
						</div>

						<div className="games-container">
							{currentGames?.map((currentGameObj, index) => {
								return (
									<div className="game">
										<div
											className="game-image"
											onClick={() => moveToNextComponent(currentGameObj)}
										>
											<img
												src={
													"http://localhost:1337" +
													currentGameObj.attributes.TitleImage.data.attributes
														.url
												}
												alt="asd"
											/>
										</div>
										<div className="game-title">
											<h6 onClick={() => moveToNextComponent(currentGameObj)}>
												{currentGameObj.attributes.Title}
											</h6>
											<img
												src={heartState[index] ? suiHeartFill : suitHeart}
												alt="heart"
												className="heartIcon"
												onClick={(e) =>
													addGameToFavorite(index, currentGameObj)
												}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Home;
