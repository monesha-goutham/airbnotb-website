import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />

				<Switch>
					<Route path="/search">
						<SearchPage />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
