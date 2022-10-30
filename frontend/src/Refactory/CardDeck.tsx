import styled from "styled-components";
import React from "react";
import TwitterFeed from "./TwitterFeed";
import YoutubeEmbed from "./YoutubeEmbed";
import allActions from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../Context/ThemeContext";
import CenteredFlexDiv from "./CenteredFlexDiv";
import CONSTANTS from "../Resources/Constant";
import { useResourceContext } from "../Context/ResourceContext";

/**
 *
 * return list of jsx elements
 * TODO: add Link element at the bottom
 *
 */
const CardDeck: React.FC<{ cards: JSX.Element[] }> = ({
	cards,
}): JSX.Element => {
	const { CONSTANTS, useTheme } = useResourceContext();
	const device = CONSTANTS.DEVICES;
	const { getThemeColor } = useTheme();
	return (
		<>
			{cards &&
				cards.map((ele) => (
					<Card getThemeColor={getThemeColor} device={device}>
						{ele}
					</Card>
				))}
		</>
	);
};

const Card = styled.div<{
	device: deviceType;
	getThemeColor: (arg0: string) => string;
}>`
	border: 1px solid ${(props) => props.getThemeColor("MAIN_COLOR_DARK")};
	border-radius: 10px;

	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
		width: 80%;
		margin-top: 5px;
	}
	@media ${(props) => props.device.tablet}, ${(props) => props.device.laptop} {
		width: 55%;
		margin-top: 5px;
	}
	@media ${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
		width: 40%;
		margin-top: 5px;
	}
`;

export default CardDeck;
