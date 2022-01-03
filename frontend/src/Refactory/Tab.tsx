import React from "react";
import styled from "styled-components";
import CONSTANTS from "../Resources/Constant";
import { useResourceContext } from "../Context/ResourceContext";

// The tab to switch between pages
/*
	TODO: :D want to add scrolling functions 
*/
const Tab: React.FC<{ key: string; tabName: string }> = ({ tabName }) => {
	return (
		<TabDiv>
			<TabSpan>{tabName}</TabSpan>
		</TabDiv>
	);
};

const TabSpan = styled.span`
	display: inline-block;
	vertical-align: middle;
	line-height: 15px; /* <-- adjust this */
`;
const TabDiv = styled.div``;

export default Tab;
