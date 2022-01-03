import "./App.css";
import React, { ReactText } from "react";
import GlobalStyle from "./GlobalStyle";

// written components
import ScrollToTop from "./Refactory/ScrollToTop";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import About from "./Components/About";
import Post from "./Components/Post";
import Media from "./Components/Media";

// context
import { ResourceProvider } from "./Context/ResourceContext";

// native/installed components
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";

function App() {
	return (
		<div className="App">
			<ResourceProvider>
				<BrowserRouter>
					<ScrollToTop />
					<RouteWrapper>
						<Header />
						<Routes>
							<Route path="/about" element={<About />} />
							<Route path="/post" element={<Post />} />
							<Route path="/media" element={<Media />} />
							<Route path="*" element={<About />} />
						</Routes>
						<Footer />
					</RouteWrapper>
				</BrowserRouter>
			</ResourceProvider>
			<GlobalStyle />
		</div>
	);
}

const RouteWrapper = styled.div`
	//border: 3px solid black;
	min-height: 100vh;
	height: auto;
	width: 100vw;
	overflow: scroll;
`;

export default App;
