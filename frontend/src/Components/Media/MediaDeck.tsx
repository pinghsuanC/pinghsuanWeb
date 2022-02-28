import styled from "styled-components";
import React from "react";
import TwitterFeed from "../../Refactory/TwitterFeed";
import YoutubeEmbed from "../../Refactory/YoutubeEmbed";
import allActions from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../../Context/ThemeContext";
import CenteredFlexDiv from "../../Refactory/CenteredFlexDiv";
import CONSTANTS from "../../Resources/Constant";

/**
 *
 * return list of randomized jsx elements
 * TODO: add Link element at the bottom
 *
 */
const MediaDeck: React.FC = () => {
	const ytStatus = useSelector((state: rootState) => state.ytReducer.status);
	const ytVideos = useSelector((state: rootState) => state.ytReducer.yt);
	const twStatus = useSelector((state: rootState) => state.twReducer.status);
	const twInput = useSelector((state: rootState) => state.twReducer.tw.data);
	const { getThemeColor } = useTheme();
	const device = CONSTANTS.DEVICES;

	const allElement: JSX.Element[] = [];
	const allData: (youtubeSnippet | twData)[] = [];
	ytVideos.forEach((video: youtubeVideo) => {
		allData.push(video.snippet);
	});
	twInput.forEach((tw: twData) => {
		allData.push(tw);
	});
	allData.sort((a: youtubeSnippet | twData, b: youtubeSnippet | twData) => {
		if (a.createdOn === b.createdOn) {
			return 0;
		}
		return a.createdOn > b.createdOn ? -1 : 1;
	});

	allData.forEach(function (data: youtubeSnippet | twData) {
		if (data.type === "youtube") {
			data = data as youtubeSnippet;
			allElement.push(
				<YoutubeEmbed
					id={data.resourceId.videoId}
					videoId={data.resourceId.videoId}
					title={data.title}
					createdOn={data.createdOn}
				/>
			);
		} else if (data.type === "twitter") {
			data = data as twData;
			allElement.push(
				<TwitterFeed
					id={data.id}
					createdOn={data.createdOn}
					content={data.text}
				/>
			);
		}
	});

	return (
		<MediaDeckWrapper>
			<div>FILTER_PLACE_HOLDER</div>
			{allElement &&
				allElement.map((ele) => (
					<MediaDeckElement getThemeColor={getThemeColor} device={device}>
						{ele}
					</MediaDeckElement>
				))}
		</MediaDeckWrapper>
	);
};

const MediaDeckWrapper = styled(CenteredFlexDiv)`
	flex-flow: column wrap;
`;

const MediaDeckElement = styled.div<{
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

export default MediaDeck;
