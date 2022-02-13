import styled from "styled-components";
import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { useLan } from "../Context/LanguageContext";
import CONSTANTS from "../Resources/Constant";
import allActions from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

const YoutubeEmbed: React.FC<{
	id: string;
	title: string;
	videoId: string;
}> = ({ id, title, videoId }) => {
	const { ytPlayerActions } = allActions;
	const dispatch = useDispatch();
	const ytPlayerVideoId = useSelector(
		(state: rootState) => state.ytPlayerReducer.videoId
	);
	const device = CONSTANTS.DEVICES;
	const { getThemeColor } = useTheme();
	const { getText } = useLan(); // used for switching languages

	// TODO: find a way to pause other videos when playing one
	return (
		<IFrame
			device={device}
			id={id}
			title={title}
			src={`//www.youtube.com/embed/${videoId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></IFrame>
	);
};

const IFrame = styled.iframe<{
	device: deviceType;
}>`
	margin-top: 3px;
	margin-bottom: 3px;
	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
		width: 70%;
		height: 150px;
	}
	@media ${(props) => props.device.tablet}, ${(props) => props.device.laptop} {
		width: 55%;
		height: 300px;
	}
	@media ${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
		width: 35%;
		height: 400px;
	}
`;

export default YoutubeEmbed;
