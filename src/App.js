import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Checkout from "./components/Checkout/Checkout";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Main />}></Route>
					<Route exact path="/login" element={<Login />}></Route>
					<Route exact path="/signup" element={<Signup />}></Route>
					<Route exact path="/home" element={<Home />}></Route>
					<Route exact path="/Details/:id" element={<Details />}></Route>
					<Route exact path="/cart" element={<Cart />}></Route>
					<Route exact path="/checkout" element={<Checkout />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
