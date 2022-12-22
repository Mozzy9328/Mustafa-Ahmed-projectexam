import React from "react";
import { Carousel } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Game1 from "../../Images/Game1.jpg";
import Game11 from "../../Images/Game11.jpg";
import Game22 from "../../Images/Game22.jpg";
import "./css/Main.css";

function Main() {
	return (
		<div>
			<NavBar />
			<Carousel>
				<Carousel.Item>
					<img
						id="carouselImage"
						className="d-block w-100"
						src={Game11}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>The perfect world of games</h3>
						<p>The world where people fight with each other.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						id="carouselImage"
						className="d-block w-100"
						src={Game1}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Games are part of life</h3>
						<p>The unmatch journey continue to run.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						id="carouselImage"
						className="d-block w-100"
						src={Game22}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>The captain america</h3>
						<p>Perfect place to conquer the world.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Main;
